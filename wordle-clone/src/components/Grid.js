import React, { useState } from 'react';
import {boardDefault} from './Words';
import Letter from './Letter';

function Grid() {
    const [board, setBoard] = useState(boardDefault);

    return (

        <div className="grid">
            <div className="row" style={{ 'marginTop': '25px' }}>
                <Letter attemptWord={0} letterPos={0}/>
                <Letter attemptWord={0} letterPos={1}/>
                <Letter attemptWord={0} letterPos={2}/>
                <Letter attemptWord={0} letterPos={3}/>
                <Letter attemptWord={0} letterPos={4}/></div>
            <div className="row">
                <Letter attemptWord={1} letterPos={0}/>
                <Letter attemptWord={1} letterPos={1}/>
                <Letter attemptWord={1} letterPos={2}/>
                <Letter attemptWord={1} letterPos={3}/>
                <Letter attemptWord={1} letterPos={4}/>
            </div>
            <div className="row">
                <Letter attemptWord={2} letterPos={0}/>
                <Letter attemptWord={2} letterPos={1}/>
                <Letter attemptWord={2} letterPos={2}/>
                <Letter attemptWord={2} letterPos={3}/>
                <Letter attemptWord={2} letterPos={4}/>
            </div>
            <div className="row">
                <Letter attemptWord={3} letterPos={0}/>
                <Letter attemptWord={3} letterPos={1}/>
                <Letter attemptWord={3} letterPos={2}/>
                <Letter attemptWord={3} letterPos={3}/>
                <Letter attemptWord={3} letterPos={4}/>
            </div>
            <div className="row">
                <Letter attemptWord={4} letterPos={0}/>
                <Letter attemptWord={4} letterPos={1}/>
                <Letter attemptWord={4} letterPos={2}/>
                <Letter attemptWord={4} letterPos={3}/>
                <Letter attemptWord={4} letterPos={4}/>
            </div>
            <div className="row" style={{ 'margin-bottom': '50px' }}>
                <Letter attemptWord={5} letterPos={0}/>
                <Letter attemptWord={5} letterPos={1}/>
                <Letter attemptWord={5} letterPos={2}/>
                <Letter attemptWord={5} letterPos={3}/>
                <Letter attemptWord={5} letterPos={4}/>
            </div>
        </div>
    )
}

export default Grid
