import { FC, useState } from "react";
import { CreateEditHeader } from "../../components/general/CreateEditHeader";
import { Editor } from '@tinymce/tinymce-react';

export const CreatePost:FC=()=>{
    const [content, setContent] = useState('');

    const handleEditorChange = (content, editor) => {
        setContent(content);
    };
    return(
        <div className="">
            <CreateEditHeader
            title="Создание поста"/>




        <Editor
            apiKey='a3dmilatwmfsmji2q2818ite1q0zkdkvn9bb1zd2thldryh9'
                initialValue="<p>Начните писать здесь...</p>"
                textareaName="description"
                init={{
                    height: 500,
                    menubar: false,

                }}
                onEditorChange={handleEditorChange}
            />
        </div>
    )
}