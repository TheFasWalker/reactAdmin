import { Field } from "formik";
import { FC } from "react";
interface inputfieldInterfase{
    validateFunc:()=>void,
    error:string | undefined,
    touched: boolean | undefined,
    type:'email' | 'text' |'password'
    name:string,
    placeholder:string,
    title:string
}
export const InputField:FC<inputfieldInterfase> =({title,name, error,touched,type, validateFunc,placeholder='placeholder'})=>{
    return(
        <label>
        <span>{title}</span>
        <Field
            type={type}
            name={name}
            placeholder={placeholder}
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error && touched && "bg-red-200 border-red-500"
                }`}
            validate={validateFunc} />
        <div className="mt-2 text-sm text-red-600 dark:text-red-500">
            {error}
        </div>
        {error && touched && (
            <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                {error}
            </div>
        )}
    </label>
    )
}