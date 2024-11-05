import { FC } from "react"
interface InputFieldInterface{
    title:string,
    name:string,
    placeholder:string,
    type:'text' | 'email',
    onchange?:(e: React.ChangeEvent<HTMLInputElement>)=>void,
    onblure?:(e: React.FocusEvent<HTMLInputElement>)=>void,
    value?:string,
    touched?:boolean,
    error?:string
}
export const InputField:FC<InputFieldInterface>=({title,name,placeholder,type,onchange,onblure,value='',touched,error})=>{
    return(
        <label>
            <span className={`${touched && error && ('flex w-full justify-between')}`}>
            <span>{title} </span>
            {touched && error && <p className="text-red-500">{error}</p>}
            </span>

        <input
            onChange={onchange} 
            onBlur={onblure}
            type={type} 
            value={value} 
            placeholder={placeholder} 
            name={name} 
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                ${touched && error &&('border-red-500 border-4')}`} 
        />
        
    </label>
    )
}