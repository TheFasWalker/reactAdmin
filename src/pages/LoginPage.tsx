import { FC } from "react";
import { ButtonType1 } from "../components/ui/buttons/SybmitButton";
import { Field, Form, Formik } from "formik";

import { validateField } from "../heplers/formValidation";
import { NavLink } from "react-router-dom";
import { InputField } from "../components/ui/form/InputField";
import { Routes } from "../navigation/routes";

export const LoginPage: FC = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <NavLink to={Routes.home}> Логин мимо админки</NavLink>
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            Slam`s Adminка
                        </h1>
                        <Formik
                            initialValues={{
                                email: "",
                                password: ""
                            }}
                            onSubmit={(values) => console.log('asdfaa')}
                        >
                            {({ errors, touched }) => (
                                <Form className=" flex flex-col gap-4">
                                    <InputField
                                        title='email'
                                        name="email"
                                        type='email'
                                        placeholder='Почта Слэма'
                                        validateFunc={() => validateField}
                                        error={errors.email}
                                        touched={touched.email} />
                                    <InputField
                                        title='password'
                                        name="password"
                                        type='password'
                                        placeholder='Пароль Слэма'
                                        validateFunc={() => validateField}
                                        error={errors.password}
                                        touched={touched.password} />
                                    <ButtonType1
                                        type="submit"
                                        name="Молви Слэм и войди!" />
                                </Form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div>
        </section>
    )
}