import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { AdminLayout } from "../components/layouts/Admin"
import { HomePage } from "../pages/HomePage"
import { UiPage } from "../pages/UiPage"
import { DocsPage } from "../pages/DocsPage"
import { HelpPage } from "../pages/HelpPage"
import { ErrorPage } from "../pages/ErrorPage"

export const Navigation:FC =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>

                <Route path="admin" element={<AdminLayout/>}>
                    <Route index element={<HomePage/>} />
                    <Route path="components" element ={<UiPage/>}/>
                    <Route path="docs" element={<DocsPage/>}/>
                    <Route path="help" element={<HelpPage/>}/>
                    
                </Route>
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}