import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByvalue } from "../Reducer/CounterReducer";

const Counter=()=>{
    const [newcount, setnewcount] = useState(0);
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    const handlechange=(e)=>{
        e.preventDefault();
        setnewcount(e.target.value);
    }

    return(
        <React.Fragment>
            <div class="wrapper">
                <span>{count}</span>
                <button onClick={()=> dispatch(increment())}>INCREMENT</button>
                <button onClick={()=> dispatch(decrement())}>DECREMENT</button>
                <input type="text" placeholder="enter value" onChange={(e)=> handlechange(e)}/>
                <button onClick={()=> dispatch(incrementByvalue({newcount: newcount}))}>Increment By Count</button>
            </div>
        </React.Fragment>
    )
}

export default Counter;