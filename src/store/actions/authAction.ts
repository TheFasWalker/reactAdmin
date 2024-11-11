import { redirect } from "react-router-dom";
import { fetchData } from "../../functions/fetchData";
import { authSlice } from "../slices/authSlice";
import { AppDispatch } from "../store";
import { Routes } from "../../navigation/routes";
import { Redirect } from "react-router-dom";

export const autorisation = (login:string,password:string)=> async (dispatch:AppDispatch)=>{
    // try{
    //     dispatch(authSlice.actions.auth())
    //     const res = fetchData('/admin_auth',{
    //         method:'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'login':login,
    //             'password':password
    //           }


    //     })
    //     if ((await res).ok) {
    //         const data = await (await res).json();
    //             console.log('ssss')


                


    //     } else {
    //         console.log('ssss22222')
           
    //     }
    // }catch(e:any){
    //     dispatch(authSlice.actions.authError(e.message))
    //     console.log(e.message)
    // }
    const authData={
        id:'asdfasdf',
        token:'asdfaaasdfaa'
    }
    sessionStorage.setItem('token',authData.token)
    dispatch(authSlice.actions.authSuccess(authData))
}

export const getUserData =(id:string)=>(dispatch:AppDispatch)=>{
    const data ={
        email:'email@email.email123123',
        role:'RootAdmin',
        id
    }
    dispatch(authSlice.actions.authGetUserData(data))
}