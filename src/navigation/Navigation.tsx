import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { AdminLayout } from "../components/layouts/Admin"
import { HomePage } from "../pages/HomePage"
import { UiPage } from "../pages/UiPage"
import { DocsPage } from "../pages/DocsPage"
import { HelpPage } from "../pages/HelpPage"
import { ErrorPage } from "../pages/ErrorPage"
import { PostsPage } from "../pages/PostsPage"
import { LessonsPage } from "../pages/LessonsPage"
import { UsersPage } from "../pages/UsersPage"
import { ContactsPage } from "../pages/ContactsPage"
import { CreatePost } from "../pages/Posts/CreatePost"

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
                    <Route path="posts" element={<PostsPage/>}/>
                    <Route path="posts/create" element={<CreatePost/>}/>
                    <Route path="lessons" element={<LessonsPage/>}/>
                    <Route path="users" element={<UsersPage/>}/>
                    <Route path="contacts" element={<ContactsPage/>}/>
                </Route>
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}