import React, { useEffect, useState } from 'react'

const GameOver = ({ pickedCountry, gameOverDuration }) => {
  const [counter, setCounter] = useState(gameOverDuration / 1000)

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80 px-4'>
      <div className='bg-white p-6 rounded-2xl shadow-2xl text-center space-y-4 w-full max-w-[300px]'>
        <h2 className='text-2xl font-bold text-red-600'>¡Perdiste!</h2>
        <p className='text-sm text-gray-600'>Mejor suerte la próxima vez.</p>
        <div className='text-sm text-gray-800'>
          <p>La bandera de</p>
          <p className='font-semibold text-base mt-1'>
            {pickedCountry.translations.es}
          </p>
          <p className='mt-2'>era:</p>
          <img
            src={pickedCountry.flag}
            alt={`Bandera de ${pickedCountry.translations.es}`}
            className='mx-auto h-16 w-auto mt-2 rounded shadow'
          />
        </div>
        <div className='mt-4'>
          <p className='text-sm text-gray-600'>Serás redirigido al inicio en</p>
          <p className='text-xl font-bold text-red-600 mt-1'>
            {counter} segundos
          </p>
        </div>
      </div>
    </div>
  )
}

export default GameOver
