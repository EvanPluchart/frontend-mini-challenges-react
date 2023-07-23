import './App.css'
import Counter from "./components/Counter";

export default function App() {
    return (
        <div className={'bg-slate-100 min-h-screen min-w-screen flex flex-col items-center p-4'}>

            <Counter></Counter>
        </div>
    );
}
