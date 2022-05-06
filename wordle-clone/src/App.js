import './App.css';
import Keyboard from './components/Keyboard';
import Grid from './components/Grid';
import React, { createContext, useState} from 'react';
import { boardDefault } from './components/Words';
import wordleBank from './assets/wordle-bank.txt';


export const AppContext = createContext(); 

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [wordAttempt, setWordAttempt] = useState([false, false, false, false, false, false]);
  const [randomWord, setRandomWord] = useState(); 
 
  const retrieveRandomWord = async () => {
    const textFile = await fetch(wordleBank);
    const responseFile = await textFile.text();
    const wordBankArray = responseFile.split("\r\n");    
        // .then((response) => response.text())
    const yourWordIs = wordBankArray[Math.floor(Math.random()*(wordBankArray.length))];
    console.log(yourWordIs);
    setRandomWord(yourWordIs)
} 

retrieveRandomWord();
 
  return (
    <div className="App">
    <header>
    <div className="title">Wordle</div>  
    
    </header>
    
    <div className="container" style={{'display': 'flex', 'flex-direction':'column', 'justifyContent': 'center', 'alignItems': 'center'}}>
    <AppContext.Provider value ={{board, setBoard, wordAttempt, setWordAttempt, randomWord, setRandomWord}}>
    <Grid />  
    <Keyboard />
    </AppContext.Provider>
    </div>
    </div>
  );
}

export default App;
