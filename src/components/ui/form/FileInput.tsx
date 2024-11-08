import { FC, useRef, useState } from "react"

interface FileInputInterface{
    name:string,
    type?:'photo',
    title: string,
    id?:string,
    onFileAdded?:() => void;
    deleteItem?:()=>void;
}
export const FileInput:FC<FileInputInterface>=({name,type,title,onFileAdded,deleteItem,id})=>{
const [fileName, setFileName] = useState('')
const [fileSize, setFileSize] = useState('')
const[photoUrl, setPhotoUrl] = useState<string|null>()
const inputRef = useRef<HTMLInputElement>(null)

function formatFileSize(bytes:number) {
    if (bytes === 0) return '0 Bytes';
 
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i];
   }
   
 
const addingImage =(e: React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.[0]
    if(file){
        setFileName(file.name)
        setFileSize(formatFileSize(file.size))
        if(type == 'photo'){
            const photoUrl = URL.createObjectURL(file)
            setPhotoUrl(photoUrl)
        }
    }
    if(onFileAdded){
        onFileAdded()
    }
    

}
const deleteInputFile=()=>{
    console.log(inputRef.current)
    // inputRef.current.value='';
    setFileName("");
    setFileSize("");
    setPhotoUrl(null);
    if(deleteItem){
        deleteItem()
    }
}

    return(
    
    <div id={id}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
        {photoUrl&& (
            <img className="w-full  aspect-square mb-3" src={photoUrl} alt="" />
        )}
        
        {fileName !='' && (
            <span className="flex flex-row items-center gap-2 ">
                <span>{fileName} {fileSize}</span>
                <button onClick={deleteInputFile} className="rounded border hover:bg-slate-400"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"></path></svg></button>
            </span>
        )}
        <label className="flex flex-col gap-1 cursor-pointer ">
            {fileName== ''  && (<span>{title}</span>)}
            
            
            <input
            accept={type =='photo' ?'image/\*' : ''}
            ref={inputRef}
            className="hidden" 
            type="file" 
            name={name}
            onChange={addingImage}
             />
        </label>
        </div>
    )
}