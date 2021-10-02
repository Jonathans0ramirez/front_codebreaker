import {useState} from 'react';
import './App.css';
import Home from './Home';
import Game from './Game';


function App() {
  const [show, setShow] = useState(false);
  console.log(show)
  return (
    <div className="App">
       {!show && <Home setShow={setShow}/>}
       {show && <Game />}
    </div>
  );
}

export default App;
