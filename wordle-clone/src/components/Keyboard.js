import React, {useContext, useEffect } from 'react';
import { AppContext } from '../App';
import wordleBank from '../assets/wordle-bank.txt';

function Keyboard() {
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const row3 = ["Z", "X", "C", "V", "B", "N", "M"];
    
    const { board, setBoard, wordAttempt, setWordAttempt, setBooleanForNotEnough, setBooleanForNotInWordList, randomWord} = useContext(AppContext); 

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
           break;
        }
        
     }
       setBoard(newBoard); 
    }

    //T
    const deleteHandler = (e) => {
        let i;
        let wordArrayCounter;
        const deletedBoard = [...board]; 
        console.log('This is the last letter' + deletedBoard[0][4] )
        for(wordArrayCounter =0; wordArrayCounter < 6; wordArrayCounter++) {
            if (wordAttempt[wordArrayCounter] == false) {
             for(i=1; i < 6 ;i++) 
            {
               let lastItem = deletedBoard[wordArrayCounter][deletedBoard[wordArrayCounter].length - i]

                 if (lastItem != "") {
                     deletedBoard[wordArrayCounter][deletedBoard[wordArrayCounter].length - i] = "";
                   break;
                } 
            }
        }
        }
            console.log('This is the board after deletion '+ deletedBoard);
        setBoard(deletedBoard);
    }
    
    const enterHandler = () => {
        let wordCounter;
        let copyOfWordAttempt = [...wordAttempt]; //Why does thie work? Investigate this. 
        for (wordCounter = 0; wordCounter < 6; wordCounter++) {
            if (copyOfWordAttempt[wordCounter] == false) {
                copyOfWordAttempt[wordCounter] = board[wordCounter].toString().replace(/,/g, ''); 
                if (copyOfWordAttempt[wordCounter].length > 4) {
                    findWordInWordBank(copyOfWordAttempt[wordCounter], copyOfWordAttempt );
                    return;
                }
                if (copyOfWordAttempt[wordCounter].length < 4) {
                    setBooleanForNotEnough(true);
                    return; 
                }
            }
        }
}

    const findWordInWordBank = async (currentWordAttempt, allWordAttempts) => {
        const textFile = await fetch(wordleBank);
        const responseFile = await textFile.text();
        const wordBankArray = responseFile.split("\r\n");   
        const fixedCasingWordAttempt = currentWordAttempt.toLowerCase();
        if (wordBankArray.includes(fixedCasingWordAttempt)){
            setWordAttempt(allWordAttempts);
            setBooleanForNotInWordList(false)
            return
        }
        else {
            setBooleanForNotInWordList(true)
            return 
        }
      //  setBooleanForNotInWordList(true);
    }

    const notEnoughLetter = () => {
        alert('Not enough letters'); 
    }

    useEffect( () => { 
        
        console.log(wordAttempt)
        if (wordAttempt.includes(randomWord)) {
            setTimeout(
                () => { alert('Success')
           
        }, 2500)
}
    }, [wordAttempt]);
 
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
