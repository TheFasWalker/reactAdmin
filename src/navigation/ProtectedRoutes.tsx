import { FC } from "react"
import { useAppSelector } from "../hooks/redux"
import { Navigate,Outlet } from "react-router-dom"
import { AccessGroup } from "../models/userRoles"

export const ProtectedAuthRoute: FC=()=>{
    // const authState = useAppSelector((state)=>state.authReduser.token)
    // return authState ? <Outlet/> : <Navigate to='/404'/>
    return <Outlet/>
}

export const AccessOnlyForAdmin: FC =()=>{
    const roleState = useAppSelector(state=>state.authReduser.role)
    let access = roleState === AccessGroup.admin.value
    return access ? <Outlet/> : <Navigate to='/404'/>
}

