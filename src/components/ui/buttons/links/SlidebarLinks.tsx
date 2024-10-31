import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../../other/Icons";
interface sidebarProps {
    title: string,
    link: string,
    icon: 'users'| 'pages' | 'info' |'help' | 'lessons' |'contacts'|'home'|'exit'
}
export const SidebarLink: FC<sidebarProps> = ({ title, link, icon }) => {
    return (
        <NavLink 
        className={({isActive,isPending })=>
            isPending ? 'isPending' : isActive ? 'flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 bg-gray-100' : 'flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100'}
            to={link}>

            <Icons
            id={icon}/>
            <span className="ml-3"> {title}</span>

        </NavLink>
        // flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100
    )
}

