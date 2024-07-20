import React from 'react'

const FlatButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='mt-4 bg-kobi-500 hover:bg-kobi-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105'
    >
      {children}
    </button>
  )
}

export default FlatButton
