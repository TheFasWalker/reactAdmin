import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userRole } from "../../models/userRoles";

interface authInterface{
    token:string,
    isLoading:boolean,
    error:string,
    email:string,
    role:userRole['role'] |''
    id:string
}
interface authSuccessInterface{
    token:string,
    id:string
}

const initialState:authInterface ={
    token:'',
    isLoading:false,
    error:'',
    email:'',
    role:'',
    id:''
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
            state.error= '',
            state.id=action.payload.id
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
        },
        authGetUserData(state,actions){
            state.email=actions.payload.email
            state.role=actions.payload.role
            state.id=actions.payload.id
            state.isLoading=false
        },
        authData(state,action){
            state.email=action.payload.email
            state.role = action.payload.role
        }


    }
})

export default authSlice.reducer