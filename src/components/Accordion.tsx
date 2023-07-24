import AccordionItem from "./AccordionItem";

export default function Accordion() {
    return (
        <div className={'w-full'}>
            <div className={'flex flex-col mb-4 gap-2'}>
                <h1 className={'font-bold text-2xl md:text-4xl'}>Challenge 2 : Accordion</h1>
                <p>Possibilité d'afficher ou de masquer le contenu d'un élément.</p>
            </div>

            <div className="flex flex-col gap-4">
                <AccordionItem title={'Item 1'}>Description semi-longue numéro 1</AccordionItem>
                <AccordionItem title={'Item 2'}>Description semi-longue numéro 2</AccordionItem>
                <AccordionItem title={'Item 3'}>Description semi-longue numéro 3</AccordionItem>
                <AccordionItem title={'Item 4'}>Description semi-longue numéro 4</AccordionItem>
                <AccordionItem title={'Item 5'}>Description semi-longue numéro 5</AccordionItem>

            </div>


        </div>
    )
}