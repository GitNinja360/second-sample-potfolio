import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Logo animation
    tl.fromTo(logoRef.current, 
      { opacity: 0, scale: 0.5, rotateY: 180 },
      { opacity: 1, scale: 1, rotateY: 0, duration: 1, ease: "back.out(1.7)" }
    );

    // Progress bar animation
    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
    }, "-=0.5");

    // Complete animation
    tl.to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        onComplete();
        if (preloaderRef.current) {
          preloaderRef.current.style.display = "none";
        }
      }
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb w-32 h-32 top-1/4 left-1/4 opacity-20"></div>
        <div className="floating-orb w-24 h-24 top-3/4 right-1/4 opacity-30"></div>
        <div className="floating-orb w-16 h-16 top-1/2 right-1/3 opacity-25"></div>
      </div>

      {/* Logo */}
      <div ref={logoRef} className="text-center mb-12">
        <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">
          Joshua
        </h1>
        <p className="text-xl text-muted-foreground font-light">
          Frontend Developer
        </p>
      </div>

      {/* Progress Bar Container */}
      <div className="w-80 max-w-sm mx-auto">
        <div className="w-full h-1 bg-surface rounded-full overflow-hidden">
          <div 
            ref={progressBarRef}
            className="progress-bar h-full w-0 rounded-full"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Loading Experience...
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;