import './App.css';
import Keyboard from './components/Keyboard';
import Grid from './components/Grid';
import React, { createContext, useState, useEffect} from 'react';
import { boardDefault } from './components/Words';
import wordleBank from './assets/wordle-bank.txt';
import useIsMount from './components/useIsMount';
import NotEnoughLetters from './components/NotEnoughLetters';

export const AppContext = createContext(); 

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [wordAttempt, setWordAttempt] = useState([false, false, false, false, false, false]);
  const [randomWord, setRandomWord] = useState(); 
  const isMount = useIsMount();
 
  const retrieveRandomWord = async () => {
    const textFile = await fetch(wordleBank);
    const responseFile = await textFile.text();
    const wordBankArray = responseFile.split("\r\n");    
        // .then((response) => response.text())
    const yourWordIs = wordBankArray[Math.floor(Math.random()*(wordBankArray.length))];
    setRandomWord(yourWordIs.toUpperCase())
    console.log(yourWordIs);
} 

useEffect( () => {
  /* This uses a custom hook to work, what it does is it sets isMount to true initially, 
  and will only convert it to false after the first render. It uses ref instead of state
  since we don't want to trigger a re-render. Once teamPokemon changes, it will run the following to update the view. 
  */
  if (isMount) {
    retrieveRandomWord();
     
  }
}, [])

 
  return (
    <div className="App">
    <header>
    <div className="title">Wordle</div>  
    
    </header>
    
    <div className="container" style={{'display': 'flex', 'flex-direction':'column', 'justifyContent': 'center', 'alignItems': 'center'}}>
    <AppContext.Provider value ={{board, setBoard, wordAttempt, setWordAttempt, randomWord, setRandomWord}}>
    <NotEnoughLetters / >
    <Grid />  
    <Keyboard />
    </AppContext.Provider>
    </div>
    </div>
  );
}

export default App;
