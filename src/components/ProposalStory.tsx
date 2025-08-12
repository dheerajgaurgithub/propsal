import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import kenichiShizukaSakura from "@/assets/kenichi-shizuka-sakura.jpg";
import kenichiShizukaFlowers from "@/assets/kenichi-shizuka-flowers.jpg";
import kenichiShizukaPark from "@/assets/kenichi-shizuka-park.jpg";
import kenichiShizukaLunch from "@/assets/kenichi-shizuka-lunch.jpg";
import kenichiShizukaDance from "@/assets/kenichi-shizuka-dance.jpg";
import kenichiShizukaLake from "@/assets/kenichi-shizuka-lake.jpg";
import kenichiShizukaCelebration from "@/assets/kenichi-shizuka-celebration.jpg";
import kenichiShizukaProposal from "@/assets/kenichi-shizuka-proposal.jpg";

interface ProposalStoryProps {
  partnerName: string;
  replyUrl?: string;
}

interface StoryPage {
  id: number;
  message: string;
  shayari: string;
  image: string;
  buttonText: string;
}

const storyPages: StoryPage[] = [
  {
    id: 1,
    message: "I want to tell you something special that's been in my heart for so long... 💕",
    shayari: "चाँद सितारों से कहा है हमने\nतुम्हारी मोहब्बत का किस्सा सुनाया है\nदिल की गहराइयों में छुपे हैं जो राज़\nआज उन्हें तुमसे कहने का वक्त आया है",
    image: kenichiShizukaSakura,
    buttonText: "Continue"
  },
  {
    id: 2,
    message: "I fell in love with you not for how you look, but for who you are - your beautiful soul, your kindness, your amazing heart that makes my world brighter every single day ✨",
    shayari: "रूप नहीं, रूह की खूबसूरती देखी है\nतुम्हारी अच्छाई में अपना आसमान देखा है\nदिल ने कहा है ये वो शख्स है\nजिसके प्यार में मैंने अपनी मंज़िल देखी है",
    image: kenichiShizukaFlowers,
    buttonText: "Tell me more"
  },
  {
    id: 3,
    message: "Your absence feels stronger to me than the presence of thousands of other people. When you're not around, my heart feels incomplete, like a puzzle missing its most important piece 💖",
    shayari: "तुम्हारी गैरमौजूदगी सिखाती है\nकि तुम कितने अज़ीज़ हो मेरे लिए\nहज़ारों लोगों के बीच भी लगता है\nसुनसान ये दिल, बस तुम्हारे लिए",
    image: kenichiShizukaPark,
    buttonText: "Continue"
  },
  {
    id: 4,
    message: "You have been my source of strength, my safe haven, and my greatest support. I'm not just glad you're in my life - I'm grateful every single day that the universe brought us together 🌟",
    shayari: "तुम हो मेरी ताकत, मेरा सहारा\nतुम हो मेरी दुआ का इजाबत\nखुदा से हर रोज़ शुक्रिया कहता हूँ\nकि मिला मुझे तुम्हारा प्यार की नेमत",
    image: kenichiShizukaLunch,
    buttonText: "Next"
  },
  {
    id: 5,
    message: "I was lost in a world of black and white, but when you came into my life, you brought every color imaginable. You painted my heart with love, my days with joy, and my future with hope 🌈💝",
    shayari: "सियाह रातों में तुमने सुर्ख सवेरा दिया\nबेरंग ज़िंदगी को इंद्रधनुष का प्यारा दिया\nमेरे दिल के कैनवस पर रंग बिखेरे हैं\nमुझे एक नई ज़िंदगी का सहारा दिया",
    image: kenichiShizukaDance,
    buttonText: "Continue"
  },
  {
    id: 6,
    message: "Every moment with you feels like a beautiful dream I never want to wake up from. Your smile lights up my darkest days, your laugh is my favorite song, and your love is my greatest treasure 💎",
    shayari: "तुम्हारी मुस्कान में जन्नत नज़र आती है\nतुम्हारी हंसी से मेरी रूह खिल जाती है\nहर लम्हा तुम्हारे साथ एक ख्वाब लगता है\nजिससे कभी न जागना चाहे ये दिल की बात है",
    image: kenichiShizukaLake,
    buttonText: "Almost there"
  },
  {
    id: 7,
    message: "They say when you know, you know. And I know that I want to spend forever making you as happy as you make me. You're not just my love - you're my best friend, my partner, my everything 👫💕",
    shayari: "दिल कहता है तुम हो मेरी मंज़िल अंतिम\nतुम्हारे बिना अधूरी है मेरी हर ख्वाहिश\nसाथ चलना है ज़िंदगी भर का सफ़र\nबस यही है मेरी सबसे बड़ी आरज़ू और फरियाद",
    image: kenichiShizukaCelebration,
    buttonText: "Final words"
  },
  {
    id: 8,
    message: "So here I am, with my heart in my hands and my soul laid bare, ready to ask you the most important question of my life... 💍✨",
    shayari: "अब वक्त आया है कह देने का\nजो दिल में छुपा था वो इज़हार करने का\nहाथों में लिए दिल, आँखों में सपने\nपूछना है तुमसे ज़िंदगी भर का सवाल प्यार का",
    image: kenichiShizukaProposal,
    buttonText: "Ask the question"
  }
];

const ProposalStory = ({ partnerName, replyUrl }: ProposalStoryProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showFinalQuestion, setShowFinalQuestion] = useState(false);
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);

  const handleNext = () => {
    if (currentPage < storyPages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setShowFinalQuestion(true);
    }
  };

  const handleResponse = (answer: 'yes' | 'no') => {
    setResponse(answer);
  };

  if (response === 'yes') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-200 via-pink-100 to-purple-200 flex items-center justify-center p-4 md:p-6">
        <div className="text-center space-y-6 md:space-y-8 max-w-md md:max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-pink-200">
          <div className="text-5xl md:text-6xl">🎉💕🎉</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Yayyy! Thank You {partnerName}! 💖
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            You just made me the happiest person in the world! 
            Our love story is just beginning...
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center text-2xl md:text-3xl">
            <span className="animate-bounce">💝</span>
            <span className="animate-bounce delay-100">🌹</span>
            <span className="animate-bounce delay-200">💍</span>
            <span className="animate-bounce delay-300">👫</span>
            <span className="animate-bounce delay-400">❤️</span>
          </div>
          {replyUrl && (
            <Button
              onClick={() => window.open(replyUrl, '_blank')}
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              💬 Message Me Back
            </Button>
          )}
        </div>
      </div>
    );
  }

  if (response === 'no') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-200 via-blue-100 to-purple-100 flex items-center justify-center p-4 md:p-6">
        <div className="text-center space-y-6 md:space-y-8 max-w-md md:max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-200">
          <div className="text-5xl md:text-6xl">😔💔</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700">
            I Respect Your Decision
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            I understand that not every story has the ending we hope for. 
            Thank you for being honest with me. I will always cherish the moments we've shared, 
            and I hope we can remain friends. You deserve all the happiness in the world.
          </p>
          <p className="text-base md:text-lg text-gray-500">
            Take care, {partnerName} 🤝
          </p>
        </div>
      </div>
    );
  }

  if (showFinalQuestion) {
    return (
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 md:p-6 relative"
        style={{ backgroundImage: `url(${kenichiShizukaProposal})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-900/30 to-pink-900/30"></div>
        <div className="relative text-center space-y-6 md:space-y-8 max-w-md md:max-w-2xl bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-pink-200">
          <div className="text-5xl md:text-6xl">💖</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            {partnerName}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Will You Be Mine? 💕
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            This is the moment I've been waiting for...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleResponse('yes')}
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Yes! 💕
            </Button>
            <Button
              onClick={() => handleResponse('no')}
              className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-300"
            >
              Sorry, No 💔
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const page = storyPages[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100">
      {/* Mobile Layout */}
      <div className="block lg:hidden min-h-screen">
        <div className="flex flex-col min-h-screen">
          {/* Image Section - Mobile */}
          <div className="h-64 sm:h-80 p-4 flex items-center justify-center bg-gradient-to-br from-rose-200/50 to-pink-200/50">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-300/60 via-pink-300/60 to-purple-300/60 rounded-2xl blur-xl animate-pulse"></div>
              <img
                src={page.image}
                alt="Love story moment"
                className="relative w-full h-48 sm:h-64 object-cover rounded-2xl shadow-2xl border-4 border-white/70"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Content Section - Mobile */}
          <div className="flex-1 p-4 flex items-center justify-center">
            <div className="w-full max-w-md space-y-4">
              <div className="bg-gradient-to-br from-white/95 via-pink-50/80 to-purple-50/60 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-2 border-pink-200/50">
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center">
                  Hey {partnerName} 💕
                </h1>
                
                <div className="space-y-4 mb-6">
                  {/* Main Message */}
                  <div className="p-4 bg-gradient-to-r from-rose-100/80 via-pink-100/80 to-purple-100/60 rounded-xl border border-rose-200/50 shadow-sm">
                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                      {page.message}
                    </p>
                  </div>
                  
                  {/* Shayari Section */}
                  <div className="p-4 bg-gradient-to-br from-yellow-100/80 via-orange-100/80 to-pink-100/60 rounded-xl border border-orange-200/50 shadow-sm">
                    <h3 className="text-xs font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-3 text-center">
                      💝 Shayari 💝
                    </h3>
                    <p className="text-center text-gray-700 font-medium leading-relaxed whitespace-pre-line text-xs sm:text-sm italic">
                      {page.shayari}
                    </p>
                  </div>
                </div>
                
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold text-sm sm:text-base px-6 py-3 rounded-xl w-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {page.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              {/* Progress indicators */}
              <div className="flex justify-center space-x-2">
                {storyPages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                      index <= currentPage 
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg transform scale-110 border border-white' 
                        : 'bg-rose-200/50 border border-rose-300/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block min-h-screen">
        <div className="min-h-screen flex">
          {/* Left Side - Image */}
          <div className="w-1/2 border-r-4 border-gradient-to-b from-rose-300 to-pink-300 flex items-center justify-center p-8 bg-gradient-to-br from-rose-100/50 to-pink-100/50">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-6 bg-gradient-to-r from-rose-300/40 via-pink-300/40 to-purple-300/40 rounded-3xl blur-2xl animate-pulse"></div>
              <img
                src={page.image}
                alt="Love story moment"
                className="relative w-full h-[500px] xl:h-[600px] object-cover rounded-3xl shadow-2xl border-4 border-white/70"
              />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-1000 shadow-lg"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-1/2 border-l-4 border-gradient-to-b from-rose-300 to-pink-300 flex items-center justify-center p-8 bg-gradient-to-br from-purple-50/50 to-rose-50/50">
            <div className="w-full max-w-lg space-y-8">
              <div className="bg-gradient-to-br from-white/95 via-pink-50/80 to-purple-50/60 backdrop-blur-sm rounded-3xl p-8 xl:p-10 shadow-2xl border-2 border-pink-200/50">
                <h1 className="text-4xl xl:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-8 text-center">
                  Hey {partnerName} 💕
                </h1>
                
                <div className="space-y-6 mb-8">
                  {/* Main Message */}
                  <div className="p-6 bg-gradient-to-r from-rose-100/80 via-pink-100/80 to-purple-100/60 rounded-2xl border border-rose-200/50 shadow-sm">
                    <p className="text-lg xl:text-xl text-gray-800 leading-relaxed">
                      {page.message}
                    </p>
                  </div>
                  
                  {/* Shayari Section */}
                  <div className="p-6 bg-gradient-to-br from-yellow-100/80 via-orange-100/80 to-pink-100/60 rounded-2xl border border-orange-200/50 shadow-sm">
                    <h3 className="text-sm font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4 text-center">
                      💝 Shayari 💝
                    </h3>
                    <p className="text-center text-gray-700 font-medium leading-relaxed whitespace-pre-line text-base xl:text-lg italic">
                      {page.shayari}
                    </p>
                  </div>
                </div>
                
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold text-lg xl:text-xl px-8 py-4 rounded-2xl w-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {page.buttonText}
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </div>
              
              {/* Progress indicators */}
              <div className="flex justify-center space-x-4">
                {storyPages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 xl:w-5 xl:h-5 rounded-full transition-all duration-500 ${
                      index <= currentPage 
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg transform scale-110 border-2 border-white' 
                        : 'bg-rose-200/50 border border-rose-300/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-10 md:top-20 left-4 md:left-10 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-32 md:top-40 right-8 md:right-20 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-500 opacity-70"></div>
      <div className="absolute bottom-16 md:bottom-20 left-8 md:left-20 w-4 h-4 md:w-5 md:h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse delay-1500 opacity-70"></div>
      <div className="absolute bottom-32 md:bottom-40 right-4 md:right-10 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse delay-700 opacity-70"></div>
    </div>
  );
};

export default ProposalStory;