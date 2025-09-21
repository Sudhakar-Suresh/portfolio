import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Face Clustering Project",
      description:
        "An advanced computer vision project that automatically groups similar faces using deep learning algorithms. Features face detection, embedding extraction, and unsupervised clustering for organizing large photo collections.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      tech: [
        "Python",
        "OpenCV",
        "TensorFlow",
        "scikit-learn",
        "NumPy",
        "Matplotlib",
      ],
      liveUrl: "https://github.com/Sudhakar-Suresh/face-clustering-project",
      githubUrl: "https://github.com/Sudhakar-Suresh/face-clustering-project",
    },
    {
      title: "Front-end Task Manager",
      description:
        "A modern task management application built with React, featuring intuitive task creation, organization, and tracking. Clean UI with responsive design for efficient productivity management.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      tech: [
        "React",
        "JavaScript",
        "CSS3",
        "HTML5",
        "Local Storage",
        "Responsive Design",
      ],
      liveUrl: "https://github.com/Sudhakar-Suresh/Front-end-Taskmanager",
      githubUrl: "https://github.com/Sudhakar-Suresh/Front-end-Taskmanager",
    },
    {
      title: "Healthcare Management System",
      description:
        "A comprehensive healthcare management system built with PHP and MySQL to manage patient records, appointments, and doctor information. Features secure login, CRUD operations, and database connectivity for efficient hospital administration.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "XAMPP"],
      liveUrl: "https://github.com/Sudhakar-Suresh/Hospital_management",
      githubUrl: "https://github.com/Sudhakar-Suresh/Hospital_management",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and
            creative problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden hover-lift group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-background-secondary rounded text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="neon-border bg-transparent text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a
              href="https://github.com/Sudhakar-Suresh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
