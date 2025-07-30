import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Floating particles background
export const FloatingParticles = () => {
  const [particles] = useState(
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/10"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Enhanced scroll animations
export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    return () => observer.disconnect();
  }, []);

  return { isVisible };
};

// Animated counter
export const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  suffix = "" 
}: { 
  end: number; 
  duration?: number; 
  suffix?: string; 
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            const increment = end / (duration * 60); // 60fps
            const timer = setInterval(() => {
              setCount((prev) => {
                if (prev + increment >= end) {
                  clearInterval(timer);
                  return end;
                }
                return prev + increment;
              });
            }, 1000 / 60);
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(`counter-${end}`);
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }
  }, [end, duration, hasAnimated]);

  return (
    <span id={`counter-${end}`}>
      {Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
};

// Magnetic button effect
export const MagneticButton = ({ children, ...props }: any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    setPosition({
      x: deltaX * 0.1,
      y: deltaY * 0.1,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Text reveal animation
export const RevealText = ({ 
  children, 
  delay = 0 
}: { 
  children: string; 
  delay?: number; 
}) => {
  const letters = children.split("");

  return (
    <span>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.05,
            ease: "easeOut",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

// Parallax container
export const ParallaxContainer = ({ 
  children, 
  speed = 0.5 
}: { 
  children: React.ReactNode; 
  speed?: number; 
}) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      style={{
        transform: `translateY(${offsetY * speed}px)`,
      }}
    >
      {children}
    </motion.div>
  );
};

// Stagger animation container
export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1 
}: { 
  children: React.ReactNode; 
  staggerDelay?: number; 
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};