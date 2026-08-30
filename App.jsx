import { useState } from 'react';
import './App.css'
function Greetings({ name, age }){
  return (
    <div> <h1>Hello my name is {name} and I'm {age} years old!</h1>
    <h1>I need money, give me 1million million dollars dollars</h1>
    </div>
    
  );
}
function App() {
  const [showGreeting, setshowGreeting] = useState(false);
  function toggleEffect(){
    setshowGreeting(!showGreeting);
  }
  return (
    <div>
      <button onClick={toggleEffect}>Toggle Effect</button>
      {showGreeting && (<Greetings name = {"Gian Carlo"} age = {18}/>
      )}
    </div>
    
  );
}

export default App

