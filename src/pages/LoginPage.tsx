import { FC } from "react";
import { ButtonType1 } from "../components/ui/buttons/SybmitButton";
import { Form, Formik } from "formik";
import {  useNavigate } from "react-router-dom";
import { InputField } from "../components/ui/form/formik/InputField";
import { Routes } from "../navigation/routes";
import * as yup from 'yup';
import { sha512 } from "js-sha512";

export const LoginPage: FC = () => {
    let login = import.meta.env.VITE_ROOT_ADMIN_LOGIN
    let password =import.meta.env.VITE_ROOTD_AMIN_PASSWORD
    if(!password || !login){
        login =''
        password=''
    }

    const validationSchema = yup.object().shape({
        login:yup.string().required('Обязательное поле').min(4,'Короткий логин'),
        password:yup.string().required('Обязательное поле')
    })
    const navigate = useNavigate()
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className=" text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 ">
                        Bim-Bim admin 
                        </h1>
                        <Formik
                            initialValues={{
                                login: `${login}` ,
                                password: `${password}` 
                            }}
                            validateOnBlur

                            onSubmit={(values) => {
                                // values.password = sha512(values.password)
                                console.log(values)
                                navigate(Routes.home)

                            }}
                            validationSchema={validationSchema}
                        >
                            {({ errors, touched }) => (
                                <Form className=" flex flex-col gap-4">
                                    <InputField
                                        title='login'
                                        name="login"
                                        type='text'
                                        placeholder='Почта'
                                        error={errors.login}
                                        touched={touched.login} />
                                    <InputField
                                        title='password'
                                        name="password"
                                        type='password'
                                        placeholder='Пароль Слэма'
                                        error={errors.password}
                                        touched={touched.password} />
                                    <ButtonType1
                                        type="submit"
                                        name="Вход" />
                                </Form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div>
        </section>
    )
}