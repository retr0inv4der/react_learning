import * as React from "react";

export default function Counter(){
    let [count , setCount] = React.useState<number>(0) ; 
    function increase(){
        setCount(count+1) ;
    }
    return (
        <>
            <p>{count}</p>
            <button onClick={increase}>increase</button>
        </>
    );


}