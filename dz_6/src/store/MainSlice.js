import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "mainSlice",
    initialState: {
        title:'0',
    },
    reducers:{
        mainInfo:(state,action)=>{
            state.title = action.payload.title;
        }
    }
})

export const { mainInfo} = mainSlice.actions;

export default mainSlice.reducer;