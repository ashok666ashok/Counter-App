import React, { useState } from 'react'
import './Counter.css'

function Counter() {
    const [counter,setCounter]=useState(0)

    const incriment=()=>{
        setCounter(counter+1)
    }
    const decriment=()=>{
        if(counter!==0){
            setCounter(counter-1)
        }
        
    }
    const reset=()=>{
        setCounter(0)
    }

  return (
   <div className='main'>
    <div className='text-center mt-5 wrapper '>
        <h1 className='counter'>{counter}</h1>
    
    <div className='align-item-center'>
        <button onClick={incriment} className='btn btn-primary  m-1'>+</button>
        <button onClick={decriment} className='btn btn-warning  m-1'>-</button><br />
        <button onClick={reset} className='btn btn-danger btn-rounded m-1'>reset</button>
    </div>
    </div>
    </div>
  )
}

export default Counter