import { FC, useEffect, useRef, useState } from "react";

type data={
    title:string,
    role:string

}
interface DropDownSelectorInterface {
    title?: string,
    name: string
    data:data[]
    onchange?:(e: React.ChangeEvent<HTMLInputElement>)=>void,
    onblure?:(e: React.FocusEvent<HTMLInputElement>)=>void,
    touched?:boolean,
    error?:string,
    value?:string
}
interface buttonInterfase {
    title: string,
    value: string,
    onclick:()=>void,
    activity:boolean
}




export const DropDownSelector: FC<DropDownSelectorInterface> = ({ title='DropDownButton', name,value='',data,onchange,onblure ,touched,error}) => {
    const [dropDownState, setDropDownState] = useState(false)
    const [buttonTitle, setButtonTitle] = useState(title)
    const [selectedValue, setSelectedValue] = useState(value)
    const dropDownRef = useRef<HTMLDivElement>(null)
    const clickOnElem=(value:string,title:string)=>{
        setButtonTitle(title)
        setDropDownState(false)
        setSelectedValue(value)
        if (onchange) {
            const event = {
                target: {
                    name,
                    value,
                },
            } as React.ChangeEvent<HTMLInputElement>;
            onchange(event)
        }
         
    }
    const missKlick =(e:MouseEvent)=>{
        if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
            setDropDownState(false);
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown', missKlick);
        return () => {
            document.removeEventListener('mousedown', missKlick);
        };
    },[])
    return (
        <div className="box-border relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
            ref={dropDownRef}
        >
            <input 
            type="text" 
            name={name} 
            value={selectedValue} 
            readOnly 
            hidden
            onChange={onchange} 
            onBlur={onblure}
            />
            
            <button 
            onClick={()=>setDropDownState(!dropDownState)} 
            type="button"
            className={`cursor-pointer p-2.5 flex items-center justify-center w-full rounded-lg ${touched && error && ('border-2 border-red-700 relative')} `}>
                {buttonTitle} 
                {touched && error && (<span className=" text-red-700 font-bold absolute top-1 right-1">{error}</span>)}
            </button>
            {dropDownState && (
                <div className=" absolute top-[90%] left-0 bg-white w-full flex flex-col border-gray-300 border-b border-r border-l rounded-br-lg rounded-bl-lg max-h-52 overflow-y-scroll">
                    {data.map(item=>(
                            <Button
                            key={item.role}
                            title={item.title}
                            activity = {item.role == selectedValue}
                            value={item.role}                           
                            onclick={()=>clickOnElem(item.role, item.title)}
                        />
                    ))}

                </div>)}
        </div>
    )
}




const Button: FC<buttonInterfase> = ({ title, value,onclick,activity }) => {
    return (
        <button
            className={`w-full flex items-center justify-center p-2 text-sm text-gray-700 hover:bg-gray-100  ${activity ? ' hidden' : ''}`}
            onClick={onclick}
            data-value={value}
            type="button"
        >{title}
        </button>
    )
}