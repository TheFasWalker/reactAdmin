import { FC } from "react"
import { BrowserRouter, Route,Routes} from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { AdminLayout } from "../components/layouts/Admin"
import { HomePage } from "../pages/HomePage"
import { UiPage } from "../pages/UiPage"
import { DocsPage } from "../pages/DocsPage"
import { HelpPage } from "../pages/HelpPage"
import { Error404 } from "../pages/Error404"
import { PostsPage } from "../pages/PostsPage"
import { LessonsPage } from "../pages/LessonsPage"
import { UsersPage } from "../pages/UsersPage"
import { ContactsPage } from "../pages/ContactsPage"
import { CreatePost } from "../pages/Posts/CreatePost"
import { ShowPost } from "../pages/Posts/ShowPost"
import { Error505 } from "../pages/Error505"
import { Routes as AppRoutes } from "./routes"
import { AccessOnlyForAdmin, ProtectedAuthRoute } from "./ProtectedRoutes"

export const Navigation:FC =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>

                <Route path="/" element={<AdminLayout/>}>
                    <Route element={<ProtectedAuthRoute/>}>
                        <Route path={AppRoutes.home} element={<HomePage/>} />
                        <Route path={AppRoutes.help} element={<HelpPage/>}/>
                        <Route path={AppRoutes.posts} element={<PostsPage/>}/>
                        <Route path={AppRoutes.postShow} element={<ShowPost/>}/>
                        <Route path={AppRoutes.postCreate} element={<CreatePost/>}/>
                        <Route path={AppRoutes.lessons} element={<LessonsPage/>}/>
                        <Route path={AppRoutes.contacts} element={<ContactsPage/>}/>
                        
                        <Route element={<AccessOnlyForAdmin/>}>
                            <Route path={AppRoutes.docs} element={<DocsPage/>}/>
                            <Route path={AppRoutes.users} element={<UsersPage/>}/>
                            <Route path={AppRoutes.components} element ={<UiPage/>}/>
                        </Route>
                    </Route>
                </Route>
                <Route path="/*" element={<Error404/>}/>
                <Route path={AppRoutes.error505} element={<Error505/>}/>
            </Routes>
        </BrowserRouter>
    )
}