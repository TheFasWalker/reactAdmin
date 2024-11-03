import { FC, useState } from "react";
type data = {
    title: string,
    value: string

}
interface buttonInterface {
    title: string,
    value: string,
    onclick: () => void

}
interface MultiSelectInterface {
    data: Array<data>
}

export const MultiSelect: FC<MultiSelectInterface> = ({ data }) => {
    const [dropDownMenuState, setdropDownMenuState] = useState(true)
    const [selectedItems, setSelectedItems] = useState<Array<data>>([])
    const checkActiveElem =(value:string, selectedItems: data[]):boolean=>{
        return !selectedItems.some((elem) => elem.value === value);
    }
    const addElem = (value: string, title: string) => {
        if (checkActiveElem(value,selectedItems)) {
            setSelectedItems((prev) => [...prev, { value: value, title: title }])
        }
    }
    const removeElement = (value: string) => {
        setSelectedItems((prev) => prev.filter(item => item.value !== value))
    }


    return (
        <div className=" relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            {selectedItems.length === 0
                ?
                (<span className="flex w-full h-full items-center justify-center"> multiselect</span>)
                : (<div className="flex flex-row gap-0.5 flex-wrap">
                    {selectedItems.map((item) => (

                        <ShownElem
                            key={item.value}
                            title={item.title}
                            onclick={() => removeElement(item.value)}
                        />
                    ))}
                </div>)
            }
            {dropDownMenuState && (
                <div className="absolute top-[90%] left-0 bg-white w-full flex flex-col border-gray-300 border-b border-r border-l rounded-br-lg rounded-bl-lg max-h-52 overflow-y-scroll">
                    {data.map(item => (
                        <Button
                            onclick={() => addElem(item.value, item.title)}
                            key={item.value}
                            title={item.title}
                            value={item.value}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

const Button: FC<buttonInterface> = ({ title, value, onclick }) => {
    return (
        <button
            onClick={onclick}
            className={`w-full flex items-center justify-center p-2 text-sm text-gray-700 hover:bg-gray-100  `}
            data-value={value}
        >{title}
        </button>
    )
}
const ShownElem: FC<{ title: string, onclick?: () => void }> = ({ title, onclick }) => {
    return (
        <span className=" flex flex-row items-center gap-1 p-1 border rounded-lg bg-slate-50">
            {title}
            <button
                onClick={onclick}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"></path></svg></button></span>
    )
}