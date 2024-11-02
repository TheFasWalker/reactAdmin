import { FC, useEffect, useState } from "react";
import { CreateEditHeader } from "../../components/general/CreateEditHeader";
import { Editor } from '@tinymce/tinymce-react';
import { MultiFileInput } from "../../components/ui/form/HOC/MultiFileInput";

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
    useEffect(()=>{
        console.log('asd')
        console.log(editorApiKey)
    },[])
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
            <div className="">
                <MultiFileInput
                title="Добавить фото"
                type="photo"/>
            </div>
        </div>
    )
}