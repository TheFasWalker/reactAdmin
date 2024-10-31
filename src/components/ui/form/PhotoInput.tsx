import { FC, useRef, useState } from "react"

interface PhotoInputInterface{
    name:string

}
export const PhotoInput:FC<PhotoInputInterface>=({name})=>{
const [fileName, setFileName] = useState('')
const [fileSize, setFileSize] = useState('')
const inputRef = useRef<HTMLInputElement>(null)

function formatFileSize(bytes:number) {
    if (bytes === 0) return '0 Bytes';
 
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i];
   }
   
 
const addingImage =(e: React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files && e.target.files[0]){
        setFileName(e.target.files[0].name)
        setFileSize(formatFileSize(e.target.files[0].size))
    }

}
const deleteInputFile=()=>{
    console.log(inputRef.current)
    inputRef.current.value='';
    setFileName("");
    setFileSize("");
}

    return(<>
        {fileName !='' && (
            <span className="flex flex-row gap-2 ">
                <span>{fileName} {fileSize}</span>
                <button onClick={deleteInputFile} className="rounded border hover:bg-slate-400"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"></path></svg></button>
            </span>
        )}
        <label className="flex flex-col gap-1 mb-3 ">
            {fileName== ''  && (<span>загрузить фото</span>)}
            
            
            <input
            ref={inputRef}
            className="hidden" 
            type="file" 
            name={name}
            onChange={addingImage}
             />
        </label>
        </>
    )
}