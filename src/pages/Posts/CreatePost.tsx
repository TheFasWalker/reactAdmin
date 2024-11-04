import { FC, useEffect, useState } from "react";
import { CreateEditHeader } from "../../components/general/CreateEditHeader";
import { Editor } from '@tinymce/tinymce-react';
import { MultiFileInput } from "../../components/ui/form/HOC/MultiFileInput";
import { ButtonType1 } from "../../components/ui/buttons/SybmitButton";
import { WhiteButton } from "../../components/ui/buttons/WhiteButton";
import { ButtonLink } from "../../components/ui/buttons/links/ButtonLink";
import { Toggler } from "../../components/ui/form/Toggler";

export const CreatePost:FC=()=>{
    const editorApiKey = import.meta.env.VITE_EDITOR_API_KEY
    interface TinyMCEEditorInterface {
        getContent(): string; 
        setContent(content: string): void; 
       
      }
    const [content, setContent] = useState('');

    const handleEditorChange = (content:string, editor: TinyMCEEditorInterface) => {
        setContent(content);
    };
    return(
        <div className="">
            <CreateEditHeader
            title="Создание поста"/>




        <Editor
            apiKey={editorApiKey}
                initialValue="<p>Начните писать здесь...</p>"
                textareaName="description"
                init={{
                    height: 500,
                    menubar: false,

                }}
                onEditorChange={handleEditorChange}

            />
            <div className="pt-4">
                <MultiFileInput
                title="Добавить фото"
                type="photo"/>
            </div>
            <div className="py-4">
                <Toggler title={"Статус публикации"} name={"publishing"}/>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
                <ButtonType1 name='Сохранить'     />
                <WhiteButton title="Отмена"/>
            </div>
        </div>
    )
}