import React, { useState } from 'react';
import {boardDefault} from './Words';
import Letter from './Letter';

function Grid() {
    const [board, setBoard] = useState(boardDefault);

    return (

        <div className="grid">
            <div className="row" style={{'marginTop':'25px'}}><Letter /><Letter /><Letter /><Letter /><Letter /></div>
            <div className="row"><Letter /><Letter /><Letter /><Letter /><Letter /></div>
            <div className="row"><Letter /><Letter /><Letter /><Letter /><Letter /></div>
            <div className="row"><Letter /><Letter /><Letter /><Letter /><Letter /></div>
            <div className="row"><Letter /><Letter /><Letter /><Letter /><Letter /></div>
            <div className="row" style={{'margin-bottom': '50px'}}><Letter /><Letter /><Letter /><Letter /><Letter /></div>
        </div>
    )
}

export default Grid
