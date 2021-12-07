import './App.css';
//import component
import Button from './component/Button';
import Input from './component/Input';
import Nav from './component/Nav';

function App() {
  return (
    <div className="App">
      <div>
      <Nav type="nav2"/>
     </div>

     <h1>React</h1>
     
     <div>
     <Button/>
     </div>
     <br></br>

     <div>
       <Input/>
     </div><br></br>
 
     <div>
            <Nav type="nav1"/>
            </div>

    </div>
  );
}

export default App;
