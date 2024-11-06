import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authInterface{
    token:string,
    isLoading:boolean,
    error:string
}
interface authSuccessInterface{
    token:string
}

const initialState:authInterface ={
    token:'',
    isLoading:false,
    error:''
}


export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        auth(state){
            state.isLoading = true
        },
        authSuccess(state,action:PayloadAction<authSuccessInterface>){
            state.token=action.payload.token
            state.error= ''
            state.isLoading=false
        },
        authError(state,action:PayloadAction<string>){
            state.isLoading=false
            state.error=action.payload
        },
        authLogOut(state){
            state.error=''
            state.token=''
            state.isLoading=false
        },        
        authCleanError(state){
            state.error = ''
        }


    }
})

export default authSlice.reducer