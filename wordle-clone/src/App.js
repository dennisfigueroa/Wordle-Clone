import './App.css';
import Keyboard from './components/Keyboard';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
    <header>
    <div className="title">Wordle</div>  
    
    </header>
    <div className="container" style={{'display': 'flex', 'flex-direction':'column', 'justifyContent': 'center', 'alignItems': 'center'}}>
    <Grid />  
    <Keyboard />
    </div>
    </div>
  );
}

export default App;
