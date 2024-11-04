import { FC, useEffect, useRef, useState } from "react";
import { ButtonType1 } from "./SybmitButton";
interface ButtonProps {
    onclick?: () => void
}


export const Trash: FC<ButtonProps> = () => {
    const [deletePopupState, setDeletePopupState] = useState(false)
    const popupRef = useRef<HTMLDivElement>(null)
    const closePopup=()=>{
        setDeletePopupState(false)
    }
    const openConfirmPopup =()=>{
        setDeletePopupState(true)
    }
    const missclick = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
            closePopup();
        }
    };
    useEffect(() => {
        if (deletePopupState) {
            document.addEventListener("mousedown", missclick);
        } else {
            document.removeEventListener("mousedown", missclick);
        }
        return () => {
            document.removeEventListener("mousedown", missclick);
        };
    }, [deletePopupState]);
    return (
        <>

            <button 
            onClick={openConfirmPopup} 
            type="button"
            className="bg-red-400 h-10 w-10 rounded-lg flex items-center justify-center group hover:bg-red-600">
                <svg className="w-8 h-8 text-gray-800 dark:text-white fill-white  group-hover:fill-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
                </svg>
            </button>

            {deletePopupState && (
                <div className=" fixed top-0 left-8 bottom-0 right-0 w-full h-full flex items-center justify-center bg-[#00000080] z-10">
                    <div className="bg-white rounded-md p-4 flex flex-col gap-3" ref={popupRef}>
                        <h2>Вы точно хотите это сделать?</h2>
                        <div className="flex flex-row gap-2">
                            <ButtonType1
                                name="да" />
                            <ButtonType1
                            onClick={closePopup}
                                name="отмена" />
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}