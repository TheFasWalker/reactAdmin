import { NavLink } from "react-router-dom"
import { SidebarLink } from "../ui/SlidebarLinks"

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
          Дропдауны будут тут
          </li>
        </ul>
        <ul
          className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700"
        >
          <li>
            <SidebarLink
              title="Документы"
              link="/admin/docs" 
              icon='pages'/>
          </li>
           <li>
            <SidebarLink
              title="Компоненты"
              link="/admin/components"
              icon='users' />
          </li>
          {/*<li>
            <SidebarLink
              title="Помощь"
              link="/admin/help" />
          </li> */}

        </ul>
      </div>

    </aside>
  )
}