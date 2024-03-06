import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function BettingPage() {

    var [amount,setAmount] = React.useState(1000)
    var [but1,setBut1] =React.useState(2)
    var [but2,setBut2] =React.useState(1)
    var [but3,setBut3] =React.useState(2)
    var [but4,setBut4] =React.useState(2)
    function startgame(){
        setBut1(but1 +1)  

    }
  return (
    <div className='maindiv' >
        <h3>{'Your Money :'+ amount}</h3>
        <div className='mdiv'>
        <div class='d-flex'>
        <button className='bg-primary  m-5 but1'> <span>{but1}</span></button>
        <button className='bg-secondary m-5 but2' > <span>{but2}</span></button>
        </div>
        <div className='d-flex'>
        <button className=' bg-danger m-5 but3'> <span>{but3}</span></button>
        <button className=' bg-warning m-5 but4'> <span>{but4}</span></button>
        </div>
        </div>
            <br />
        <button className='betbut' onClick={()=>{startgame()}}> Bet</button>
    </div>
  )
}

export default BettingPage