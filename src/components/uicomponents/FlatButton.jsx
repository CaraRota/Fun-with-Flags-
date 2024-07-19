import React from 'react'

const FlatButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='
        mt-4 px-6 py-2.5
        bg-kobi-400 text-kobi-50
        font-semibold rounded-lg
        shadow-md
        transition-all duration-300 ease-in-out
        hover:bg-kobi-50 hover:text-kobi-400
        active:bg-kobi-300 active:shadow-inner
        focus:outline-none focus:ring-2 focus:ring-kobi-300 focus:ring-opacity-50
        transform hover:-translate-y-0.5 active:translate-y-0
      '
    >
      {children}
    </button>
  )
}

export default FlatButton
