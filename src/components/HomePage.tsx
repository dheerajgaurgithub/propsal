import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import rosesBouquet from "@/assets/roses-bouquet.jpg";

interface HomePageProps {
  onProposeClick: () => void;
  onAboutClick: () => void;
}
const dheerajgaur="dheerajgaurofficial.netlify.app";
const HomePage = ({ onProposeClick, onAboutClick }: HomePageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center z-10">
        <Button
          onClick={onAboutClick}
          className="bg-white/80 hover:bg-white/90 text-purple-700 font-semibold px-4 py-2 rounded-lg backdrop-blur-sm border border-purple-200 shadow-sm transition-all duration-300"
        >
          About Us
        </Button>
        <div className="flex items-center gap-2 text-purple-800 font-bold text-base md:text-lg">
          <Heart className="w-4 h-4 md:w-5 md:h-5 fill-rose-500 text-rose-500" />
          <span className="hidden sm:inline">Love Proposal</span>
          <span className="sm:hidden">Love</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 md:pt-0">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text */}
          <div className="text-center lg:text-left space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-800">Scared To </span>
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Propose
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Someone?
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              Don't worry! I am here to help you. Enter your valentine's name and
              generate a beautiful proposal link.
            </p>
            <div className="pt-2">
              <Button
                onClick={onProposeClick}
                className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                💖 Propose Now
              </Button>
            </div>
            <p className="text-xs md:text-sm text-gray-500 pt-2">
  Developed by <a className="text-blue-500" href="https://dheerajgaurofficial.netlify.app/">dheerajgaur</a> for love
</p>
          </div>

          {/* Right Side - Bouquet Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-200/60 via-pink-200/60 to-purple-200/60 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative">
                <img
                  src={rosesBouquet}
                  alt="Beautiful bouquet of roses"
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white/50"
                />
                
                {/* Floating hearts overlay */}
                <div className="absolute top-4 right-4 text-2xl animate-bounce">💕</div>
                <div className="absolute bottom-6 left-6 text-xl animate-bounce delay-300">💖</div>
                <div className="absolute top-1/3 left-4 text-lg animate-bounce delay-700">❤️</div>
              </div>
              
              {/* Animated decorative circles */}
              <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-1000 shadow-lg"></div>
              <div className="absolute top-1/4 -left-4 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-rose-300 to-purple-400 rounded-full animate-pulse delay-500 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-16 md:top-20 left-4 md:left-10 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-32 md:top-40 right-8 md:right-20 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-500 opacity-70"></div>
      <div className="absolute bottom-16 md:bottom-20 left-8 md:left-20 w-4 h-4 md:w-5 md:h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse delay-1500 opacity-70"></div>
      <div className="absolute bottom-32 right-4 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse delay-700 opacity-70"></div>
      
      {/* Additional mobile decorations */}
      <div className="absolute top-1/3 right-2 w-2 h-2 bg-gradient-to-r from-rose-300 to-pink-400 rounded-full animate-pulse delay-1200 opacity-60 md:hidden"></div>
      <div className="absolute bottom-1/3 left-2 w-2 h-2 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full animate-pulse delay-900 opacity-60 md:hidden"></div>
    </div>
  );
};

export default HomePage;