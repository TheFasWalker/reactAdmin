import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { authSlice } from "../../store/slices/authSlice"
import { WhiteButton } from "../ui/buttons/WhiteButton"
import { UserRole } from "../ui/UserRole"
import { Routes } from "../../navigation/routes"

export const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const appTitle = import.meta.env.VITE_APP_TITLE
  const {role,email}=useAppSelector((state)=>state.authReduser)
  const exit =()=>{
    dispatch(authSlice.actions.authLogOut())
    navigate(Routes.login)
  }

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-between items-center w-full">


          <span className="text-3xl font-extrabold leading-none tracking-tight text-gray-900">
            {appTitle}
          </span>
          <div className="flex flex-row gap-3">
            <div className=" flex flex-col items-center">

              <span>{email}</span>
              <UserRole role={role} />
            </div>
            <WhiteButton
              title={"LogOut"}
              icon='exit'
              onclick={()=>exit()}
            />
          </div>


        </div>

      </div>
    </nav>
  )
}
