import { useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import bgMusic from "./bg.mp3"; // Import audio from src

const queryClient = new QueryClient();

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Try to play immediately
    const playMusic = () => {
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked — will play after user interaction.");
      });
    };

    playMusic(); // Try on load

    // If autoplay is blocked, start after first click
    const handleUserInteraction = () => {
      playMusic();
      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* Background Music */}
        <audio ref={audioRef} src={bgMusic} loop />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
