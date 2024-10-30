import { FC } from "react";
import { ButtonType1 } from "../components/ui/buttons/SybmitButton";
import { Trash } from "../components/ui/buttons/Trash";
import { Edit } from "../components/ui/buttons/Edit";

export const UiPage: FC = () => {
    return (
        <>
            <h1 className=" text-center font-bold text-3xl mb-10">Страница для ui компонентов</h1>
            <div className="">
                <h2 className="text-center ">Кнопки</h2>
                <div className="flex gap-7">
                    <div className="w-72">
                        <ButtonType1
                            name="имя"
                        />
                        <div className="flex flex-row gap-2">
                            <span className="font-bold">имя компонента:</span>
                            <span className="font-bold text-green-900">ButtonType1</span>
                        </div>
                        <div className="">
                            Параметры:
                            <ul>
                                <li>type : bytton | submit</li>
                                <li>onclick? : function</li>

                            </ul>
                        </div>
                    </div>
                    <div className="w-72">
                        <Trash

                        />
                        <div className="flex flex-row gap-2">
                            <span className="font-bold">имя компонента:</span>
                            <span className="font-bold text-green-900">Edit</span>
                        </div>
                        <div className="">
                            Параметры:
                            <ul>
                                <li>onclick? : function</li>
                            </ul>
                            при клике появляется попап для подтверждения действия
                        </div>
                    </div>
                    <div className="w-72">
                        <Edit

                        />
                        <div className="flex flex-row gap-2">
                            <span className="font-bold">имя компонента:</span>
                            <span className="font-bold text-green-900">Edit</span>
                        </div>
                        <div className="">
                            Параметры:
                            <ul>
                                <li>onclick? : function</li>
                            </ul>
                            кнопка для редактирования
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}