import { FC, useState } from "react";

export const PopUpWrapper: FC=()=>{
    const [popupState, setPopupState]=useState(true)

    if(popupState){
        return(
            <div className=" fixed top-0 l-0 ring-0 b-0 bg-green-600 z-50 w-full h-full flex justify-center items-center">
                <div className="bg-white rounded-md shadow-sm p-4 relative">
                    <h1>Какой то заголовок</h1>
                    <button className=" absolute h-8 w-8 shadow bg-white flex justify-center items-center rounded-full -top-4 -right-4 hover:shadow-md">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
    return null

}