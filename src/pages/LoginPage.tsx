import { FC } from "react";
import { ButtonType1 } from "../components/ui/buttons/SybmitButton";
import { Field, Form, Formik } from "formik";

import { validateField } from "../heplers/formValidation";
import { NavLink } from "react-router-dom";

export const LoginPage: FC = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <NavLink to={'/admin'}> Логин мимо админки</NavLink>
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
                                    <label>
                                        <span>email</span>
                                        <Field
                                            type='email'
                                            name='email'
                                            placeholder='Почта Слэма'
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email && touched.email && "bg-red-200 border-red-500"
                                                }`}
                                            validate={validateField} />
                                        <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                            {errors.email}
                                        </div>
                                        {errors.email && touched.email && (
                                            <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                                {errors.email}
                                            </div>
                                        )}
                                    </label>
                                    <label>
                                        <span>Пароль</span>
                                        <Field
                                            type='password'
                                            name='password'
                                            placeholder='Пароль Слэма'
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.password && touched.password && "bg-red-200 border-red-500"
                                                }`}
                                            validate={validateField} />
                                        {errors.password && touched.password && (
                                            <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                                {errors.password}
                                            </div>
                                        )}
                                    </label>
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