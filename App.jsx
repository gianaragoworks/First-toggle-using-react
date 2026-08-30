import { useState } from 'react';
import './App.css'

function App() {
  const [Name, setName] = useState("")

  function handleChange(event) {
    const value = event.target.value;
  }
  return (
    <div>
      <input type="text" placeholder="Name....." onChange={handleChange} />
    </div>
    
  );
}

export default App

