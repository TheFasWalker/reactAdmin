import { FC } from "react";
import { InputField } from "../ui/form/InputField";
import { DropDownSelector } from "../ui/form/DropDownSelector";
import { ButtonType1 } from "../ui/buttons/SybmitButton";
import { PopUpWrapper } from "../general/PopUpWrapper";
import { UserRolesData } from "../../staticData/roles";
import { PasswordInput } from "../ui/form/PasswordInput";
interface UserCreatePopupInterface {
    popupState:boolean,
    closePopup:()=>void
}
export const UserCreatePopup:FC<UserCreatePopupInterface> =({popupState,closePopup})=>{
    return(
        <PopUpWrapper 
        state={popupState} 
        close={closePopup} >
            <div className="flex flex-col gap-5">
                <h1 className=" font-bold text-2xl">Создание пользователя</h1>
                <form className="flex flex-col gap-3" action="#">
                    <InputField 
                        title={"Имя"} 
                        name={"name"} 
                        placeholder={"UserName"} 
                        type="text"
                    />
                    <InputField 
                        title={"Фамилия"} 
                        name={"family"} 
                        placeholder={"UserFamily"} 
                        type="text"
                    />
                    <InputField 
                        title={"Почта"} 
                        name={"email"} 
                        placeholder={"UserEmail"} 
                        type="email"
                    />
                    <PasswordInput/>
                    <DropDownSelector 
                        title="Роль"
                        name={"userRole"} 
                        data={UserRolesData}
                    />
                    <ButtonType1
                    name="Создать пользователя" type="submit"/>
            
                </form>
            </div>

            
        </PopUpWrapper>


    )
}