import { createSlice } from "@reduxjs/toolkit";

const initialValue={
    value : 0
}

export const CounterSlice = createSlice({
    name:'counter',
    initialState: initialValue,
    reducers:{
        increment: (state)=>{
            state.value += 1
        },
        decrement: (state)=> {
            if(state.value <= 0){
                state.value = 0
            }
            else state.value -= 1
        },
        incrementByvalue: (state, {payload})=>{
            state.value *= payload.newcount;
        },
    }
})

export const {increment, decrement, incrementByvalue} = CounterSlice.actions;
export default CounterSlice.reducer;