import { FC, useState } from "react";
import { ButtonType1 } from "../components/ui/buttons/SybmitButton";
import { Trash } from "../components/ui/buttons/Trash";
import { Edit } from "../components/ui/buttons/Edit";
import { Loader } from "../components/general/Loader";
import { PopUpWrapper } from "../components/general/PopUpWrapper";
import { Icons } from "../components/ui/other/Icons";
import { ButtonLink } from "../components/ui/buttons/links/ButtonLink";
import { SidebarLink } from "../components/ui/buttons/links/SlidebarLinks";


export const UiPage: FC = () => {
    const [loaderState, setLoaderState] = useState(false)
    const [popupState, setPopupState] = useState(false)
    const showLoader = () => {
        setLoaderState(true)
        setTimeout(() => {
            setLoaderState(false)
        }, 3000)

    }
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
                                <li>name : string</li>
                                <li>type : bytton | submit</li>
                                <li>onclick? : function</li>
                            </ul>
                        </div>
                    </div>
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
                                <li>name : string</li>
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
            <div className="">
                <h2 className="text-center ">Кнопки</h2>
                <div className="flex gap-7">
                    <div className="w-72">
                        <div className=" h-11">
                        <ButtonLink 
                        link={"#"} 
                        text={"Текст ссылки"}                        />
                        </div>

                        <div className="flex flex-row gap-2">
                            <span className="font-bold">имя компонента:</span>
                            <span className="font-bold text-green-900">ButtonLink</span>
                        </div>
                        <div className="">
                            Параметры:
                            <ul>
                                <li>link : string</li>
                                <li>text : string</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-72">
                        <div className=" h-11">
                            <SidebarLink 
                            title={"Текст ссылки"} 
                            link={"#"} 
                            icon={"users"}/>
                        </div>

                        <div className="flex flex-row gap-2">
                            <span className="font-bold">имя компонента:</span>
                            <span className="font-bold text-green-900">ButtonLink</span>
                        </div>
                        <div className="">
                            Параметры:
                            <ul>
                                <li>title : string</li>
                                <li>link : string</li>
                                <li>icon : string   (см. список иконок)</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="">
                <h2 className="text-center ">Обёртки</h2>
                <div className="flex gap-7">
                    <div className="w-72">
                        <Loader
                            loadingState={loaderState} />
                        <ButtonType1
                            name="вызов Лоадера"
                            onClick={showLoader}
                        />


                        <div className="flex flex-row gap-2">
                            <span className="font-bold">имя компонента:</span>
                            <span className="font-bold text-green-900">Loader</span>
                        </div>
                        <div className="">
                            Параметры:
                            <ul>
                                <li>loadingState : boolean</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-72">
                        <PopUpWrapper
                            state={popupState}
                            close={() => setPopupState(false)}>
                            Наполнение для попапа

                        </PopUpWrapper>
                        <ButtonType1
                            name="вызов попапа"
                            onClick={() => setPopupState(true)}
                        />


                        <div className="flex flex-row gap-2">
                            <span className="font-bold">имя компонента:</span>
                            <span className="font-bold text-green-900">PopUpWrapper</span>
                        </div>
                        <div className="">
                            Параметры:
                            <ul>
                                <li>state:boolean</li>
                                <li>close:function</li>
                                <li>children:React.ReactNode</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="">
                <h2 className="text-center ">Иконки</h2>
                <div className="flex gap-7">

                    <div className="w-72">
                        <Icons
                            id="users" />
                        <div className="flex flex-row gap-2">
                            <span className="font-bold">имя компонента:</span>
                            <span className="font-bold text-green-900">Icons</span>
                        </div>
                        <div className="">
                            Параметры:
                            <ul>
                                <li>id : users| pages | info | help | lessons | contacts | home | exit</li>
                            </ul>
                        </div>
                        <div className="flex gap-4 flex-wrap mt-5">
                            <div className="flex flex-col items-center">
                                <Icons
                                    id="users" />
                                <span>users</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Icons
                                    id="info" />
                                    <span>info</span>
                                    </div>
                                <div className="flex flex-col items-center">
                                    <Icons
                                        id="help" />
                                        <span>help</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icons
                                        id="pages" />
                                        <span>pages</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icons
                                        id="lessons" />
                                        <span>lessons</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icons
                                        id="home" />
                                        <span>home</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icons
                                        id="contacts" />
                                        <span>contacts</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icons
                                        id="exit" />
                                        <span>exit</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>







            </>
            )
}