import { FC } from "react";
import { ButtonType1 } from "../ui/buttons/SybmitButton";

interface SucsessCreatingUserInterface{
    visibility:boolean,
    name:string,
    family:string,
    email:string,
    password:string
    close:()=>void
}

export const SucsessCreatingUser:FC<SucsessCreatingUserInterface>=({visibility,name,family,email,password,close})=>{
    if(visibility){
        return(
            <div className="fixed top-0 bottom-0 right-0 left-0 z-50 bg-[#00000080] flex items-center justify-center">
                <div className="bg-white rounded-xl p-5 max-w-xs flex flex-col gap-2">
                    <h1 className="text-center font-bold text-xl">Попап закрывается только по клику на кнопку</h1>
                    <span className=" text-center">Данные пользователя</span>
                    <div className=" flex flex-col gap-2 text-base ">
                            <span>Имя : {name}</span>
                            <span>Фамилия : {family}</span>
                            <span>Email : {email}</span>
                            <span>Пароль: <b>{password}</b></span>
                            <ButtonType1
                                onClick={close}
                                name="Закрыть окно"
                            />
                    </div>
    
                </div>
            </div>
        )
    }
    return null

}