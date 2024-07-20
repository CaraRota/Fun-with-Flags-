import React, { useEffect, useState } from 'react'
import FlatButton from '../uicomponents/FlatButton'
import Flag from './Flag'
import TextToSpeech from './TextToSpeech'
import Celebration from './Celebration'
import GameOver from './GameOver'
import CountryHistory from './CountryHistory'
import ExplosionAnimation from './ExplosionAnimation'

const GameMain = ({ handleEndGame }) => {
  const [fourRandomCountries, setFourRandomCountries] = useState([])
  const [nameOfTheRandomCountry, setNameOfTheRandomCountry] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCountry, setSelectedCountry] = useState('')
  const [showCelebration, setShowCelebration] = useState(false)
  const [showGameOver, setShowGameOver] = useState(false)
  const [clue, setClue] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [pickedCountry, setPickedCountry] = useState('')
  const [showExplosion, setShowExplosion] = useState(false)

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
    setShowHistory(false)
    setClue(false)
    try {
      const response = await fetch('https://restcountries.com/v2/all')
      if (!response.ok) {
        throw new Error('Failed to fetch countries')
      }
      const data = await response.json()
      const randomCountries = data.sort(() => 0.5 - Math.random()).slice(0, 4)
      const randomCountry = randomCountries[Math.floor(Math.random() * 4)]
      setNameOfTheRandomCountry(randomCountry.translations.es)
      setPickedCountry(randomCountry)
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

  const onClueClick = () => {
    setShowExplosion(true)
    setClue(true)
    const filterCorrectAnswer = fourRandomCountries.filter(
      (country) => country.translations.es !== nameOfTheRandomCountry,
    )
    const deleteTwoRandomCountries = filterCorrectAnswer
      .sort(() => 0.5 - Math.random())
      .slice(0, 1)
    setFourRandomCountries([...deleteTwoRandomCountries, pickedCountry])
  }

  const handleExplosionEnd = () => {
    setShowExplosion(false)
  }

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
          <div className='mb-3'>
            <FlatButton onClick={() => setShowHistory(true)} className='w-full'>
              Datos interesantes 🤓
            </FlatButton>
          </div>
          <h1 className='text-xl font-bold text-center mb-4 text-kobi-600'>
            Clickea en la bandera de...
          </h1>
          <div className='flex gap-2 items-center justify-center mb-6'>
            <p className='text-2xl font-extrabold text-center text-kobi-500'>
              {nameOfTheRandomCountry}
            </p>
            <TextToSpeech
              text={`Cual es la bandera de ${nameOfTheRandomCountry}?`}
            />
          </div>
          <div className='grid grid-cols-2 gap-4 w-full mb-6 mt-4'>
            {fourRandomCountries.map((country) => (
              <Flag
                key={country.name}
                country={country}
                setSelectedCountry={setSelectedCountry}
              />
            ))}
          </div>
          {!clue && (
            <FlatButton onClick={onClueClick} className='w-full'>
              Pista 🤔
            </FlatButton>
          )}
        </div>
      )}
      <FlatButton onClick={handleEndGame} className='w-full max-w-sm'>
        Finalizar
      </FlatButton>

      {showCelebration && <Celebration />}
      {showGameOver && <GameOver />}
      {showHistory && <CountryHistory country={pickedCountry} />}
      {showExplosion && (
        <ExplosionAnimation onAnimationEnd={handleExplosionEnd} />
      )}
    </div>
  )
}

export default GameMain
