import { useEffect, useState } from "react";

export const Background = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
  }, []);

  const generateStars = () => {
    const numStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
    const newStars = [];

    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="animate-pulse-subtle"
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "white",
            boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.4)",
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
