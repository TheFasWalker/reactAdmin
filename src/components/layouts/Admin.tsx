import { FC } from "react";
import { Sidebar } from "../general/Sidebar";
import { Header } from "../general/Header";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export const AdminLayout: FC = () => {
    const dispatch = useAppDispatch()
    const {role,email,id,token}= useAppSelector((state)=>state.authReduser)
    if(!email &&  !role ){
        //запрос данных из апи
    }
    return (
        <div className="antialiased bg-gray-50 dark:bg-gray-900 ">
            <Header role={role} id={id} email={email}/>
            <Sidebar />
            <main className="p-4 md:ml-64  pt-20 h-[100vh] overflow-x-auto">
                <Outlet />
            </main>
        </div>
    )
}