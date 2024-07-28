import { CounterContextProvider, initState } from "./context/CounterContext";
import Counter from "./Counter";

function App() {
    return (
        <CounterContextProvider count={initState.count} text={initState.text}>
            <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
        </CounterContextProvider>
    );
}

export default App;
