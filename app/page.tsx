"use client"

import { useState } from "react"
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/ecommerce-dashboard.png",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and notifications",
      tags: ["Next.js", "Firebase", "TypeScript", "Tailwind"],
      image: "/task-management-interface.png",
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts and metrics",
      tags: ["React", "D3.js", "REST API", "Material-UI"],
      image: "/analytics-dashboard.png",
      link: "#",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and suggestions",
      tags: ["Next.js", "WebSocket", "OpenAI", "MongoDB"],
      image: "/modern-chat-interface.png",
      link: "#",
    },
  ]

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Firebase"] },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Portfolio</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-b border-border">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="block hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="block hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="block hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Creative Developer
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Building beautiful, functional web experiences with modern technologies
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I'm a passionate developer with 5+ years of experience creating responsive, user-centric web
                applications. I specialize in modern JavaScript frameworks and enjoy solving complex problems with
                elegant solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing
                knowledge with the community.
              </p>
            </div>
            <div className="grid gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="font-semibold text-primary mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors group"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-sm rounded border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h3>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail size={20} /> Email Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/20">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Your Name. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
