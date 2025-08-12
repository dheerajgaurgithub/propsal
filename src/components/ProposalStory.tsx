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

const ProposalStory = ({ partnerName = "My Love", replyUrl }: ProposalStoryProps) => {
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

  // Success response (Yes)
  if (response === 'yes') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-teal-100 to-cyan-200 flex items-center justify-center p-3 sm:p-4 md:p-6">
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 max-w-xs sm:max-w-md md:max-w-2xl bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-emerald-200">
          <div className="text-4xl sm:text-5xl md:text-6xl animate-bounce">🎉💖🎉</div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
            Yayyy! Thank You {partnerName}! 💖
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2">
            You just made me the happiest person in the world! 
            Our love story is just beginning...
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center text-xl sm:text-2xl md:text-3xl">
            <span className="animate-bounce">💝</span>
            <span className="animate-bounce delay-100">🌹</span>
            <span className="animate-bounce delay-200">💍</span>
            <span className="animate-bounce delay-300">👫</span>
            <span className="animate-bounce delay-400">❤️</span>
          </div>
          {replyUrl && (
            <Button
              onClick={() => window.open(replyUrl, '_blank')}
              className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-700 text-white font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              💬 Message Me Back
            </Button>
          )}
        </div>
      </div>
    );
  }

  // Rejection response (No)
  if (response === 'no') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-300 via-blue-200 to-indigo-200 flex items-center justify-center p-3 sm:p-4 md:p-6">
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 max-w-xs sm:max-w-md md:max-w-2xl bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-slate-200">
          <div className="text-4xl sm:text-5xl md:text-6xl">😔💙</div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 leading-tight">
            I Respect Your Decision
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed px-2">
            I understand that not every story has the ending we hope for. 
            Thank you for being honest with me. I will always cherish the moments we've shared, 
            and I hope we can remain friends. You deserve all the happiness in the world.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-500">
            Take care, {partnerName} 🤝
          </p>
        </div>
      </div>
    );
  }

  // Final question screen
  if (showFinalQuestion) {
    return (
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-3 sm:p-4 md:p-6 relative"
        style={{ backgroundImage: `url(${kenichiShizukaProposal})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-pink-900/40"></div>
        <div className="relative text-center space-y-4 sm:space-y-6 md:space-y-8 max-w-xs sm:max-w-md md:max-w-2xl bg-white/98 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border-2 border-pink-300">
          <div className="text-4xl sm:text-5xl md:text-6xl animate-pulse">💖</div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            {partnerName}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            Will You Be Mine? 💕
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">
            This is the moment I've been waiting for...
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center max-w-sm mx-auto">
            <Button
              onClick={() => handleResponse('yes')}
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1"
            >
              Yes! 💕
            </Button>
            <Button
              onClick={() => handleResponse('no')}
              className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-300 flex-1"
            >
              Sorry, No 💙
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const page = storyPages[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100">
      {/* Mobile and Tablet Layout (up to lg) */}
      <div className="lg:hidden min-h-screen">
        <div className="flex flex-col min-h-screen">
          {/* Image Section - Mobile/Tablet */}
          <div className="h-48 xs:h-56 sm:h-64 md:h-72 p-3 sm:p-4 flex items-center justify-center bg-gradient-to-br from-rose-200/60 to-pink-200/60">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-rose-400/70 via-pink-400/70 to-purple-400/70 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl animate-pulse"></div>
              <img
                src={page.image}
                alt="Love story moment"
                className="relative w-full h-40 xs:h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-white/80"
              />
              <div className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-0.5 sm:-bottom-1 -left-0.5 sm:-left-1 w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Content Section - Mobile/Tablet */}
          <div className="flex-1 p-3 sm:p-4 flex items-center justify-center">
            <div className="w-full max-w-sm sm:max-w-md space-y-3 sm:space-y-4">
              <div className="bg-gradient-to-br from-white/98 via-pink-50/90 to-purple-50/70 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl border-2 border-pink-200/60">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4 text-center leading-tight">
                  Hey {partnerName} 💕
                </h1>
                
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  {/* Main Message */}
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-rose-100/90 via-pink-100/90 to-purple-100/70 rounded-lg sm:rounded-xl border border-rose-200/60 shadow-sm">
                    <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed">
                      {page.message}
                    </p>
                  </div>
                  
                  {/* Shayari Section */}
                  <div className="p-3 sm:p-4 bg-gradient-to-br from-yellow-100/90 via-orange-100/90 to-pink-100/70 rounded-lg sm:rounded-xl border border-orange-200/60 shadow-sm">
                    <h3 className="text-xs font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2 sm:mb-3 text-center">
                      💝 Shayari 💝
                    </h3>
                    <p className="text-center text-gray-700 font-medium leading-relaxed whitespace-pre-line text-xs sm:text-sm italic">
                      {page.shayari}
                    </p>
                  </div>
                </div>
                
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl w-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {page.buttonText}
                  <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2" />
                </Button>
              </div>
              
              {/* Progress indicators */}
              <div className="flex justify-center space-x-1.5 sm:space-x-2">
                {storyPages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-500 ${
                      index <= currentPage 
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg transform scale-110 border border-white' 
                        : 'bg-rose-200/60 border border-rose-300/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (lg and above) */}
      <div className="hidden lg:block min-h-screen">
        <div className="min-h-screen flex">
          {/* Left Side - Image */}
          <div className="w-1/2 border-r-4 border-gradient-to-b from-rose-400 to-pink-400 flex items-center justify-center p-6 xl:p-8 bg-gradient-to-br from-rose-100/60 to-pink-100/60">
            <div className="relative w-full max-w-md xl:max-w-lg">
              <div className="absolute -inset-4 xl:-inset-6 bg-gradient-to-r from-rose-300/50 via-pink-300/50 to-purple-300/50 rounded-2xl xl:rounded-3xl blur-xl xl:blur-2xl animate-pulse"></div>
              <img
                src={page.image}
                alt="Love story moment"
                className="relative w-full h-96 xl:h-[500px] 2xl:h-[600px] object-cover rounded-2xl xl:rounded-3xl shadow-2xl border-4 border-white/80"
              />
              <div className="absolute -top-2 xl:-top-3 -right-2 xl:-right-3 w-6 xl:w-8 h-6 xl:h-8 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-2 xl:-bottom-3 -left-2 xl:-left-3 w-4 xl:w-6 h-4 xl:h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-1000 shadow-lg"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-1/2 border-l-4 border-gradient-to-b from-rose-400 to-pink-400 flex items-center justify-center p-6 xl:p-8 bg-gradient-to-br from-purple-50/60 to-rose-50/60">
            <div className="w-full max-w-md xl:max-w-lg space-y-6 xl:space-y-8">
              <div className="bg-gradient-to-br from-white/98 via-pink-50/90 to-purple-50/70 backdrop-blur-lg rounded-2xl xl:rounded-3xl p-6 xl:p-8 2xl:p-10 shadow-2xl border-2 border-pink-200/60">
                <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 xl:mb-8 text-center leading-tight">
                  Hey {partnerName} 💕
                </h1>
                
                <div className="space-y-4 xl:space-y-6 mb-6 xl:mb-8">
                  {/* Main Message */}
                  <div className="p-4 xl:p-6 bg-gradient-to-r from-rose-100/90 via-pink-100/90 to-purple-100/70 rounded-xl xl:rounded-2xl border border-rose-200/60 shadow-sm">
                    <p className="text-base xl:text-lg 2xl:text-xl text-gray-800 leading-relaxed">
                      {page.message}
                    </p>
                  </div>
                  
                  {/* Shayari Section */}
                  <div className="p-4 xl:p-6 bg-gradient-to-br from-yellow-100/90 via-orange-100/90 to-pink-100/70 rounded-xl xl:rounded-2xl border border-orange-200/60 shadow-sm">
                    <h3 className="text-sm font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-3 xl:mb-4 text-center">
                      💝 Shayari 💝
                    </h3>
                    <p className="text-center text-gray-700 font-medium leading-relaxed whitespace-pre-line text-sm xl:text-base 2xl:text-lg italic">
                      {page.shayari}
                    </p>
                  </div>
                </div>
                
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold text-lg xl:text-xl px-6 xl:px-8 py-3 xl:py-4 rounded-xl xl:rounded-2xl w-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {page.buttonText}
                  <ArrowRight className="w-5 xl:w-6 h-5 xl:h-6 ml-2 xl:ml-3" />
                </Button>
              </div>
              
              {/* Progress indicators */}
              <div className="flex justify-center space-x-3 xl:space-x-4">
                {storyPages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 xl:w-4 2xl:w-5 h-3 xl:h-4 2xl:h-5 rounded-full transition-all duration-500 ${
                      index <= currentPage 
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg transform scale-110 border-2 border-white' 
                        : 'bg-rose-200/60 border border-rose-300/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative floating elements */}
      <div className="absolute top-8 sm:top-10 md:top-16 lg:top-20 left-3 sm:left-4 md:left-8 lg:left-10 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse opacity-80"></div>
      <div className="absolute top-24 sm:top-32 md:top-36 lg:top-40 right-6 sm:right-8 md:right-16 lg:right-20 w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-500 opacity-80"></div>
      <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-6 sm:left-8 md:left-16 lg:left-20 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse delay-1500 opacity-80"></div>
      <div className="absolute bottom-24 sm:bottom-32 md:bottom-36 lg:bottom-40 right-3 sm:right-4 md:right-8 lg:right-10 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse delay-700 opacity-80"></div>
      
      {/* Additional floating hearts */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-bounce delay-300 opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce delay-1000 opacity-60"></div>
    </div>
  );
};

export default ProposalStory;