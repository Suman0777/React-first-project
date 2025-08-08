import { useState } from 'react'
import './App.css'

function App() {
  
  const [a, setA] = useState (1);
  const product = [
    {
      name : suman 
    }
  ]
  function AboutPage(){
      return (
        <>
          <h1>About</h1>
          <p>Hello there.</p>
        </>
      )
  }

  function Noreturn(){
    return (
      <>
      <h1>No return </h1>
      </>
    )
  }

  return (
    <>
      { a===1 ? <AboutPage /> : <Noreturn /> }
    </>
  );
}

export default App
