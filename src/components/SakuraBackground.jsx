import React, { useState, useEffect, useRef } from 'react';

const SakuraBackground = ({ children }) => {
  const [petals, setPetals] = useState([]);
  const containerRef = useRef(null);
  const petalIdRef = useRef(0);

  useEffect(() => {
    const createPetal = () => {
      const id = petalIdRef.current++;
      const newPetal = {
        id,
        x: Math.random() * window.innerWidth + window.innerWidth * 0.2,
        y: -50,
        size: Math.random() * 8 + 8, // 8-16px
        opacity: Math.random() * 0.6 + 0.4, // 0.4-1.0
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4, // -2 to 2 degrees per frame
        fallSpeed: Math.random() * 2 + 1, // 1-3px per frame
        drift: Math.random() * 1.5 + 0.5, // 0.5-2px horizontal drift
        color: Math.floor(Math.random() * 4), // 4 different pink shades
        swayAmplitude: Math.random() * 20 + 10, // 10-30px sway
        swaySpeed: Math.random() * 0.02 + 0.01 // 0.01-0.03 radians
      };
      
      setPetals(prev => [...prev, newPetal]);
    };

    // Create initial petals
    for (let i = 0; i < 20; i++) {
      setTimeout(() => createPetal(), i * 300);
    }

    // Continuously create new petals
    const interval = setInterval(createPetal, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animationFrame = () => {
      setPetals(prevPetals => {
        return prevPetals
          .map(petal => ({
            ...petal,
            y: petal.y + petal.fallSpeed,
            x: petal.x - petal.drift + Math.sin(petal.y * petal.swaySpeed) * petal.swayAmplitude * 0.1,
            rotation: petal.rotation + petal.rotationSpeed,
            opacity: petal.opacity * 0.9995 // Gradual fade
          }))
          .filter(petal => petal.y < window.innerHeight + 100 && petal.opacity > 0.1);
      });
    };

    const animate = () => {
      animationFrame();
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const getColor = (colorIndex) => {
    const colors = [
      'linear-gradient(45deg, #ff69b4, #ffb3d9)',
      'linear-gradient(45deg, #ff1493, #ffc0cb)', 
      'linear-gradient(45deg, #ff6fa8, #ffd6e8)',
      'linear-gradient(45deg, #ff91c7, #ffe0f0)'
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
        borderRadius: '50% 10px 50% 10px',
        boxShadow: '0 2px 4px rgba(255, 105, 180, 0.3)',
        filter: 'blur(0.5px)',
        zIndex: 1
      }}
    >
      {/* Outer glow effect */}
      <div
        className="absolute -inset-1 opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 182, 217, 0.6), transparent)',
          borderRadius: '50% 10px 50% 10px',
          zIndex: -1
        }}
      />
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #fef7f4 0%, #fdf2f8 25%, #fce7f3 50%, #f8dcf0 75%, #f3e8ff 100%)',
        zIndex: -1
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
          backgroundSize: '300px 300px, 400px 400px, 250px 250px'
        }}
      />
      
      {/* Falling petals */}
      {petals.map(petal => (
        <Petal key={petal.id} petal={petal} />
      ))}
      
      {/* Content wrapper */}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
};
