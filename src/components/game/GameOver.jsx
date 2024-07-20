import React from 'react'

const GameOver = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
      <div className='bg-white p-8 rounded-lg shadow-lg text-center animate-bounce'>
        <h2 className='text-3xl font-bold text-red-600 mb-4'>Perdiste!</h2>
        <p className='text-xl text-gray-700'>Mejor suerte la proxima vez!</p>
      </div>
    </div>
  )
}

export default GameOver
