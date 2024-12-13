import  { useState } from "react";

const CounterComponenet = () => {
    const [count,setcount]=useState(0);

    const increment=()=>{
        setcount(count+1)
    }
  return(
    <div>
        <h1>Counter</h1>
        <p>count:{count}</p>
        <button onClick={()=>increment()}>click</button>
    </div>
  )
}

export default CounterComponenet;
