import React, { useState } from 'react';
import boardDefault from './Words';

function Grid() {
    const [board, setBoard] = useState(boardDefault);

    return (
        <div className="grid">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
            
        </div>
    )
}

export default Grid
