import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../../other/Icons";
interface sidebarProps {
    title: string,
    link: string,
    icon: 'users'| 'pages' | 'info' |'help' | 'lessons' |'contacts'|'home'
}
export const SidebarLink: FC<sidebarProps> = ({ title, link, icon }) => {
    return (
        <NavLink className='flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group'
            to={link}>

            <Icons
            id={icon}/>
            <span className="ml-3"> {title}</span>

        </NavLink>
    )
}

