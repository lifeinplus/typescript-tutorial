import { ReactNode } from "react";
import { useCounter, useCounterText } from "./context/CounterContext";

interface CounterProps {
    children: (num: number) => ReactNode;
}

const Counter = ({ children }: CounterProps) => {
    const { count, increment, decrement } = useCounter();
    const { text, handleTextInput } = useCounterText();

    return (
        <>
            <h1>{children(count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <input type="text" onChange={handleTextInput} />
            <h2>{text}</h2>
        </>
    );
};

export default Counter;
