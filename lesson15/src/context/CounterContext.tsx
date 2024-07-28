import {
    ChangeEvent,
    createContext,
    PropsWithChildren,
    ReactElement,
    useCallback,
    useContext,
    useReducer,
} from "react";

type InitState = { count: number; text: string };

export const initState: InitState = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE;
    payload?: string;
};

const reducer = (state: InitState, action: ReducerAction): InitState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 };
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 };
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return { ...state, text: action.payload ?? "" };

        default:
            throw new Error();
    }
};

const useCounterContext = (initState: InitState) => {
    const [state, dispatch] = useReducer(reducer, initState);

    const increment = useCallback(
        () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
        []
    );

    const decrement = useCallback(
        () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),
        []
    );

    const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: REDUCER_ACTION_TYPE.NEW_INPUT,
            payload: e.target.value,
        });
    }, []);

    return { state, increment, decrement, handleTextInput };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: UseCounterContextType = {
    state: initState,
    increment: () => {},
    decrement: () => {},
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {},
};

const CounterContext = createContext<UseCounterContextType>(initContextState);

export const CounterContextProvider = ({
    children,
    ...initState
}: PropsWithChildren & InitState): ReactElement => {
    return (
        <CounterContext.Provider value={useCounterContext(initState)}>
            {children}
        </CounterContext.Provider>
    );
};

type UseCounter = {
    count: number;
    increment: () => void;
    decrement: () => void;
};

export const useCounter = (): UseCounter => {
    const {
        state: { count },
        increment,
        decrement,
    } = useContext(CounterContext);

    return { count, increment, decrement };
};

type UseCounterText = {
    text: string;
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useCounterText = (): UseCounterText => {
    const {
        state: { text },
        handleTextInput,
    } = useContext(CounterContext);

    return { text, handleTextInput };
};
