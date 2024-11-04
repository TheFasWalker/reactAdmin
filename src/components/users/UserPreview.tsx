import { FC } from "react";
import { Edit } from "../ui/buttons/Edit";
import { Trash } from "../ui/buttons/Trash";
import { UserRole } from "../ui/UserRole";
interface UserPreviewInterface{
    email:string,
    activity:boolean,
    userRole:'admin' | 'manager' | 'partner'
}
export const UserPreview: FC<UserPreviewInterface> = ({email,activity,userRole}) => {
    return (
        <div className=" relative grid grid-cols-[250px_150px_1fr_200px] text-xs text-gray-700  bg-gray-50 font-medium border-b w-full py-1">
            {!activity &&(<div className=" absolute bg-[#00000030] h-full w-[80%] top-0 left-0 flex items-center justify-end pr-4">
                <span className="font-bold -rotate-45">Not Active</span>
            </div>)}
            <span className="px-4 py-4">{email}</span>
            <span className="px-4 py-4 text-center"><UserRole role={userRole}            /></span>
            <span className="px-4 py-4">Запасная секция для доп данных</span>
            <div className="flex gap-3 items-center">
                <Edit />
                <Trash />
            </div>
        </div>
        
    )
}