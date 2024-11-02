import { FC, useState } from "react";
import { FileInput } from "../FileInput";
import nextId from "react-id-generator";

interface MultiFileInputInterface {
  title:string,
  type?: "photo" 
}


export const MultiFileInput:FC<MultiFileInputInterface>=({title,type})=>{
    const [fileInputs, setFileInputs] = useState<{ id: string }[]>([{ id: nextId() }]);
    const handleFileAdded = () => {
        setFileInputs((prev) => [
          ...prev,
          { id: nextId() },
        ]);
      };
    const handleFileRemoved = (id: string) => {
        setFileInputs((prev) => prev.filter((item) => item.id !== id));
      };
    return(
        <div className=" w-full flex flex-wrap gap-2">
        {fileInputs.map((item) => (
            <div key={item.id} className="w-72 flex flex-col gap-2 h-fit">
                <FileInput
                id={item.id}
                    name={`file_${item.id}`}
                    type={type}
                    title={title}
                    onFileAdded={() => handleFileAdded()} 
                    deleteItem={()=>handleFileRemoved(item.id)}
                />
            </div>))}


        </div>
    )
}