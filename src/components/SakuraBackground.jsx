import React, { useState, useEffect, useRef, useCallback } from "react";

const SakuraBackground = ({
  children,
  petalCount = 15, // Reduced default count
  isActive = true, // Allow toggling animation
  renderBounds = null, // Optional bounds to limit rendering area
}) => {
  const [petals, setPetals] = useState([]);
  const containerRef = useRef(null);
  const petalIdRef = useRef(0);
  const animationRef = useRef(null);
  const lastFrameTime = useRef(0);

  const TARGET_FPS = 60;
  const FRAME_DURATION = 1000 / TARGET_FPS;

  const createPetal = useCallback(() => {
    if (!isActive) return;

    const id = petalIdRef.current++;
    const bounds = renderBounds || {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const newPetal = {
      id,
      x: Math.random() * bounds.width + bounds.left + bounds.width * 0.2,
      y: bounds.top - 50,
      size: Math.random() * 6 + 6, // Reduced size: 6-12px
      opacity: Math.random() * 0.5 + 0.3, // Reduced opacity: 0.3-0.8
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2, // Reduced rotation speed
      fallSpeed: Math.random() * 1.5 + 0.8, // Reduced fall speed
      drift: Math.random() * 1 + 0.3, // Reduced drift
      color: Math.floor(Math.random() * 4),
      swayAmplitude: Math.random() * 15 + 8, // Reduced sway
      swaySpeed: Math.random() * 0.015 + 0.008, // Reduced sway speed
    };

    setPetals((prev) => [...prev.slice(-(petalCount - 1)), newPetal]); // Limit total petals
  }, [isActive, petalCount, renderBounds]);

  useEffect(() => {
    if (!isActive) {
      setPetals([]);
      return;
    }

    // Create initial petals with staggered timing
    for (let i = 0; i < Math.min(petalCount, 10); i++) {
      setTimeout(() => createPetal(), i * 400);
    }

    // Continuously create new petals less frequently
    const interval = setInterval(createPetal, 1200);

    return () => clearInterval(interval);
  }, [createPetal, isActive, petalCount]);

  useEffect(() => {
    if (!isActive) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const animationFrame = (currentTime) => {
      if (currentTime - lastFrameTime.current >= FRAME_DURATION) {
        setPetals((prevPetals) => {
          const bounds = renderBounds || {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };

          return prevPetals
            .map((petal) => ({
              ...petal,
              y: petal.y + petal.fallSpeed,
              x:
                petal.x -
                petal.drift +
                Math.sin(petal.y * petal.swaySpeed) *
                  petal.swayAmplitude *
                  0.08,
              rotation: petal.rotation + petal.rotationSpeed,
              opacity: petal.opacity * 0.999, // Slower fade
            }))
            .filter(
              (petal) =>
                petal.y < bounds.height + 100 &&
                petal.opacity > 0.15 &&
                petal.x > bounds.left - 100 &&
                petal.x < bounds.left + bounds.width + 100
            );
        });

        lastFrameTime.current = currentTime;
      }

      animationRef.current = requestAnimationFrame(animationFrame);
    };

    animationRef.current = requestAnimationFrame(animationFrame);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, renderBounds]);

  const getColor = (colorIndex) => {
    const colors = [
      "linear-gradient(45deg, #ff69b4, #ffb3d9)",
      "linear-gradient(45deg, #ff1493, #ffc0cb)",
      "linear-gradient(45deg, #ff6fa8, #ffd6e8)",
      "linear-gradient(45deg, #ff91c7, #ffe0f0)",
    ];
    return colors[colorIndex];
  };

  const Petal = ({ petal }) => (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${petal.x}px`,
        top: `${petal.y}px`,
        width: `${petal.size}px`,
        height: `${petal.size}px`,
        opacity: petal.opacity,
        transform: `rotate(${petal.rotation}deg)`,
        background: getColor(petal.color),
        borderRadius: "50% 10px 50% 10px",
        boxShadow: "0 2px 4px rgba(255, 105, 180, 0.3)",
        filter: "blur(0.5px)",
        zIndex: 1,
      }}
    >
      {/* Outer glow effect */}
      <div
        className="absolute -inset-1 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 182, 217, 0.6), transparent)",
          borderRadius: "50% 10px 50% 10px",
          zIndex: -1,
        }}
      />
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #fef7f4 0%, #fdf2f8 25%, #fce7f3 50%, #f8dcf0 75%, #f3e8ff 100%)",
        zIndex: -1,
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 182, 217, 0.1) 0%, transparent 25%),
            radial-gradient(circle at 75% 75%, rgba(255, 105, 180, 0.1) 0%, transparent 25%),
            radial-gradient(circle at 50% 50%, rgba(255, 192, 203, 0.1) 0%, transparent 25%)
          `,
          backgroundSize: "300px 300px, 400px 400px, 250px 250px",
        }}
      />

      {/* Falling petals */}
      {petals.map((petal) => (
        <Petal key={petal.id} petal={petal} />
      ))}

      {/* Content wrapper */}
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
};

// Optimized section-specific sakura component
const SakuraSectionWrapper = ({
  children,
  className = "",
  enableSakura = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!enableSakura) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "100px", // Start animation 100px before entering viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [enableSakura]);

  return (
    <div ref={sectionRef} className={`relative ${className}`}>
      {enableSakura && isVisible && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SakuraBackground
            petalCount={8}
            isActive={isVisible}
            renderBounds={{
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: sectionRef.current?.offsetHeight || window.innerHeight,
            }}
          />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SakuraBackground;
