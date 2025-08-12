import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
import ProposalForm from "@/components/ProposalForm";
import LinkGenerated from "@/components/LinkGenerated";
import ProposalStory from "@/components/ProposalStory";

type AppState = 'home' | 'about' | 'form' | 'generated' | 'preview' | 'story';

const Index = () => {
  const [searchParams] = useSearchParams();
  const [currentState, setCurrentState] = useState<AppState>('home');
  const [proposalData, setProposalData] = useState<{
    name: string;
    replyUrl: string;
    link: string;
  } | null>(null);

  // Check if we're viewing a proposal link
  const proposalName = searchParams.get('name');
  const replyUrl = searchParams.get('reply');

  if (proposalName) {
    return <ProposalStory partnerName={proposalName} replyUrl={replyUrl || undefined} />;
  }

  const generateProposalLink = (name: string, replyUrl: string) => {
    const encodedName = encodeURIComponent(name);
    const encodedReply = replyUrl ? `&reply=${encodeURIComponent(replyUrl)}` : '';
    const link = `${window.location.origin}/?name=${encodedName}${encodedReply}`;
    
    setProposalData({ name, replyUrl, link });
    setCurrentState('generated');
  };

  const handlePreview = () => {
    setCurrentState('preview');
  };

  if (currentState === 'about') {
    return <AboutPage onBack={() => setCurrentState('home')} />;
  }

  if (currentState === 'preview' && proposalData) {
    return (
      <ProposalStory 
        partnerName={proposalData.name} 
        replyUrl={proposalData.replyUrl || undefined} 
      />
    );
  }

  return (
    <>
      <HomePage
        onProposeClick={() => setCurrentState('form')}
        onAboutClick={() => setCurrentState('about')}
      />

      {currentState === 'form' && (
        <ProposalForm
          onClose={() => setCurrentState('home')}
          onGenerate={generateProposalLink}
        />
      )}

      {currentState === 'generated' && proposalData && (
        <LinkGenerated
          onClose={() => setCurrentState('home')}
          onPreview={handlePreview}
          proposalLink={proposalData.link}
        />
      )}
    </>
  );
};

export default Index;
