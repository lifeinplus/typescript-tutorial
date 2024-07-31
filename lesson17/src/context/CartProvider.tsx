import {
    createContext,
    PropsWithChildren,
    ReactElement,
    useMemo,
    useReducer,
} from "react";

export type CartItemType = {
    sku: string;
    name: string;
    price: number;
    qty: number;
};

type CartState = {
    cart: CartItemType[];
};

const initState: CartState = { cart: [] };

const REDUCER_ACTION_TYPES = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT",
};

export type ReducerActionTypes = typeof REDUCER_ACTION_TYPES;

export type ReducerAction = {
    type: string;
    payload?: CartItemType;
};

const reducer = (state: CartState, action: ReducerAction): CartState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPES.ADD: {
            if (!action.payload) {
                throw new Error("action.payload missing in ADD action");
            }

            const { sku, name, price } = action.payload;

            const filteredCart: CartItemType[] = state.cart.filter(
                (item) => item.sku !== sku
            );

            const itemExists: CartItemType | undefined = state.cart.find(
                (item) => item.sku === sku
            );

            const qty: number = itemExists ? itemExists.qty + 1 : 1;

            return {
                ...state,
                cart: [...filteredCart, { sku, name, price, qty }],
            };
        }

        case REDUCER_ACTION_TYPES.REMOVE: {
            if (!action.payload) {
                throw new Error("action.payload missing in REMOVE action");
            }

            const { sku } = action.payload;

            const filteredCart: CartItemType[] = state.cart.filter(
                (item) => item.sku !== sku
            );

            return { ...state, cart: [...filteredCart] };
        }

        case REDUCER_ACTION_TYPES.QUANTITY: {
            if (!action.payload) {
                throw new Error("action.payload missing in QUANTITY action");
            }

            const { sku, qty } = action.payload;

            const itemExists: CartItemType | undefined = state.cart.find(
                (item) => item.sku === sku
            );

            if (!itemExists) {
                throw new Error("Item must exist in order to update quantity");
            }

            const updatedItem: CartItemType = { ...itemExists, qty };

            const filteredCart: CartItemType[] = state.cart.filter(
                (item) => item.sku !== sku
            );

            return { ...state, cart: [...filteredCart, updatedItem] };
        }

        case REDUCER_ACTION_TYPES.SUBMIT: {
            return { ...state, cart: [] };
        }

        default: {
            throw new Error("Unidentified reducer action type");
        }
    }
};

const useCartContext = (initState: CartState) => {
    const [state, dispatch] = useReducer(reducer, initState);

    const REDUCER_ACTIONS = useMemo(() => REDUCER_ACTION_TYPES, []);

    const totalItems = state.cart.reduce((result, cartItem) => {
        return result + cartItem.qty;
    }, 0);

    const totalPriceRaw = state.cart.reduce((result, cartItem) => {
        return result + cartItem.price * cartItem.qty;
    }, 0);

    const totalPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(totalPriceRaw);

    const cart = state.cart.sort((a, b) => {
        const itemA = Number(a.sku.slice(-4));
        const itemB = Number(b.sku.slice(-4));
        return itemA - itemB;
    });

    return {
        dispatch,
        REDUCER_ACTIONS,
        totalItems,
        totalPrice,
        cart,
    };
};

export type CartContextType = ReturnType<typeof useCartContext>;

export const CartContext = createContext<CartContextType>({
    dispatch: () => {},
    REDUCER_ACTIONS: REDUCER_ACTION_TYPES,
    totalItems: 0,
    totalPrice: "",
    cart: [],
});

const CartProvider = ({ children }: PropsWithChildren): ReactElement => {
    return (
        <CartContext.Provider value={useCartContext(initState)}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
