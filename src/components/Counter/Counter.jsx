import React, {useState} from "react";
//import "./estilos.css"

function Counter(props) {
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={()=>setCount(count+1)}>Clickeado {count} veces</button>       
        </>
    );
}

export default Counter;