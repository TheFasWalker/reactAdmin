import { FC } from "react";
import { InputField } from "../ui/form/InputField";
import { DropDownSelector } from "../ui/form/DropDownSelector";
import { ButtonType1 } from "../ui/buttons/SybmitButton";
import { PopUpWrapper } from "../general/PopUpWrapper";
import { PasswordInput } from "../ui/form/PasswordInput";
import { Form, Formik } from "formik";
import { userCreatingValidation } from "../../heplers/validation";
import { sha512 } from "js-sha512";
import { useAppDispatch } from "../../hooks/redux";
import { createUser } from "../../store/actions/userAcrion";
import { UserRolesData } from "../../models/userRoles";
interface UserCreatePopupInterface {
    popupState:boolean,
    closePopup:()=>void
}
export const UserCreatePopup:FC<UserCreatePopupInterface> =({popupState,closePopup})=>{
    const dispatch = useAppDispatch()
    return(
        <PopUpWrapper 
        state={popupState} 
        close={closePopup} >
            <div className="flex flex-col gap-5">
                <h1 className=" font-bold text-2xl">Создание пользователя</h1>
                <Formik
                initialValues={{
                    name:'',
                    family:'',
                    email:'',
                    password:'',
                    role:'',
                    login:''
                }}
                validateOnBlur
                onSubmit={(values)=>{     
                    dispatch(createUser(values))
                    closePopup()
                    values.password = sha512(values.password)
                    console.log(values)
                }}
                validationSchema={userCreatingValidation}
                >
                        {({values,errors, touched, handleChange,handleBlur,isValid,handleSubmit,dirty})=>(
                       <Form className="flex flex-col gap-3" >
                        <InputField 
                                title={"Логин"} 
                                name={"login"} 
                                placeholder={"UserName"} 
                                type="text"
                                onblure={handleBlur}
                                onchange={handleChange}
                                value={values.login}
                                touched={touched.login}
                                error={errors.login}
                            />
                            <InputField 
                                title={"Имя"} 
                                name={"name"} 
                                placeholder={"UserName"} 
                                type="text"
                                onblure={handleBlur}
                                onchange={handleChange}
                                value={values.name}
                                touched={touched.name}
                                error={errors.name}
                            />
                            <InputField 
                                title={"Фамилия"} 
                                name={"family"} 
                                placeholder={"UserFamily"} 
                                type="text"
                                onblure={handleBlur}
                                onchange={handleChange}
                                value={values.family}
                                touched={touched.family}
                                error={errors.family}
                            />
                             <InputField 
                                title={"Почта"} 
                                name={"email"} 
                                placeholder={"UserEmail"} 
                                type="email"
                                onblure={handleBlur}
                                onchange={handleChange}
                                value={values.email}
                                touched={touched.email}
                                error={errors.email}
                            />
                            <PasswordInput
                                name={"password"}
                                value={values.password}
                                onblure={handleBlur}
                                onchange={handleChange}
                                touched={touched.password}
                                error={errors.password}
                            />

                            <DropDownSelector 
                                title="Роль"
                                name={"role"} 
                                data={UserRolesData}
                                onblure={handleBlur}
                                onchange={handleChange}
                                value={values.role}
                                touched={touched.role}
                                error={errors.role}
                            />
                            <ButtonType1
                                name="Создать пользователя" 
                                type="submit"
                            />
                            
                        </Form>

                        )}
                </Formik>
            </div>

            
        </PopUpWrapper>

    )
}