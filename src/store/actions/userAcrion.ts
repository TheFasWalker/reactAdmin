import { userRole } from "../../models/userRoles";
import { userSlice } from "../slices/userSlice";
import { AppDispatch } from "../store";
interface CreatingUserInterfase{
    name:string,
    family:string,
    email:string,
    password:string,
    role:string ,
    login:string
}

export const createUser =(userData:CreatingUserInterfase)=>(dispatch:AppDispatch)=>{
    dispatch(userSlice.actions.userCreate(userData))
}