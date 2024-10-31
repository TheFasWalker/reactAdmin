import { FC, useState } from "react";
interface DropDownSectionInterface {
    children: React.ReactNode,
    title:string
}
export const DropDownSection: FC<DropDownSectionInterface> = ({
    children,
    title
}) => {
    const [dropDownState, setdropDownState] = useState(false)
    return (
        <div className="p-4 rounded-sm shadow w-full mb-3">
            <button
                type="button"
                onClick={() => setdropDownState(!dropDownState)}
                className=" w-full  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 ">
                {title}
            </button>
            {dropDownState && (
                <div className="w-full pt-5 flex gap-7">
                    {children}
                </div>
            )}

        </div>
    )
}