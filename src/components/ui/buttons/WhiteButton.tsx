import { FC } from "react";
import { Icons } from "../other/Icons";
interface WhiteButtonInterfase {
    title: string,
    onclick?: () => void,
    type?: "button" | 'submit'
    icon?: 'users' | 'pages' | 'info' | 'help' | 'lessons' | 'contacts' | 'home' | 'exit'

}
export const WhiteButton: FC<WhiteButtonInterfase> = ({ title, onclick, type = "button", icon }) => {
    return (
        <button
            className="w-full justify-center flex items-center gap-3 py-2.5 px-5 me-2 mb-2 text-sm  font-bold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
            onClick={onclick}
            type={type}>
            {title}
            {icon && <Icons id={icon} />}
        </button>
    )
}
