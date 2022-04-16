import React from 'react'

function Letter({attemptWord, letterPos}) {
    const letter = board[attemptWord, letterPos];
    return (
        <div className ="letter">
            {letter}
        </div>
    )
}

export default Letter
