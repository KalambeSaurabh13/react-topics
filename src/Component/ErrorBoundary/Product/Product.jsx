import React, { useState } from 'react'

const Product = () => {
    const [counter, setCounter] = useState(0);
    if(counter>5){
        throw new Error("I am crashed");

        
    }
  return (
    <div>
        Counter
        <br />
        {counter}
        <br />
        <button onClick={()=>setCounter(counter+1)}>Increment</button>        
    </div>
  )
}

export default Product