import { FC, useEffect } from "react"
import { Trash } from "../components/ui/buttons/Trash"
import { useAppDispatch } from "../hooks/redux"
import { getUserData } from "../store/actions/authAction"

export const HomePage:FC =()=>{
    const dispatch = useAppDispatch()
    

    useEffect(()=>{
        dispatch(getUserData('asdfasdf-123s-123s'))
    },[])
    return(
        <>
        home pageфывафывафыва
        <Trash/>
        </>
    )
}