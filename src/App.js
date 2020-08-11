import React, { useState } from 'react';
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import './styles/App.scss';

const words = ['application', 'programming', 'interface', 'wizard']
const selectedWord = words[Math.floor(Math.random()*words.length)]

const App = () => {
    const [playable, setPlayable] = useState(true)
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])

    return (
        <div>
            <Header />
            <div className="game-container">
            	<Figure />
                <WrongLetters />
                <Word selectedWord={selectedWord} correctLetters={correctLetters} />
            </div>
        </div>
    )
}

export default App;