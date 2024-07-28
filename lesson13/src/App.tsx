import {
    KeyboardEvent,
    MouseEvent,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

interface User {
    id: number;
    username: string;
}

type FibFunc = (n: number) => number;

const fib: FibFunc = (n) => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;

function App() {
    const [count, setCount] = useState<number>(0);
    const [users, setUsers] = useState<User[] | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    console.log(inputRef?.current);
    console.log(inputRef?.current?.value);

    useEffect(() => {
        console.log("mounting");
        console.log("Users: " + users);

        return () => console.log("unmounting");
    }, [users]);

    const addTwo = useCallback(
        (
            e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
        ): void => {
            console.log("button2");
            setCount((prev) => prev + 2);
        },
        []
    );

    const result = useMemo<number>(() => fib(myNum), [myNum]);
    // const result = fib(myNum);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={addTwo}>Add</button>
            <h2>{result}</h2>
            <input ref={inputRef} type="text" />
        </>
    );
}

export default App;
