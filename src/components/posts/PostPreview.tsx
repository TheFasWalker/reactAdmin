import { FC } from "react"
import noImage from '../../assets/noimage.png'
import { Trash } from "../ui/buttons/Trash"
import { Edit } from "../ui/buttons/Edit"
import { NavLink } from "react-router-dom"
import { Routes } from "../../navigation/routes"
interface PostPreview {
    img: string,
    description: string,
    postId:string
}
export const PostPreview: FC<PostPreview> = ({ img, description,postId }) => {
    return (
        <div className="flex flex-col p-5  rounded-lg gap-5 relative shadow bg-gray-200">
            <NavLink to={Routes.postShow.replace(':id', postId)} className=" flex items-center justify-center h-full ">
                {img && (
                    <img className="w-full h-full object-cover" src={img} alt="" />
                )}
                {!img && (
                    <img className=" w-36 h-36" src={noImage} alt="" />
                )}

            </NavLink>
            <div className="w-full h-40  grid ">
                <div className="  pr-5  h-full overflow-hidden">
                    {description}
                </div>
            </div>
            <div className=" flex gap-2 absolute top-2 right-2">
                <Trash />
                <Edit />
            </div>



        </div>
    )
}