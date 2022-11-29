import { useState } from "react"

export function ButtonContador(){
    let [count, setCount] = useState(0);
    return(
        <button onClick={()=>{setCount(count+1)}}>{count}</button>
    )
}