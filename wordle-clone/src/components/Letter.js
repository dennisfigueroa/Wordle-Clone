import React, {useContext} from 'react'
import { AppContext } from '../App';

function Letter({attemptWord, letterPos}) {
    const { board, setBoard } = useContext(AppContext); 
    const letter = board[attemptWord][letterPos];
    return (
        <div className ="letter">
            {letter}
        </div>
    )
}

export default Letter
