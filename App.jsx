import { useState } from 'react';
import './App.css'

function Greetings({ name, age }) {
  return (
    <h1>Hello my name is {name} and I am {age} years old</h1>
  );
}

function App() {
  const [showGreetingss, setshowGreetingss] = useState(false);
  function toggleGreeting (){
    setshowGreetingss(!showGreetingss);
  }
  return (
    <div>
      <button onClick={toggleGreeting}>Toggle Greeting</button>
      {showGreetingss && (<Greetings name = {"Gian"} age = {18} />
      )}
    </div>
    
  );
}

export default App

