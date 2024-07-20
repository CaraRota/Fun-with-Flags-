// Celebration.jsx
import React, { useEffect } from 'react'
import confetti from 'canvas-confetti'
import FlowerIcon from '../uicomponents/icons/FlowerIcon'

const Celebration = () => {
  useEffect(() => {
    // Trigger confetti
    const duration = 2000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#e39dc0', '#f8ebf2', '#702b45'],
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#e39dc0', '#f8ebf2', '#702b45'],
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()
  }, [])

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='text-center flex justify-center items-center flex-col'>
        <FlowerIcon className='w-24 h-24 animate-pulse' />
        <h2 className='text-4xl font-bold text-green-600 mt-8 animate-bounce'>
          ¡Correcto!
        </h2>
      </div>
    </div>
  )
}

export default Celebration
