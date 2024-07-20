import React, { useEffect, useState } from 'react'
import FlatButton from '../uicomponents/FlatButton'
import Flag from './Flag'
import TextToSpeech from './TextToSpeech'
import Celebration from './Celebration'
import GameOver from './GameOver'

const GameMain = ({ handleEndGame }) => {
  const [fourRandomCountries, setFourRandomCountries] = useState([])
  const [nameOfTheRandomCountry, setNameOfTheRandomCountry] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCountry, setSelectedCountry] = useState('')
  const [showCelebration, setShowCelebration] = useState(false)
  const [showGameOver, setShowGameOver] = useState(false)

  useEffect(() => {
    if (selectedCountry !== '') {
      if (selectedCountry === nameOfTheRandomCountry) {
        setShowCelebration(true)
        setTimeout(() => {
          setShowCelebration(false)
          fetchNewCountries()
        }, 1000)
      } else {
        setShowGameOver(true)
        setTimeout(() => {
          setShowGameOver(false)
          handleEndGame()
        }, 1500)
      }
    }
  }, [selectedCountry])

  const fetchNewCountries = async () => {
    setIsLoading(true)
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

  useEffect(() => {
    fetchNewCountries()
  }, [])

  return (
    <div className='min-h-screen flex flex-col items-center justify-between p-4'>
      {isLoading ? (
        <div className='flex flex-col items-center justify-center flex-grow'>
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-kobi-400'></div>
          <p className='mt-4 text-lg font-semibold text-kobi-600'>
            Cargando...
          </p>
        </div>
      ) : (
        <div className='w-full max-w-sm flex flex-col items-center justify-center flex-grow'>
          <h1 className='text-xl font-bold text-center mb-4 text-kobi-600'>
            Clickea en la bandera de...
          </h1>
          <p className='text-2xl font-extrabold text-center mb-6 text-kobi-500'>
            {nameOfTheRandomCountry}
          </p>
          <TextToSpeech
            text={`Cual es la bandera de ${nameOfTheRandomCountry}?`}
          />
          <div className='grid grid-cols-2 gap-4 w-full mb-6 mt-4'>
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
        Finalizar
      </FlatButton>
      {showCelebration && <Celebration />}
      {showGameOver && <GameOver />}
    </div>
  )
}

export default GameMain
