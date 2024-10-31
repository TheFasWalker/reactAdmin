import { FC } from "react";
import { CreateEditHeader } from "../../components/general/CreateEditHeader";
import { useParams } from "react-router-dom";

export const  ShowPost:FC=()=>{
    const { id } = useParams();
    return(
        <div className="">
            <CreateEditHeader
            title='Просмотр поста'/>
{id}

        </div>
    )
}