import { NavLink } from "react-router-dom"
import { SidebarLink } from "../ui/buttons/links/SlidebarLinks"
import { Routes } from "../../navigation/routes"


export const Sidebar = () => {
  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">

        <ul className="space-y-2">
          <li>
            <SidebarLink title={"Главная"} link={Routes.home} icon={"home"} />
          </li>
          <li>
            <SidebarLink title={"Уроки"} link={Routes.lessons} icon={"lessons"} />
          </li>
          <li>
            <SidebarLink
              title="посты" link={Routes.posts} icon={"pages"}            />
          </li>
          <li>
            <SidebarLink
              title="Пользователи" link={Routes.users} icon={"users"}            />
          </li>          
          <li>
            <SidebarLink
              title="Контакты" link={Routes.contacts} icon={"contacts"}            />
          </li>
        </ul>
        <ul
          className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700"
        >
          <li>
            <SidebarLink
              title="Документы"
              link={Routes.docs} 
              icon='pages'/>
          </li>
           <li>
            <SidebarLink
              title="Компоненты"
              link={Routes.components}
              icon='help' />
          </li>


        </ul>
      </div>

    </aside>
  )
}