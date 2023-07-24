import type {PropsWithChildren} from "react";
import {useState} from "react";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";

type AccordionItemProps = PropsWithChildren<{
    title: string,
    opened?:boolean,
}>

export default function AccordionItem({title, opened = false, children}: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(opened);

    return (
        <div className={'flex flex-col w-full p-2 rounded border-2 border-slate-300 justify-center'}>
            <div className={'flex justify-between items-center'}>
                <h1 className={'font-bold text-2xl md:text-4xl'}>{title}</h1>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={'text-4xl'}
                >{isOpen ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}</button>
            </div>
            {isOpen && children}
        </div>
    );
}
