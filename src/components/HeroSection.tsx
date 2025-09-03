import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CaretDown } from '@phosphor-icons/react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Headline animation
    tl.fromTo(headlineRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" }
    );

    // Subtitle animation
    tl.fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

    // CTA animation
    tl.fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // Spline container animation
    tl.fromTo(splineRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      "-=0.8"
    );

    // Scroll indicator animation
    tl.fromTo(scrollIndicatorRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.3"
    );

    // Floating animation for scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Background orbs animation
    const orbs = document.querySelectorAll('.hero-orb');
    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        y: -20,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.3
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Spline 3D */}
      <div 
        ref={splineRef}
        className="absolute inset-0 z-0"
      >
        <iframe 
          src="https://my.spline.design/orb-326QEQ9VR7y7O58l0B3eCBhf/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="w-full h-full"
        />
      </div>

      {/* Floating Background Orbs */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="hero-orb floating-orb w-24 h-24 top-1/4 left-1/6 opacity-30"></div>
        <div className="hero-orb floating-orb w-16 h-16 top-2/3 right-1/4 opacity-40"></div>
        <div className="hero-orb floating-orb w-32 h-32 top-1/3 right-1/6 opacity-20"></div>
        <div className="hero-orb floating-orb w-20 h-20 bottom-1/4 left-1/3 opacity-35"></div>
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-background/30 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div ref={headlineRef}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Joshua</span>
            <br />
            <span className="neon-text">Frontend Developer</span>
          </h1>
        </div>

        <div ref={subtitleRef}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
            Crafting immersive digital experiences with cutting-edge technology, 
            seamless animations, and pixel-perfect design.
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="btn-hero text-background text-lg px-10 py-5">
            View My Work
          </button>
          <button className="px-10 py-5 text-lg border border-neon-cyan text-neon-cyan rounded-full hover:bg-neon-cyan hover:text-background transition-all duration-300 hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center text-muted-foreground hover:text-neon-cyan transition-colors duration-300">
          <span className="text-sm mb-2">Scroll Down</span>
          <CaretDown size={24} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;