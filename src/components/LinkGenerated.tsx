import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Copy, Eye } from "lucide-react";
import { toast } from "sonner";

interface LinkGeneratedProps {
  onClose: () => void;
  onPreview: () => void;
  proposalLink: string;
}

const LinkGenerated = ({ onClose, onPreview, proposalLink }: LinkGeneratedProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(proposalLink);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-purple-900/20 to-pink-900/20 backdrop-blur-sm flex items-center justify-center p-3 md:p-4 z-50">
      <div className="bg-gradient-to-br from-white via-pink-50/50 to-purple-50/30 rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-sm md:max-w-md w-full relative shadow-2xl border border-pink-200/50">
        <Button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 rounded-full shadow-lg transition-all duration-300 border border-gray-200"
        >
          <X className="w-4 h-4 md:w-5 md:h-5" />
        </Button>

        <div className="text-center space-y-4 md:space-y-6 pt-2">
          <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-gradient-to-r from-rose-200 to-pink-200 shadow-lg">
            <div className="text-4xl md:text-5xl mb-3">💕</div>
            <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Proposal Link Generated!
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
              Now just copy the link and share it with the person.
              Don't be shy, and best of luck! 🌹
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleCopyLink}
                className="flex-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white font-semibold py-2.5 md:py-3 px-4 md:px-6 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Copy className="w-4 h-4 mr-2" />
                {copied ? "✅ Copied!" : "📋 Copy Link"}
              </Button>
              <Button
                onClick={onPreview}
                className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2.5 md:py-3 px-4 md:px-6 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Eye className="w-4 h-4 mr-2" />
                👀 Preview
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 p-3 md:p-4 rounded-lg md:rounded-xl border border-yellow-200 shadow-sm">
            <p className="text-xs md:text-sm text-gray-700">
              💡 You can preview the link{" "}
              <button
                onClick={onPreview}
                className="font-semibold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent hover:from-rose-700 hover:to-pink-700 underline transition-all duration-300"
              >
                here
              </button>{" "}
              before sharing it with your special someone!
            </p>
          </div>

          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 hover:text-gray-800 font-semibold py-2.5 md:py-3 px-4 rounded-lg md:rounded-xl border-2 border-gray-300 shadow-md hover:shadow-lg transition-all duration-300"
          >
            ✨ Create Another Proposal
          </Button>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute -top-2 -left-2 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute -top-1 -right-4 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-500 opacity-70"></div>
        <div className="absolute -bottom-2 -left-4 w-3 h-3 md:w-5 md:h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse delay-1000 opacity-70"></div>
        <div className="absolute -bottom-1 -right-2 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse delay-700 opacity-70"></div>
      </div>

      {/* Background floating hearts */}
      <div className="absolute top-1/4 left-1/4 text-xl md:text-2xl animate-bounce opacity-30">💖</div>
      <div className="absolute top-1/3 right-1/4 text-lg md:text-xl animate-bounce delay-300 opacity-30">💕</div>
      <div className="absolute bottom-1/4 left-1/3 text-lg md:text-xl animate-bounce delay-700 opacity-30">❤️</div>
      <div className="absolute bottom-1/3 right-1/3 text-base md:text-lg animate-bounce delay-1000 opacity-30">💗</div>
    </div>
  );
};

export default LinkGenerated;