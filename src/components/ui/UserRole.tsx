import { FC } from "react";
interface UserRoleInterface {
    role: 'admin' | 'manager' | 'partner'
}



export const UserRole: FC<UserRoleInterface> = ({ role }) => {
    switch (role) {
        case ('admin'):
            return (
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-red-400">Админ</span> 
            )
        case ('manager'):
            return (
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">Контент&nbsp;менеджер</span>
            )
        case ('partner'):
            return (
                    <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-pink-400">Партнёр</span>
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