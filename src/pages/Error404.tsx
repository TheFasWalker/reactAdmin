import { FC } from "react";
import { ButtonLink } from "../components/ui/buttons/links/ButtonLink";

export const Error404:FC =()=>{
    return(
        <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Что то пошло не по плану</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Мало ли какой был план...</p>
            <ButtonLink link={"admin"} text="На главную"/>
        </div>   
    </div>
</section>
    )
}