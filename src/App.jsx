import { useState } from 'react'
import './App.css'
import ATM from './components/ATM'

function App() {
  const [show,setShow] = useState(false)

  return (
    <>
      <h1>Bankomat-applikation</h1>
      {show && <ATM/>}
      <button onClick={() => {setShow(!show)}}>{show ? "Close" : "Start" } </button>
    </>
  )
}

export default App


// What ? True : False
        // Number(amount) > balance ? alert("You are broke") : setBalance(balance - Number(amount))