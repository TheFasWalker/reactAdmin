import { WhiteButton } from "../ui/buttons/WhiteButton"
import { UserRole } from "../ui/UserRole"

export const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-between items-center w-full">

          <a href="https://flowbite.com" className="flex items-center justify-between mr-4">
            <img
              src="https://flowbite.s3.amazonaws.com/logo.svg"
              className="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
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
