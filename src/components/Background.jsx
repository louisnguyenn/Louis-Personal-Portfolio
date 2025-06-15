import { useEffect, useState } from "react"

// a star will have an id, size, x, y, opacity, and animationDuration

export const Background = () => {

  const [stars, setStars] = useState()

  useEffect(() => {
    generateStars();
  }, [])

  const generateStars = () => {
    // number of stars the will appear on the screen
    const numStars = Math.floor(window.innerWidth * window.innerHeight / 10000)

    const newStars = []
    for (let i = 0; i < numStars; i++)
    {
      newStars.push({
        id:i,
        size: Math.random() * 3 + 1, // will generate stars from 1-3 pixels
        x: Math.random() * 100, // position of the stars
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,  // setting different opacites for stars
        animationDuration: Math.random() * 4 + 2,
      })
    }

    setStars(newStars)
  }

  return (
      <div className="fixed inset-0 overflow-hideen pointer-events-none z-0">
        {stars.map((star) => (
          <div key={star.id} className="star animate-pulse-subtle" style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.size + "px", 
            top: star.size + "px",
            opacity: star.size + "px",
            animationDuration: star.size + "px",
          }}/>
        ))}
      </div>
  )
}
