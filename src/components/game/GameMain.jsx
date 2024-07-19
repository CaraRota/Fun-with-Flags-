import React, { useEffect, useState } from 'react'
import FlatButton from '../uicomponents/FlatButton'
import Flag from './Flag'

const GameMain = ({ handleEndGame }) => {
  const [fourRandomCountries, setFourRandomCountries] = useState([])
  const [nameOfTheRandomCountry, setNameOfTheRandomCountry] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCountry, setSelectedCountry] = useState('')

  useEffect(() => {
    if (selectedCountry !== nameOfTheRandomCountry) {
      handleEndGame()
    }

    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all')
        if (!response.ok) {
          throw new Error('Failed to fetch countries')
        }
        const data = await response.json()
        const randomCountries = data.sort(() => 0.5 - Math.random()).slice(0, 4)
        const randomCountry = randomCountries[Math.floor(Math.random() * 4)]
        setNameOfTheRandomCountry(randomCountry.translations.es)
        setFourRandomCountries(randomCountries)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCountries()
  }, [selectedCountry])

  return (
    <div className='min-h-screen flex flex-col items-center justify-between p-4'>
      {isLoading ? (
        <div className='flex flex-col items-center justify-center flex-grow'>
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-kobi-400'></div>
          <p className='mt-4 text-lg font-semibold text-kobi-600'>Loading...</p>
        </div>
      ) : (
        <div className='w-full max-w-sm flex flex-col items-center justify-center flex-grow'>
          <h1 className='text-xl font-bold text-center mb-4 text-kobi-600'>
            Adivina la bandera de...
          </h1>
          <p className='text-2xl font-extrabold text-center mb-6 text-kobi-500'>
            {nameOfTheRandomCountry}
          </p>
          <div className='grid grid-cols-2 gap-4 w-full mb-6'>
            {fourRandomCountries.map((country) => (
              <Flag
                key={country.name}
                country={country}
                setSelectedCountry={setSelectedCountry}
              />
            ))}
          </div>
        </div>
      )}
      <FlatButton onClick={handleEndGame} className='w-full max-w-sm'>
        End Game
      </FlatButton>
    </div>
  )
}

export default GameMain
