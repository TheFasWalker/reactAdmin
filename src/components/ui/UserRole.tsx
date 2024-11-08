import { FC } from "react";
import { AccessGroup, userRole } from "../../models/userRoles";




export const UserRole: FC<userRole> = ({ role }) => {
    switch (role) {
        case (AccessGroup.admin.value):
            return (
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-red-400">{AccessGroup.admin.title}</span> 
            )
        case (AccessGroup.manager.value):
            return (
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">{AccessGroup.manager.title}</span>
            )
        case (AccessGroup.partner.value):
            return (
                    <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-pink-400">{AccessGroup.partner.title}</span>
            )
        default:
            return (
                <div className="relative group">
                    <span className=" hidden absolute w-fit p-1 bg-slate-100 border rounded-sm  bottom-full left-0 group-hover:flex">
                        Как сюда попал этот пользватель одному богу известно!
                    </span>
                    <span className="bg-yellow-400 text-white p-2 flex items-center justify-center w-fit rounded-full">Божетсво</span>
                </div>
            )
    }


}