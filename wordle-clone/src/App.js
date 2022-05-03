import './App.css';
import Keyboard from './components/Keyboard';
import Grid from './components/Grid';
import React, { createContext, useState} from 'react';
import { boardDefault } from './components/Words';


export const AppContext = createContext(); 

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [wordAttempt, setWordAttempt] = useState([false, false, false, false, false, false]);
  return (
    <div className="App">
    <header>
    <div className="title">Wordle</div>  
    
    </header>
    
    <div className="container" style={{'display': 'flex', 'flex-direction':'column', 'justifyContent': 'center', 'alignItems': 'center'}}>
    <AppContext.Provider value ={{board, setBoard, wordAttempt, setWordAttempt}}>
    <Grid />  
    <Keyboard />
    </AppContext.Provider>
    </div>
    </div>
  );
}

export default App;
