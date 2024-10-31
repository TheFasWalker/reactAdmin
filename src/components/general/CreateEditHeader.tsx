import { FC } from "react";
import { BackButton } from "../ui/buttons/BackButton";
interface CreateEditHeaderInterface {
    title:string
}
export const CreateEditHeader: FC<CreateEditHeaderInterface> = ({title}) => {
    return (
        <div className="py-3 grid grid-cols-[140px_1fr]">
            <div className=" w-32">
                <BackButton />
            </div>
            <div className="flex w-full items-center justify-center">
                <h2 className="self-center text-2xl font-semibold whitespace-nowrap ">{title}</h2>
            </div>

        </div>
    )
}