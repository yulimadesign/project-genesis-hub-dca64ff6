import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ArtistPortfolio from "./pages/ArtistPortfolio.tsx";
import KirillAndAlina from "./pages/KirillAndAlina.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";
import Resume from "./pages/Resume.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [hash, pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/art" element={<ArtistPortfolio />} />
          <Route path="/artist-portfolio" element={<ArtistPortfolio />} />
          <Route path="/kirillandalina" element={<KirillAndAlina />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/resume" element={<Resume />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
