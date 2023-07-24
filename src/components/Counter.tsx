import {useState} from "react";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";

export default function Counter() {
    const [count, setCount] = useState<number>(0);
    const [step, setStep] = useState<number>(1);

    return (
        <div className={'w-full'}>
            <div className={'flex flex-col mb-4 gap-2'}>
                <h1 className={'font-bold text-2xl md:text-4xl'}>Challenge 1 : Compteur</h1>
                <p>Possibilité de choisir un valeur afin d'incrémenter ou de décrémenter un compteur.</p>
            </div>

            <div className={'flex flex-col'}>
                <div className={'flex justify-evenly text-4xl'}>
                    <button
                        onClick={() => setCount(count - step)}
                    ><AiOutlineMinusCircle /></button>
                    <p className={'font-bold'}>{count}</p>
                    <button
                        onClick={() => setCount(count + step)}
                    ><AiOutlinePlusCircle /></button>
                </div>

                <div className="flex flex-col items-center">
                    <input
                        type="number" value={step}
                        onChange={(event) => setStep(parseInt(event.target.value))}
                        className={'border-2 border-gray-500 rounded-md p-2 mt-4 w-2/3'}
                    ></input>
                    <button
                        onClick={() => {
                            setCount(0);
                            setStep(1);
                        }}
                        className={'bg-red-500 text-white p-2 rounded-md mt-4 w-2/3'}
                    >Réinitialiser</button>
                </div>
            </div>
        </div>
    );
}
