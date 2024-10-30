import { FC, useEffect, useRef, useState } from "react";
interface popupInterface{
    state:boolean,
    close:()=>void,
    children:React.ReactNode
}
export const PopUpWrapper: FC<popupInterface>=({state,close, children})=>{
    const popupRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (state) {
            document.addEventListener("mousedown", missclick);
        } else {
            document.removeEventListener("mousedown", missclick);
        }
        return () => {
            document.removeEventListener("mousedown", missclick);
        };
    }, [state]);
    const missclick = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
            close();
        }
    };
    if(state){
        return(
            <div className=" absolute top-0 left-0 ring-0 bottom-0 bg-[#00000080] z-50 w-full h-full flex justify-center items-center">
                <div ref={popupRef} className="bg-white rounded-md shadow-sm p-4 relative">
                    <h1>Какой то заголовок</h1>
                    {children}
                    <button onClick={close} className=" absolute h-8 w-8 shadow bg-white flex justify-center items-center rounded-full -top-4 -right-4 hover:shadow-md">
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