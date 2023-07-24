import {useState} from "react";

export default function NumberGuesser() {
    const [number, setNumber] = useState<number>(Math.floor(Math.random() * 100));

    const checkNumber = () => {
        const input = document.querySelector('.numberGuesserInput') as HTMLInputElement;
        const value = parseInt(input.value);
        const state = document.querySelector('.numberGuesserState') as HTMLParagraphElement;
        if (value < number) {
            state.innerText = 'Statut : Votre nombre est en dessous !';
        } else if (value > number) {
            state.innerText = 'Statut : Votre nombre est au dessus !';
        } else {
            state.innerText = 'Statut : Bravo vous venez de trouver !';
            setNumber(Math.floor(Math.random() * 100));
        }
    }

    return (
        <div className={'w-full'}>
            <div className={'flex flex-col mb-4 gap-2'}>
                <h1 className={'font-bold text-2xl md:text-4xl'}>Challenge 3 : Number Guesser</h1>
                <p>Possibilité de deviner un nombre entre 1 et 100.</p>
            </div>

            <div className="flex flex-col items-center">
                <input
                    type="number"
                    className={'numberGuesserInput border-2 border-gray-500 rounded-md p-2 mt-4 w-2/3'}
                ></input>
                <p className={'numberGuesserState'}>Statut : Entrez un nombre !</p>
                <button
                    className={'bg-green-500 text-white p-2 rounded-md mt-4 w-2/3'}
                    onClick={checkNumber}
                >Vérifier</button>
            </div>
        </div>
    );
}