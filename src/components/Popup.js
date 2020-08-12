import React, { useEffect } from 'react'
import { checkWin } from '../helpers/helpers'

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
	let finalMsg = ''
	let finalMsgRevealWord = ''
	let playable = true

	if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
		finalMsg = 'Congratulations!!! You won...'
		playable = false
	} else if(checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
		finalMsg = 'Unfortunately You Lost'
		finalMsgRevealWord = `The word was ${selectedWord}`
		playable = false
	}

	useEffect(() => setPlayable(playable))

	return (
		<div className="popup-container" style={finalMsg !== '' ? { display: 'flex' } : {}}>
			<div className="popup"></div>
			<h2>{ finalMsg }</h2>
			<h3>{ finalMsgRevealWord }</h3>
			<button onClick={playAgain}>Play Again</button>
		</div>
	)
}

export default Popup