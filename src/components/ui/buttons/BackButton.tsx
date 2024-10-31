import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Icons } from "../other/Icons";

export const BackButton:FC=()=>{
    const navigate = useNavigate()
    return(
        <button
        className="w-full justify-center flex items-center gap-3 py-2.5 px-5 me-2 text-sm  font-bold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
        onClick={()=>navigate(-1)}
        >
            <Icons id='left' />
        Назад
        
    </button>
    )
}