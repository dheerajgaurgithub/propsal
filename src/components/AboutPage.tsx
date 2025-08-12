import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft, Code, Palette, Sparkles } from "lucide-react";

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage = ({ onBack }: AboutPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      {/* Header */}
      <header className="p-4 sm:p-6">
        <Button
          variant="soft"
          onClick={onBack}
          className="flex items-center gap-2 text-sm sm:text-base bg-white/90 hover:bg-rose-100 text-rose-700 border border-rose-200 shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600 fill-pink-500 animate-pulse" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              About This Love Proposal Website
            </h1>
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600 fill-pink-500 animate-pulse hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-pink-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-lg">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-rose-700 mb-2 sm:mb-3">Made with Love</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                This website was created to help people express their feelings in a beautiful and memorable way.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-lg">
                <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-purple-700 mb-2 sm:mb-3">Beautiful Design</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Crafted with romantic colors, smooth animations, and delightful user experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-lg">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-orange-700 mb-2 sm:mb-3">Magical Moments</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Create unforgettable proposal experiences with personalized messages and romantic storytelling.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-white/90 to-pink-50/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-pink-200 text-left">
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 text-center">How It Works</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 shadow-lg">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Enter Details</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Fill in your beloved's name and optional reply URL</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 shadow-lg">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Generate Link</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Get a personalized proposal link with their name</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 shadow-lg">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Share & Wait</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Send the link and wait for their magical response</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center px-2 sm:px-0">
            <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed font-medium italic">
              "Love is not about how many days, months, or years you have been together. 
              Love is about how much you love each other every single day."
            </p>
            <p className="text-xs sm:text-sm text-gray-600 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full inline-block">
              Developed with ❤️ for spreading love around the world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;