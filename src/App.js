import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Button } from "bootstrap";

function App() {
  return (
    <div className='col-md-12'>
    <div className='weatherBg'> 
      <input type="text" className='form-control'></input>
      <Button type="search"></Button>
      </div>
      <h1 className='heading'>Weather App</h1>
    </div>
  );  
}

export default App;
