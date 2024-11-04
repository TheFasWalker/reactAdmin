import { FC, useState } from "react";
import { Icons } from "../other/Icons";
import { passwordGenerator } from "../../../functions/passwordGenerator";

export const PasswordInput: FC = () => {
    const [popoverState, setPopoverState] = useState(false)
    const generatePasswort=()=>{
        console.log(passwordGenerator())
    }

    return (
        <label className=" ">
            <span>пароль </span>
            <div className="relative ">
                <input type="text" value='' placeholder='Пароль' name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                        onClick={()=>generatePasswort()}
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
