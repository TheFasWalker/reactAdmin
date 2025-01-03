import { FC } from "react";
interface buttonProps {
    name:string,
    type?:'button' | 'submit',
    onClick?:()=>void
}

export const ButtonType1:FC<buttonProps>=({name,onClick,type='button'})=>{
    return(
        <button
        onClick={onClick}
        type={type}
            className=" w-full  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
            {name}
        </button>
    )
    
}