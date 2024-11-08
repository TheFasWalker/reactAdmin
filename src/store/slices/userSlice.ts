import { createSlice } from "@reduxjs/toolkit";
import { userRole } from "../../models/userRoles";

interface userInterface{
    name:string,
    family:string,
    email:string,
    password:string,
    role:userRole['role'] | '',
    login:string
    id:string
    isLoading:boolean
    error:string,
    showCreadedUserData:boolean
}
const initialState:userInterface={
    name:'',
    family:'',
    email:'',
    password:'',
    role:'',
    login:'',
    id:'',
    isLoading:false,
    error:'',
    showCreadedUserData:false
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loading(state){
            state.isLoading=true
        },
        userClean(state){
            state.isLoading=false
            state.name=''
            state.family=''
            state.email=''
            state.password=''
            state.role=''
            state.login=''
            state.id=''
            state.error=''
            state.showCreadedUserData=false
        },
        userCreate(state,action){
            state.isLoading=false
            state.name=action.payload.name
            state.family=action.payload.family
            state.email=action.payload.email
            state.password=action.payload.password
            state.role=action.payload.role
            state.login=action.payload.login
            state.id=action.payload.id
            state.showCreadedUserData=true
            state.error=''
        },
        userError(state, action){
            state.error=action.payload
            state.isLoading=false
        },
        userCleanErrors(state){
            state.error=''
        }
    }
})

export default userSlice.reducer