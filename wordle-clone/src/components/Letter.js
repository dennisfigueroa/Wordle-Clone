import React, {useContext} from 'react'
import { AppContext } from '../App';

function Letter({attemptWord, letterPos}) {
    const { board, wordAttempt } = useContext(AppContext); 
    const letter = board[attemptWord][letterPos];
    const word = 'STORY';

    function getBackgroundColor() {

        if (word[letterPos] == letter) {
            return '#6aaa64';
        }

        if (word.includes(letter) && word[letterPos] != letter && letter != "") {
            return '#c9b458';
        }
        if (!word.includes(letter)) {
            return '#787c7e'
        }
    }

    //<div className ="letter" style= { word.includes(letter) ? { backgroundColor : 'yellow'} : {}} >
    
    return (
        <div className ="letter" style= { word.includes(letter) && wordAttempt == true ? { backgroundColor : getBackgroundColor()} : {}}>
            {letter}
        </div>
    )
}

export default Letter
