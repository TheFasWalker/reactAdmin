import { Field } from "formik";
import { FC } from "react";
interface inputfieldInterfase{
    error:string | undefined,
    touched: boolean | undefined,
    type:'email' | 'text' |'password'
    name:string,
    placeholder:string,
    title:string
}
export const InputField:FC<inputfieldInterfase> =({title,name, error,touched,type,placeholder='placeholder'})=>{
    return(
        <label>
            <span className={`${error && touched && 'flex justify-between items-center'} ` }>
            <span>{title}</span>
            <span className="mt-2 text-sm text-red-600 dark:text-red-500">
            {error}
        </span>
            </span>

        <Field
            type={type}
            name={name}
            placeholder={placeholder}
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error && touched && "bg-red-200 border-red-500"
                }`}/>


    </label>
    )
}