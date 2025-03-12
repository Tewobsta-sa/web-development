import React from 'react'
import { 
  GAME_STATE_PLAYING
} from "../constants";

const Footer = ({onNewClick, onSuggestClick, gameState}) => {
  const renderButtons = () => {
    if(gameState === GAME_STATE_PLAYING) 
      return <button onClick={onSuggestClick}>Suggest</button>
    return <button onClick={onNewClick}>New Game</button>
  }
  return (
    <div className='panel footer'>
      {renderButtons()}
    </div>
  )
}

export default Footer