import './App.css';
import Keyboard from './components/Keyboard';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
    <header>
    <div className="title">Wordle</div>  
    
    </header>
    <Grid />  
    <Keyboard />
    </div>
  );
}

export default App;
