import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "PHP", level: 75 },
        { name: "C++", level: 70 },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 80 },
        { name: "HTML5/CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Responsive Design", level: 75 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "PHP", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "XAMPP Server", level: 75 },
        { name: "Git/GitHub", level: 80 },
      ],
    },
  ];

  const technologies = [
    "Python",
    "JavaScript",
    "PHP",
    "C++",
    "React.js",
    "HTML5",
    "CSS3",
    "MySQL",
    "Git",
    "GitHub",
    "XAMPP",
    "Machine Learning",
    "OpenCV",
    "TensorFlow",
    "scikit-learn",
    "NumPy",
    "Matplotlib",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
            from conception to deployment.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{
                        duration: 1,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <Progress
                        value={skill.level}
                        className="h-2 bg-background-secondary"
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-background-secondary rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover-lift"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
