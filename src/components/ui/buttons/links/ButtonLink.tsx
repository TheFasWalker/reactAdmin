import { FC } from "react";
import { NavLink } from "react-router-dom";


interface ButtonLinkInterfase{
    link:string,
    text:string
}
export const ButtonLink:FC<ButtonLinkInterfase>=({link , text})=>{
    return(
        <NavLink className='flex items-center justify-center h-full w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' 
        to={link}> 
        {text}
        </NavLink>
    )
}
