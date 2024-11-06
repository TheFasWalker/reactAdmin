import { WhiteButton } from "../ui/buttons/WhiteButton"
import { UserRole } from "../ui/UserRole"

export const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-between items-center w-full">


          <span className="text-3xl font-extrabold leading-none tracking-tight text-gray-900">Bim-Bim admin
          </span>
          <div className="flex flex-row gap-3">
            <div className=" flex flex-col items-center">

              <span>Email@email.email</span>
              <UserRole role="admin" />
            </div>
            <WhiteButton
              title={"LogOut"}
              icon='exit'
            />
          </div>


        </div>

      </div>
    </nav>
  )
}
