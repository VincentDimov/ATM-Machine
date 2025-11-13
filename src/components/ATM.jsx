import { useState, useEffect } from "react"

const ATM = () => {

    const [balance, setBalance] = useState(100);
    const [amount, setAmount] = useState("");

    useEffect(()=>{
        console.log("ATM is now ready to use.");

        return () => { console.log("ATM shutting down.") }
    },[])


    useEffect(() => {
        console.log(`Balance has been updated! New balance is ${balance} SEK`)
    },[balance])


    const deposit = () => {
        setBalance(balance + Number(amount))
    }

    const withdraw = () => {
        
        // What ? True : False
        // Number(amount) > balance ? alert("You are broke") : setBalance(balance - Number(amount))
        
        if(amount === ""){
            alert("Var vänlig välj en summa.")
        } else if(Number(amount) > balance) {
            alert("You are broke!")
        } else {
            setBalance(balance - Number(amount))
        }
    }


    return(<div style={{border: "2px solid white"}}>
        <h2>Bankomat</h2>
        <h3>Saldo: {balance}kr</h3>
        <input type="number" onChange={(e) => {setAmount(e.target.value)}} />
        <br/>
        <button onClick={deposit}>Deposit</button>
        <button onClick={withdraw}>Withdraw</button>
    </div>
)
}

export default ATM