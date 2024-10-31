import { FC } from "react";
import { ButtonLink } from "../components/ui/buttons/links/ButtonLink";
import { UserPreview } from "../components/users/UserPreview";

export const UsersPage:FC =()=>{
    return(
        <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div className="w-full md:w-1/2">
                    
                </div>
                <div className="w-fit  flex flex-col space-y-2  items-center justify-center">
  <ButtonLink link={"#"} text={"Добавить пользователя"}  />
                </div>
            </div>
            <div className="overflow-x-auto">
                <div className="grid grid-cols-[250px_100px_1fr_200px] text-xs text-gray-700  bg-gray-50 font-bold">
                    <span className="px-4 py-3">UserName</span>
                    <span className="px-4 py-3">UserRole</span>
                    <span className="px-4 py-3">UserData</span>
                    <span className="px-4 py-3">UserActions</span>
                </div>

                        <UserPreview/>
                        <UserPreview/>
                        <UserPreview/>
                        <UserPreview/>
                        <UserPreview/>
                        <UserPreview/>
                        <UserPreview/>

            </div>

        </div>
    </div>
    </section>
    )
}