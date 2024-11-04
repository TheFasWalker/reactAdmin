import { FC, useState } from "react";
import { UserPreview } from "../components/users/UserPreview";
import { ButtonType1 } from "../components/ui/buttons/SybmitButton";
import { UserCreatePopup } from "../components/users/UserCreatePopup";


const users = [
    {
        email: "user1@example.com",
        userRole: "admin",
        activity: true,
        name: "John",
        family: "Doe"
    },
    {
        email: "user2@example.com",
        userRole: "partner",
        activity: false,
        name: "Jane",
        family: "Smith"
    },
    {
        email: "user3@example.com",
        userRole: "manager",
        activity: true,
        name: "Alice",
        family: "Johnson"
    },
    {
        email: "user4@example.com",
        userRole: "admin",
        activity: false,
        name: "Chris",
        family: "Lee"
    },
    {
        email: "user5@example.com",
        userRole: "partner",
        activity: true,
        name: "Michael",
        family: "Brown"
    },
    {
        email: "user6@example.com",
        userRole: "manager",
        activity: false,
        name: "Sarah",
        family: "Davis"
    },
    {
        email: "user7@example.com",
        userRole: "admin",
        activity: true,
        name: "David",
        family: "Garcia"
    },
    {
        email: "user8@example.com",
        userRole: "partner",
        activity: true,
        name: "Emma",
        family: "Martinez"
    },
    {
        email: "user9@example.com",
        userRole: "manager",
        activity: false,
        name: "Daniel",
        family: "Rodriguez"
    },
    {
        email: "user10@example.com",
        userRole: "admin",
        activity: true,
        name: "Olivia",
        family: "Wilson"
    }
];

export const UsersPage: FC = () => {
    const [creatingUserPopupState, setCreatingUserPopupState] = useState(false)
    return (
        <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <UserCreatePopup
                popupState={creatingUserPopupState}
                closePopup={() => setCreatingUserPopupState(false)} />
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-1/2">

                        </div>
                        <div className="w-fit  flex flex-col space-y-2  items-center justify-center">
                            <ButtonType1 onClick={() => setCreatingUserPopupState(true)} name="Добавить пользователя" />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="grid grid-cols-[250px_150px_1fr_200px] text-xs text-gray-700  bg-gray-50 font-bold">
                            <span className="px-4 py-3 text-center">UserName</span>
                            <span className="px-4 py-3 text-center">UserRole</span>
                            <span className="px-4 py-3 text-center">UserData</span>
                            <span className="px-4 py-3">UserActions</span>
                        </div>
                        {users.map(user => (
                            <UserPreview
                                email={user.email}
                                activity={user.activity}
                                name={user.name}
                                family={user.family}
                                userRole={user.userRole} />
                        ))}


                    </div>

                </div>
            </div>
        </section>
    )
}