import { FC, useState } from "react";
import { ButtonType1 } from "../components/ui/buttons/SybmitButton";
import { Trash } from "../components/ui/buttons/Trash";
import { Edit } from "../components/ui/buttons/Edit";
import { Loader } from "../components/general/Loader";
import { PopUpWrapper } from "../components/general/PopUpWrapper";
import { Icons } from "../components/ui/other/Icons";
import { ButtonLink } from "../components/ui/buttons/links/ButtonLink";
import { SidebarLink } from "../components/ui/buttons/links/SlidebarLinks";
import { WhiteButton } from "../components/ui/buttons/WhiteButton";
import { InputField } from "../components/ui/form/InputField";
import { Form, Formik } from "formik";
import { DropDownSection } from "../components/uiPage/DropDownSection";
import { BackButton } from "../components/ui/buttons/BackButton";
import { FileInput } from "../components/ui/form/FileInput";
import { MultiFileInput } from "../components/ui/form/HOC/MultiFileInput";
import { UserRole } from "../components/ui/UserRole";
import { DropDownSelector } from "../components/ui/form/DropDownSelector";
import { MultiSelect } from "../components/ui/form/MultiSelect";


const dataForDropDown=[
    {
        title:'title1',
        value:'value1'
    },
    {
        title:'title2',
        value:'value2'
    },
    {
        title:'title3',
        value:'value3'
    },
    {
        title:'title4',
        value:'value4'
    },
    {
        title:'title5',
        value:'value5'
    },
    {
        title:'title6',
        value:'value6'
    },
    {
        title:'title7',
        value:'value7'
    },
    {
        title:'title8',
        value:'value8'
    },
]


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
            <div className="w-72 flex flex-col gap-2">

                            <MultiSelect
                            data={dataForDropDown}/>
                            {/* <div className="flex flex-row gap-2">
                                <span className="font-bold">имя компонента:</span>
                                <span className="font-bold text-green-900">DropDownSelector</span>
                            </div>
                            <div className="">
                                Параметры:
                                <ul>
                                    <li>title:string</li>
                                    <li>name:string</li>
                                    <li>data:Array[ {`{title:string , value:string}`}]</li>
                                </ul>
                            </div> */}


                        </div>

            <DropDownSection title="Кнопки">
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
                    <BackButton />
                    <div className="flex flex-row gap-2">
                        <span className="font-bold">имя компонента:</span>
                        <span className="font-bold text-green-900">BackButton</span>
                    </div>
                    <div className="">
                        Параметры не принимает<br />
                        Возвращает на предыдущую страницу

                    </div>
                </div>
                <div className="w-72">
                    <WhiteButton
                        title="Текст кнопки"
                        icon='exit'
                    />
                    <div className="flex flex-row gap-2">
                        <span className="font-bold">имя компонента:</span>
                        <span className="font-bold text-green-900">WhiteButton</span>
                    </div>
                    <div className="">
                        Параметры:
                        <ul>
                            <li> title : string</li>
                            <li>type : bytton | submit</li>
                            <li>onclick? : function</li>
                            <li>type?: button | submit</li>
                            <li> icon?:string (см список иконок)</li>
                        </ul>
                    </div>
                </div>
                <div className="w-72">
                    <Trash

                    />
                    <div className="flex flex-row gap-2">
                        <span className="font-bold">имя компонента:</span>
                        <span className="font-bold text-green-900">Trash</span>
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

            </DropDownSection>
            <DropDownSection title="Ссылки">
                <div className="w-72">
                    <div className=" h-11">
                        <ButtonLink
                            link={"#"}
                            text={"Текст ссылки"} />
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
                            icon={"users"} />
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
            </DropDownSection>
            <DropDownSection title="Всплывашки">
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

            </DropDownSection>
            <DropDownSection title="Иконки">
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
                        <div className="flex flex-col items-center">
                            <Icons
                                id="left" />
                            <span>left</span>
                        </div>
                    </div>
                </div>
                <div className="w-72">
<UserRole
role="admin"/>
<UserRole
role="manager"/>
<UserRole
role="partner"/>
                <div className="flex flex-row gap-2">
                        <span className="font-bold">имя компонента:</span>
                        <span className="font-bold text-green-900">UserRole</span>
                    </div>
                    <div className="">
                        Параметры:
                        <ul>
                            <li>role: admin | manager | partner</li>
                        </ul>
                    </div>
                </div>
            </DropDownSection>
            <DropDownSection title="Поля для Formik">
                <Formik initialValues={{
                    email: "",
                    password: ""
                }}
                    onSubmit={(values) => console.log('asdfaa')}
                >
                    {({ errors, touched }) => (
                        <Form className=" flex flex-row gap-4">

                            <div className="w-72">
                                <InputField
                                    validateFunc={function (): void {
                                        throw new Error("Function not implemented.");
                                    }}
                                    error={errors.email}
                                    touched={touched.email}
                                    type="email"
                                    name={"testField"}
                                    placeholder="Placeholder"
                                    title={"Заголовок"} />
                                <div className="flex flex-row gap-2">
                                    <span className="font-bold">имя компонента:</span>
                                    <span className="font-bold text-green-900">InputField</span>
                                </div>
                                <div className="">
                                    Параметры:
                                    <ul>
                                        <li>error: вставляются ошибки от формика</li>
                                        <li>touched:вставляется состояние от формика</li>
                                        <li>type:text | email</li>
                                        <li>name:string</li>
                                        <li>placeholder:string</li>
                                        <li>title:Заголовок</li>
                                    </ul>
                                </div>


                            </div>

                        </Form>

                    )}




                </Formik>

            </DropDownSection>
            <DropDownSection title="Компоненты форм">
                <div className=" flex flex-col gap-3 w-full">
                    <div className=" flex flex-row gap-2">
                        <div className="w-72 flex flex-col gap-2">
                            <span>Поле для загрузки<br />Загрузка только фоток!<br /> <b>type="photo"</b></span>

                            <FileInput
                                type="photo"
                                name="fileinput"
                                title='Загрузить фото' />
                            <div className="flex flex-row gap-2">
                                <span className="font-bold">имя компонента:</span>
                                <span className="font-bold text-green-900">FileInput</span>
                            </div>
                            <div className="">
                                Параметры:
                                <ul>
                                    <li>type?: photo (видны только фотки)</li>
                                    <li>title:string</li>
                                    <li>name:string</li>
                                </ul>
                            </div>


                        </div>
                        <div className="w-72 flex flex-col gap-2">
                            <span>Поле для загрузки<br />Загрузка любых файлов<br /> <b>type отсутствует</b></span>
                            <FileInput
                                name="fileinput"
                                title='загрузить файл' />
                            <div className="flex flex-row gap-2">
                                <span className="font-bold">имя компонента:</span>
                                <span className="font-bold text-green-900">FileInput</span>
                            </div>
                            <div className="">
                                Параметры:
                                <ul>
                                    <li>type?: photo (видны только фотки)</li>
                                    <li>title:string</li>
                                    <li>name:string</li>
                                </ul>
                            </div>


                        </div>
                        <div className="w-72 flex flex-col gap-2">
                            <span>селектор дропдаун</span>
                                <DropDownSelector 
                                title="Кнопка дропа" 
                                name="name"
                                data={dataForDropDown}/>
                            <div className="flex flex-row gap-2">
                                <span className="font-bold">имя компонента:</span>
                                <span className="font-bold text-green-900">DropDownSelector</span>
                            </div>
                            <div className="">
                                Параметры:
                                <ul>
                                    <li>title:string</li>
                                    <li>name:string</li>
                                    <li>data:Array[ {`{title:string , value:string}`}]</li>
                                </ul>
                            </div>


                        </div>
                    </div>
                    <div className=" p-2 border rounded w-full">
                        <MultiFileInput
                            title="Загрузите фотографию"
                            type="photo"
                        />
                        <div className="flex flex-row gap-2">
                            <span className="font-bold">имя компонента:</span>
                            <span className="font-bold text-green-900">MultiFileInput</span>
                        </div>
                        <span><b>type='photo'</b></span>
                        <div className="">
                            Параметры:
                            <ul>
                                <li>type?: photo (видны только фотки)</li>
                                <li>title:string</li>
                                <li>имя поля будет состоять из "<i>file_«randomId»</i>"</li>
                            </ul>
                        </div>
                    </div>
                    <div className=" p-2 border rounded w-full">
                        <MultiFileInput
                            title="Загрузите файл"
                        />
                        <div className="flex flex-row gap-2">
                            <span className="font-bold">имя компонента:</span>
                            <span className="font-bold text-green-900">MultiFileInput</span>
                        </div>
                        <span><b>type незаполнен</b></span>
                        <div className="">
                            Параметры:
                            <ul>
                                <li>type?: photo (видны только фотки)</li>
                                <li>title:string</li>
                                <li>имя поля будет состоять из "<i>file_«randomId»</i>"</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </DropDownSection>

        </>
    )
}