import React from 'react'

const Word = ({ selectedWord, correctLetters }) => {
	const lettersToShow = selectedWord.split('').map( (letter, i) => {
		return (
			<span className="letter" key={i}>
				{ correctLetters.includes(letter) ? letter : '' }
			</span>
		)
	} )
	return (
		<div className="word">
			{ lettersToShow }
		</div>
	)
}

export default Word