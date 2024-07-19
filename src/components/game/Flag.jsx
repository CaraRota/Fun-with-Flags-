import React from 'react'

const Flag = ({ country, setSelectedCountry }) => {
  return (
    <button
      onClick={() => setSelectedCountry(country.translations.es)}
      key={country.name}
      className='aspect-w-3 aspect-h-2 transform transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-kobi-300 rounded-lg overflow-hidden shadow-md'
    >
      <img src={country.flags.png} alt={country.name} className='h-20 w-32' />
    </button>
  )
}

export default Flag
