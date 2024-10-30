import { FC } from "react";
import iconsSVG from '../../assets/sprite.svg'
interface iconInterface{
    id:'users'| 'pages' | 'info' |'help'
}
export const Icons:FC<iconInterface>=({id})=>{
    return(
        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
            <use href={iconsSVG + "#icon-" + id}/>
        </svg>
    )
}