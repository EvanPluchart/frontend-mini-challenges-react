// Composant React permettant de changer le theme d'une div de light a dark et de dark à light en cliquant sur un bouton.

import {useState} from "react";

export default function Themes() {
    const [theme, setTheme] = useState<string>('light');

    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <div className={'w-full'}>
            <div className={'flex flex-col mb-4 gap-2'}>
                <h1 className={'font-bold text-2xl md:text-4xl'}>Challenge 4 : Themes</h1>
                <p>Possibilité de changer le theme d'une div de light a dark et de dark à light en cliquant sur un bouton.</p>
            </div>

            <div className={`flex flex-col items-center ${theme === 'light' ? 'bg-white' : 'bg-gray-900'} p-4 rounded-md`}>
                <button
                    className={`bg-${theme === 'light' ? 'gray' : 'yellow'}-500 p-2 rounded-md mt-4 w-2/3 text-${theme === 'light' ? 'black' : 'white'}`}
                    onClick={changeTheme}
                >Changer de theme</button>
            </div>
        </div>
    );
}