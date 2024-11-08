import { FC } from "react";
import { ButtonType1 } from "../ui/buttons/SybmitButton";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { userSlice } from "../../store/slices/userSlice";
import { UserRole } from "../ui/UserRole";

interface SucsessCreatingUserInterface{
    visibility:boolean
}

export const SucsessCreatingUser:FC<SucsessCreatingUserInterface>=({visibility})=>{
    const dispatch = useAppDispatch()
    const{email,family,login,name,password,role}=useAppSelector((state)=>state.userReduser)

    if(visibility){
        return(
            <div className="fixed top-0 bottom-0 right-0 left-0 z-50 bg-[#00000080] flex items-center justify-center">
                <div className="bg-white rounded-xl p-5 max-w-xs flex flex-col gap-2">
                    <h1 className="text-center font-bold text-xl">Попап закрывается только по клику на кнопку</h1>
                    <span className=" text-center">Данные пользователя</span>
                    <div className=" flex flex-col gap-2 text-base ">
                        <span>Логин:{login}</span>
                            <span>Имя : {name}</span>
                            <span>Фамилия : {family}</span>
                            <span>Email : {email}</span>
                            <span>Пароль: <b>{password}</b></span>
                            <span>роль : { <UserRole role={role} />}</span>
                            <ButtonType1
                                onClick={()=>dispatch(userSlice.actions.userClean())}
                                name="Закрыть окно"
                            />
                    </div>
    
                </div>
            </div>
        )
    }
    return null

}