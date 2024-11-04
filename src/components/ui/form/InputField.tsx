import { FC } from "react"
interface InputFieldInterface{
    title:string,
    name:string,
    placeholder:string,
    type:'text' | 'email'
}
export const InputField:FC<InputFieldInterface>=({title,name,placeholder,type})=>{
    return(
        <label>
        <span>{title} </span>
        <input type={type} value='' placeholder={placeholder} name={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </label>
    )
}