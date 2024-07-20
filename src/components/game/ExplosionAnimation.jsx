import React, { useEffect } from 'react'
import confetti from 'canvas-confetti'

const ExplosionAnimation = ({ onAnimationEnd }) => {
  useEffect(() => {
    // Trigger the confetti explosion immediately
    confetti({
      particleCount: 500, // Adjust the number of flags
      startVelocity: 20, // Reduced initial velocity of the particles for less expansion
      decay: 0.9, // How quickly the particles lose speed
      spread: 360, // Reduced spread for a smaller circle
      origin: { x: 0.5, y: 0.5 }, // Center of the screen
      shapes: ['square'], // Use square shapes to simulate flags
      colors: ['#ff0000', '#ff6600', '#ff9900'], // Colors of the flags
    })

    // Call onAnimationEnd immediately after the confetti
    onAnimationEnd()
  }, [onAnimationEnd])

  return null // This component does not render anything itself
}

export default ExplosionAnimation
