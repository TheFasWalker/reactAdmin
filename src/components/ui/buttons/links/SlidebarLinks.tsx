import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../../other/Icons";
import { spriteInterface } from "../../../../models/sptite";
interface sidebarProps {
    title: string,
    link: string,
    icon: spriteInterface['id'],
    target?:'_blank' |'_parent' | '_self' | '_top'
}
export const SidebarLink: FC<sidebarProps> = ({ title, link, icon ,target}) => {
    return (
        <NavLink 
            target={target ?target :'' }
        className={({isActive,isPending })=>
            isPending ? 'isPending' : isActive ? 'flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 bg-gray-100' : 'flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100'}
            to={link}>

            <Icons
            id={icon}/>
            <span className="ml-3"> {title}</span>

        </NavLink>
    )
}

