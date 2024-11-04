import { FC } from "react"

export const Pagination:FC=()=>{
    return(
        <div className="w-full flex items-center justify-center py-3">
            <div className=" w-fit flex flex-row gap-3">
                <ArrowButton direction="prev"/>
                <NumberButton
                number={1}
                activity={true}/>
                <NumberButton
                number={2}/>
                <NumberButton
                number={3}/>
                <NumberButton
                number={4}/>
                <BotsButton/>
                <NumberButton
                number={5}/>
                <NumberButton
                number={6}/>
                <NumberButton
                number={7}/>
                <NumberButton
                number={8}/>
                <ArrowButton direction="next"/>
            </div>

        </div>
    )
}

const NumberButton:FC<{number:number,activity?:boolean}>=({number,activity})=>{
    return(
        <button 
        className={`${activity ? 'font-bold  text-xl text-white bg-blue-500 ' : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700'}flex items-center justify-center px-3 h-8 ms-0 leading-tight  border border-e-0  rounded-s-lg  `}>
            {number}
            </button>
    )      
}
const BotsButton:FC=()=>{
    return(
<button className="">...</button>
    )
}
const ArrowButton: FC<{direction:'prev' | 'next'}>=({direction})=>{
    return(
        <button className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{direction}</button>
    )
}