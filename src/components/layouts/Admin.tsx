import { FC, useEffect } from "react";
import { Sidebar } from "../general/Sidebar";
import { Header } from "../general/Header";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { authSlice } from "../../store/slices/authSlice";
import { getUserData } from "../../store/actions/authAction";

export const AdminLayout: FC = () => {
    const dispatch = useAppDispatch()
    const {role,email,id,token}= useAppSelector((state)=>state.authReduser)
   
   useEffect(()=>{
    if(!email &&  !role ){
        //запрос данных из апи
        dispatch(getUserData(id))
    }
   },[dispatch, id]) 
    return (
        <div className="antialiased bg-gray-50 dark:bg-gray-900 ">
            <Header />
            <Sidebar />
            <main className="p-4 md:ml-64  pt-20 h-[100vh] overflow-x-auto">
                <Outlet />
            </main>
        </div>
    )
}