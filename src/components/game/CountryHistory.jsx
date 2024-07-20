import React from 'react'
import TextToSpeech from './TextToSpeech'

const CountryHistory = ({ country }) => {
  const history = `
    ${country.translations.es} es un país ubicado en ${country.region}.
    Su capital es ${country.capital}.
    Su población es de ${country.population} habitantes.
    Su moneda es el ${country.currencies[0].name}.
    Su idioma oficial es el ${country.languages[0].name}.
    
    `
  return (
    <div>
      <TextToSpeech text={history} lang='es-AR' />
    </div>
  )
}

export default CountryHistory
