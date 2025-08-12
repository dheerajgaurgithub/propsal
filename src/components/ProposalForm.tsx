import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Heart } from "lucide-react";
import { toast } from "sonner";

interface ProposalFormProps {
  onClose: () => void;
  onGenerate: (name: string, replyUrl: string) => void;
}

const ProposalForm = ({ onClose, onGenerate }: ProposalFormProps) => {
  const [name, setName] = useState("");
  const [replyUrl, setReplyUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter her/his name");
      return;
    }
    onGenerate(name.trim(), replyUrl.trim());
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-purple-900/30 to-pink-900/30 backdrop-blur-md flex items-center justify-center p-3 md:p-4 z-50">
      <div className="bg-gradient-to-br from-white via-pink-50/80 to-purple-50/60 rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-sm md:max-w-md w-full relative shadow-2xl border border-pink-200/50 backdrop-blur-sm">
        <Button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 rounded-full shadow-lg transition-all duration-300 border border-gray-200"
        >
          <X className="w-4 h-4 md:w-5 md:h-5" />
        </Button>

        {/* Header */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8 pt-2">
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-2 md:p-2.5 rounded-full shadow-lg">
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Create Proposal
          </h2>
        </div>

        <div className="space-y-5 md:space-y-6">
          {/* Name Input */}
          <div className="space-y-2 md:space-y-3">
            <Label 
              htmlFor="name" 
              className="text-sm md:text-base font-semibold text-gray-700 flex items-center gap-1"
            >
              💖 Her / His Name 
              <span className="text-rose-500 text-base md:text-lg">*</span>
            </Label>
            <div className="relative">
              <Input
                id="name"
                type="text"
                placeholder="Enter her/his name ✨"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-sm md:text-base py-3 md:py-4 px-4 md:px-5 rounded-xl md:rounded-2xl border-2 border-pink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 bg-gradient-to-r from-white to-pink-50/50 shadow-sm transition-all duration-300 placeholder:text-gray-400"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-400">
                💕
              </div>
            </div>
          </div>

          {/* Reply URL Input */}
          <div className="space-y-2 md:space-y-3">
            <Label 
              htmlFor="replyUrl" 
              className="text-sm md:text-base font-semibold text-gray-700 flex items-center gap-1"
            >
              🔗 Reply URL
              <span className="text-xs md:text-sm font-normal text-gray-500">(Optional)</span>
            </Label>
            <div className="relative">
              <Input
                id="replyUrl"
                type="text"
                placeholder="WhatsApp/Messenger link 📱"
                value={replyUrl}
                onChange={(e) => setReplyUrl(e.target.value)}
                className="text-sm md:text-base py-3 md:py-4 px-4 md:px-5 rounded-xl md:rounded-2xl border-2 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 bg-gradient-to-r from-white to-blue-50/50 shadow-sm transition-all duration-300 placeholder:text-gray-400"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400">
                🌐
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 p-3 md:p-4 rounded-xl md:rounded-2xl border border-yellow-200 shadow-sm">
            <p className="text-xs md:text-sm text-gray-700 text-center">
              💡 <span className="font-semibold">Pro Tip:</span> Add a reply URL so they can easily respond to your proposal! 
              <span className="text-pink-600">💌</span>
            </p>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold text-base md:text-lg py-3 md:py-4 px-6 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            💖 Propose Now ✨
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -left-2 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute -top-1 -right-4 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-500 opacity-70"></div>
        <div className="absolute -bottom-2 -left-4 w-3 h-3 md:w-5 md:h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse delay-1000 opacity-70"></div>
        <div className="absolute -bottom-1 -right-2 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse delay-700 opacity-70"></div>
      </div>

      {/* Background Floating Hearts */}
      <div className="absolute top-1/4 left-1/4 text-xl md:text-2xl animate-bounce opacity-20">💖</div>
      <div className="absolute top-1/3 right-1/4 text-lg md:text-xl animate-bounce delay-300 opacity-20">💕</div>
      <div className="absolute bottom-1/4 left-1/3 text-lg md:text-xl animate-bounce delay-700 opacity-20">❤️</div>
      <div className="absolute bottom-1/3 right-1/3 text-base md:text-lg animate-bounce delay-1000 opacity-20">💗</div>
      <div className="absolute top-1/2 left-1/6 text-sm md:text-base animate-bounce delay-1500 opacity-20">🌹</div>
      <div className="absolute top-2/3 right-1/6 text-sm md:text-base animate-bounce delay-200 opacity-20">✨</div>
    </div>
  );
};

export default ProposalForm;