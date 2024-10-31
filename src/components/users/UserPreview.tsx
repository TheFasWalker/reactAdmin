import { FC } from "react";
import { Edit } from "../ui/buttons/Edit";
import { Trash } from "../ui/buttons/Trash";

export const UserPreview: FC = () => {
    return (
        <div className="grid grid-cols-[250px_100px_1fr_200px] text-xs text-gray-700  bg-gray-50 font-medium border-b w-full py-1">

            <span className="px-4 py-4">userName</span>
            <span className="px-4 py-4">UserRole</span>
            <span className="px-4 py-4">userData</span>
            <div className="flex gap-3 items-center">
                <Edit />
                <Trash />
            </div>
        </div>
        
    )
}