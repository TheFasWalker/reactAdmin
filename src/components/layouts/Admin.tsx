import { FC } from "react";
import { Sidebar } from "../general/Sidebar";
import { Header } from "../general/Header";
import { Outlet } from "react-router-dom";

export const AdminLayout: FC = () => {
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