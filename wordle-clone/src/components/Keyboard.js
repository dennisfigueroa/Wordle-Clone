import React, {useContext, useEffect } from 'react';
import { AppContext } from '../App';

function Keyboard() {
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const row3 = ["Z", "X", "C", "V", "B", "N", "M"];
    const { board, setBoard, wordAttempt, setWordAttempt} = useContext(AppContext); 

    const clickHandler = (e) => {
        let i; 
        let wordArrayCounter;
        const newBoard = [...board];
        // newBoard[0][0] = e.target.textContent;
        for(wordArrayCounter =0; wordArrayCounter < 6; wordArrayCounter++) {
        if (wordAttempt[wordArrayCounter] == false) {
            for(i =0; i < newBoard[wordArrayCounter].length; i++) {
                if (newBoard[wordArrayCounter][i] == "") {
                   newBoard[wordArrayCounter][i] = e.target.textContent;
                   break;
               }
           }
        }
         break;
     }
        console.log( newBoard[0]);
       setBoard(newBoard); 
    }

    const deleteHandler = (e) => {
        let i;
        const deletedBoard = [...board]; 
        console.log('This is the last letter' + deletedBoard[0][4] )
             for(i=1; i < 6 ;i++) 
            {
               let lastItem = deletedBoard[0][deletedBoard[0].length - i]

                 if (lastItem != "") {
                     deletedBoard[0][deletedBoard[0].length - i] = "";
                   break;
                } 
            }


            console.log(deletedBoard);
        setBoard(deletedBoard);
    }
    
    const enterHandler = () => {
        let wordCounter;
        let copyOfWordAttempt = [...wordAttempt]; //Why does thie work? Investigate this. 
        for (wordCounter = 0; wordCounter < 7; wordCounter++) {
            if (copyOfWordAttempt[wordCounter] == false) {
                copyOfWordAttempt[wordCounter] = true
                break;
            }
        }
        setWordAttempt(copyOfWordAttempt);
        
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
            <button onClick={enterHandler}>Enter</button>
            {row3.map( letter =>  <button onClick={clickHandler}>{letter}</button>)}
            <button onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}

export default Keyboard
