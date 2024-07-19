import React, { useState } from 'react'
import FlatButton from './uicomponents/FlatButton'
import GameMain from './game/GameMain'

const MainPage = () => {
  const [startGame, setStartGame] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const handleEndGame = () => {
    setGameOver(false)
    setStartGame(false)
  }

  return (
    <div className='flex justify-center items-center h-[90vh]'>
      {(!startGame || gameOver) && (
        <FlatButton onClick={() => setStartGame(true)}>Start Game</FlatButton>
      )}
      {startGame && !gameOver && (
        <>
          <GameMain handleEndGame={handleEndGame} />
        </>
      )}
    </div>
  )
}

export default MainPage
