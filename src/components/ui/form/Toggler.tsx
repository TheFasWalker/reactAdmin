import { FC } from "react";

interface TogglerInterface{
    title:string,
    name:string,
    checked?:boolean
}

export const Toggler :FC<TogglerInterface>=({title,name,checked})=>{
    return(
        <label className="inline-flex items-center cursor-pointer gap-2">
            <input type="checkbox" value="" className="sr-only peer" name={name} checked={checked}/>
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{title}</span>
        </label>
    )
}