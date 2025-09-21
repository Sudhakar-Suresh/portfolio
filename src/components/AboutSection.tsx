import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Design",
      description: "Crafting beautiful, intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and cross-platform compatibility."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "Working effectively with teams to deliver projects on time and exceed expectations."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with over 5 years of experience creating 
            digital solutions that bridge the gap between design and functionality. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My journey in tech started during my computer science studies, where I discovered 
            my passion for creating digital experiences. What began as curiosity about how 
            websites work evolved into a career dedicated to crafting exceptional software solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I specialize in React, Node.js, and modern web technologies, with a strong focus 
            on user experience and performance optimization. When I'm not coding, you'll find me 
            exploring new technologies, contributing to open-source projects, or mentoring 
            aspiring developers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}