import React, {useContext} from 'react';
import { boardDefault } from './Words';
import { AppContext } from '../App';

function Keyboard() {
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const row3 = ["Z", "X", "C", "V", "B", "N", "M"];
    const { board, setBoard } = useContext(AppContext); 

    const clickHandler = (e) => {
        let i; 
        for(i =0; i < boardDefault[0].length; i++) {
            if (boardDefault[0][i] == "") {
                boardDefault[0][i] = e.target.textContent;
                break;
            }
        }
        console.log(boardDefault);
       setBoard(boardDefault); 
    }
                        
    return (
        <div className ="keyboard" style={{'height':'40vh'}}>
            <div className="line1">
                {row1.map( letter =>  <button onClick={clickHandler}>{letter}</button>)}
            </div>
            <div className="line2">
            {row2.map( letter =>  <button onClick={clickHandler}>{letter}</button>)}
            </div>
            <div className="line3" >
            <button>Enter</button>
            {row3.map( letter =>  <button onClick={clickHandler}>{letter}</button>)}
            <button>Delete</button>
            </div>
        </div>
    )
}

export default Keyboard
