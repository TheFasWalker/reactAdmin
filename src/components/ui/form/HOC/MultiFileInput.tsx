import { FC, useState } from "react";
import { WhiteButton } from "../../buttons/WhiteButton";
import { FileInput } from "../FileInput";

export const MultiFileInput:FC=()=>{
    const [fileInputs, setFileInputs] = useState<number[]>([0]);
    const handleFileAdded=()=>{
        setFileInputs((prev)=>[...prev,prev.length])
    }
    const handleFileRemoved =(index:number)=>{
        setFileInputs((prev)=>prev.filter((_,i)=>i !== index));
    }
    return(
        <div className=" w-72 flex flex-col gap-2">
        {fileInputs.map((_, index) => (
                <FileInput
                    key={index}
                    name={`file-${index}`}
                    type='photo'
                    title='Загрузите фото'
                    onFileAdded={() => handleFileAdded()} 
                    deleteItem={()=>handleFileRemoved(index)}
                />
            ))}


        </div>
    )
}