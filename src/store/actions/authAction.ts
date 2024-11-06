import { fetchData } from "../../functions/fetchData";
import { authSlice } from "../slices/authSlice";
import { AppDispatch } from "../store";

export const autorisation = (login:string,password:string)=> async (dispatch:AppDispatch)=>{
    try{
        dispatch(authSlice.actions.auth())
        const res = fetchData('/admin_auth',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'login':login,
                'password':password
              }


        })
        if ((await res).ok) {
            const data = await (await res).json();
                console.log('ssss')

        } else {
            console.log('ssss22222')
           
        }
    }catch(e:any){
        dispatch(authSlice.actions.authError(e.message))
        console.log(e.message)
    }
}