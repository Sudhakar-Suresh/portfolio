import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code that stands the test of time.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Design",
      description:
        "Crafting beautiful, intuitive interfaces that provide exceptional user experiences.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and cross-platform compatibility.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description:
        "Working effectively with teams to deliver projects on time and exceed expectations.",
    },
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
            I'm a motivated and enthusiastic software developer with a strong
            foundation in both front-end and back-end technologies. Having
            completed my MCA, I'm eager to contribute to real-world projects and
            build dynamic, responsive, and scalable web applications while
            continuously improving my skills.
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
              <p className="text-muted-foreground">{feature.description}</p>
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
            I've completed my MCA from Kristu Jayanti College, Bengaluru,
            building upon my strong foundation in computer science from my BCA
            at Indian Academy Degree College. My academic journey has been
            enriched by practical internship experiences and hands-on project
            development.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            During my internship at Kristu Jayanti Software Development Centre,
            I gained valuable experience in backend development, helping with
            code debugging and testing small modules to understand real-world
            application behavior. At 01Crew, I worked with modern front-end
            technologies like React and JavaScript, learning to build dynamic
            user interfaces and using Git for collaborative development
            workflows.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I specialize in Python, JavaScript, React, and PHP, with hands-on
            experience in both front-end and back-end development. My projects
            range from machine learning applications like face clustering to
            full-stack web applications including healthcare management systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
