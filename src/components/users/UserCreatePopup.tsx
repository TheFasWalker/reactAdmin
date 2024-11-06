import { FC } from "react";
import { InputField } from "../ui/form/InputField";
import { DropDownSelector } from "../ui/form/DropDownSelector";
import { ButtonType1 } from "../ui/buttons/SybmitButton";
import { PopUpWrapper } from "../general/PopUpWrapper";
import { UserRolesData } from "../../staticData/roles";
import { PasswordInput } from "../ui/form/PasswordInput";
import { Form, Formik } from "formik";
import { userValidation } from "../../heplers/validation";
import { sha512 } from "js-sha512";
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
                <Formik
                initialValues={{
                    name:'',
                    family:'',
                    email:'',
                    password:'',
                    role:''
                }}
                validateOnBlur
                onSubmit={(values)=>{
                    values.password = sha512(values.password)
                    console.log(values)
                }}
                validationSchema={userValidation}
                >
                        {({values,errors, touched, handleChange,handleBlur,isValid,handleSubmit,dirty})=>(
                       <Form className="flex flex-col gap-3" >
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
                {/* <form className="flex flex-col gap-3" action="#">


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
            
                </form> */}
            </div>

            
        </PopUpWrapper>


    )
}