import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo, Globe } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        }
      }
    );

    // Projects staggered animation
    const projectCards = projectsRef.current?.children;
    if (projectCards) {
      gsap.fromTo(projectCards,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "3D Portfolio Website",
      description: "An immersive portfolio built with React, Three.js, and GSAP animations. Features interactive 3D elements and smooth scroll effects.",
      image: "/lovable-uploads/62421f36-86f9-46b1-9299-7d93254c6241.png",
      tech: ["React", "Three.js", "GSAP", "TypeScript"],
      github: "#",
      live: "#",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Gaming Website UI",
      description: "Modern gaming platform interface with animated characters, glassmorphic design, and responsive layouts for all devices.",
      image: "/lovable-uploads/ba09a24d-93e9-49a3-ba8e-c767eeeb9912.png",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      github: "#",
      live: "#",
      category: "UI/UX Design"
    },
    {
      id: 3,
      title: "Animation Tools Platform",
      description: "Educational platform showcasing web animation tools with interactive demos and step-by-step tutorials.",
      image: "/lovable-uploads/d970a357-826d-4c18-ab4c-83a867c6f16d.png",
      tech: ["React", "GSAP", "CSS Animations"],
      github: "#",
      live: "#",
      category: "Educational"
    },
    {
      id: 4,
      title: "Developer Portfolio",
      description: "Clean, professional portfolio website with dark theme, smooth animations, and mobile-first design approach.",
      image: "/lovable-uploads/b9b30549-ef8f-48c1-999b-5e6087360abe.png",
      tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      github: "#",
      live: "#",
      category: "Portfolio"
    },
    {
      id: 5,
      title: "SaaS Auth Interface",
      description: "Modern authentication system with glassmorphic design, multi-provider login, and seamless user experience.",
      image: "/lovable-uploads/54a6db9c-c11a-4b24-af65-4e42fa4fc11b.png",
      tech: ["React", "Auth0", "Tailwind CSS"],
      github: "#",
      live: "#",
      category: "SaaS"
    },
    {
      id: 6,
      title: "3D Interactive Web",
      description: "Cutting-edge web application featuring 3D models, interactive elements, and immersive user experiences.",
      image: "/lovable-uploads/253c032e-77f5-42be-bc1d-ce5e3f0b4323.png",
      tech: ["Three.js", "WebGL", "React", "Spline"],
      github: "#",
      live: "#",
      category: "3D Web"
    },
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring cutting-edge web technologies 
            and immersive user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-neon-cyan/20 text-neon-cyan rounded-full border border-neon-cyan/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-surface text-muted-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="p-2 bg-surface hover:bg-surface-elevated border border-border rounded-lg transition-all duration-300 hover:border-neon-cyan group/btn"
                    >
                      <GithubLogo size={18} className="text-muted-foreground group-hover/btn:text-neon-cyan transition-colors duration-300" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-surface hover:bg-surface-elevated border border-border rounded-lg transition-all duration-300 hover:border-neon-cyan group/btn"
                    >
                      <Globe size={18} className="text-muted-foreground group-hover/btn:text-neon-cyan transition-colors duration-300" />
                    </a>
                  </div>
                  
                  <button className="flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors duration-300 font-medium">
                    View Details
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button className="btn-hero text-background px-10 py-4">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;