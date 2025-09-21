import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-6">
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">Sudhakar</span>
              <br />
              <span className="text-foreground">Developer</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Developer & Full-Stack Enthusiast
              <br />
              Building dynamic, responsive, and scalable web applications
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="neon-border hover-lift bg-transparent text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="neon-border hover-lift bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://github.com/Sudhakar-Suresh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover-lift neon-glow transition-all duration-300"
            >
              <Github className="h-6 w-6 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/sudhakar-s-656a420a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover-lift neon-glow transition-all duration-300"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a
              href="mailto:sudhakarsureshbhr30@gmail.com"
              className="p-3 glass-card rounded-full hover-lift neon-glow transition-all duration-300"
            >
              <Mail className="h-6 w-6 text-primary" />
            </a>
          </motion.div>
        </motion.div>

        <motion.button
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          onClick={() => scrollToSection("#about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </motion.button>
      </div>
    </section>
  );
}
