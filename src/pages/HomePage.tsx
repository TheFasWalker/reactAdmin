import { FC, useEffect } from "react"
import { Trash } from "../components/ui/buttons/Trash"
import { useAppDispatch } from "../hooks/redux"
import { getUserData } from "../store/actions/authAction"

export const HomePage:FC =()=>{
    return(
        <>
        home pageфывафывафыва
        <Trash/>
        </>
    )
}