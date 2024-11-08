import { FC, useState } from "react";
import { Icons } from "../other/Icons";
import { passwordGenerator } from "../../../functions/passwordGenerator";
interface PasswordInputInterface{
    name:string,
    touched?:boolean,
    error?:string,
    value?:string,
    onchange?:(e: React.ChangeEvent<HTMLInputElement>)=>void,
    onblure?:(e: React.FocusEvent<HTMLInputElement>)=>void,
}
export const PasswordInput: FC<PasswordInputInterface> = ({name,touched,error,value,onchange,onblure}) => {

    const [popoverState, setPopoverState] = useState(false)

    const generatePassword=()=>{
        let generatedPassword = passwordGenerator()
              if (onchange) {
                const event = {
                    target: {
                        name,
                        value: generatedPassword,
                    },
                } as React.ChangeEvent<HTMLInputElement>;
                onchange(event);
              }
    }


    return (
        <label className=" ">
             <span className={`${touched && error && ('flex w-full justify-between')}`}>
            <span>Пароль </span>
            {touched && error && <p className="text-red-500">{error}</p>}
            </span>
            <div className="relative ">
                <input 
                    type="text" 
                    value={value || ''} 
                    placeholder='Пароль' 
                    name={name} 
                    onBlur={onblure}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        ${touched && error &&('border-red-500 border-4')}`} 
                    onChange={onchange}
                    />
                <div className="absolute top-0 right-0 bottom-0 z-[22222] w-11">
                    <div className="w-full h-full">
                    <div className={`${popoverState ?'opacity-1 block':'opacity-0 hidden'} absolute z-10 bottom-full block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm `}>
                        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Генерация пароля</h3>
                        </div>
                        <div className="px-3 py-2">
                            <p>Будет сгенерирован пароль длинной от 8 до 20 символов
                                настройки генерации пароля в файлe passwordGenerator.ts
                            </p>
                        </div>
                       
                    </div>
                    <button
                        type="button"
                        onClick={()=>generatePassword()}
                        onMouseEnter={() => setPopoverState(true)}
                        onMouseLeave={() => setPopoverState(false)}
                        className="h-full w-full  flex items-center justify-center rounded-br-lg rounded-tr-lg hover:bg-slate-300" 
                    >
                        <Icons
                            id="generate"
                        /> 
                    </button>
                            </div>
                </div>

            </div>


        </label>


    )

}
