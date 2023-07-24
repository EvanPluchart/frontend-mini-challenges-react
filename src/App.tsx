import './App.css'
import Counter from "./components/Counter";
import Accordion from "./components/Accordion";
import NumberGuesser from "./components/NumberGuesser";
import Themes from "./components/Themes";

export default function App() {
    return (
        <div className={'bg-slate-100 min-h-screen min-w-screen flex flex-col items-center p-4 gap-10'}>
            <Counter />
            <Accordion />
            <NumberGuesser />
            <Themes />
        </div>
    );
}
