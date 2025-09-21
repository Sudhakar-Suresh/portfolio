import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-glass-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span>by Sudhakar_S</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground text-sm">
              © 2025 All rights reserved
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="neon-border hover-lift"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
