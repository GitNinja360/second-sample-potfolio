import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Palette, 
  Rocket, 
  Lightning, 
  Globe, 
  Devices,
  BracketsAngle,
  FigmaLogo
} from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Section fade in animation
    gsap.fromTo(section,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Profile image animation
    gsap.fromTo(imageRef.current,
      { opacity: 0, x: -50, rotateY: -15 },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        }
      }
    );

    // Content animation
    gsap.fromTo(contentRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      }
    );

    // Skills staggered animation
    const skillItems = skillsRef.current?.children;
    if (skillItems) {
      gsap.fromTo(skillItems,
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const skills = [
    { icon: <BracketsAngle size={24} />, name: 'React', color: 'text-blue-400' },
    { icon: <Code size={24} />, name: 'TypeScript', color: 'text-blue-500' },
    { icon: <Globe size={24} />, name: 'Next.js', color: 'text-gray-300' },
    { icon: <Palette size={24} />, name: 'Tailwind', color: 'text-cyan-400' },
    { icon: <Lightning size={24} />, name: 'GSAP', color: 'text-green-400' },
    { icon: <Devices size={24} />, name: 'Responsive', color: 'text-purple-400' },
    { icon: <FigmaLogo size={24} />, name: 'Figma', color: 'text-pink-400' },
    { icon: <Rocket size={24} />, name: 'Framer Motion', color: 'text-orange-400' },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative group">
              {/* Glowing Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Image Container */}
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden bg-surface border-2 border-neon-cyan/30">
                <img 
                  src="/lovable-uploads/4f15976d-0533-4a3c-9958-bd4d2732bb27.png"
                  alt="Joshua - Frontend Developer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-purple rounded-full animate-float opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-neon-cyan rounded-full animate-float opacity-60" style={{animationDelay: '-1s'}}></div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate <span className="text-neon-cyan font-semibold">Frontend Developer</span> with 
                over 5 years of experience crafting immersive digital experiences. I specialize in creating 
                high-performance web applications with stunning animations and seamless user interactions.
              </p>
              
              <p>
                My expertise lies in modern web technologies, with a focus on 
                <span className="text-neon-purple font-semibold"> React, TypeScript, and advanced animation libraries</span>. 
                I'm passionate about pushing the boundaries of web development and creating experiences that 
                captivate and engage users.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or experimenting with 3D web experiences and interactive design.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Skills & <span className="gradient-text">Technologies</span>
              </h3>
              
              <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="glass-card p-4 text-center group hover:glow-cyan transition-all duration-300 cursor-pointer"
                  >
                    <div className={`${skill.color} mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;