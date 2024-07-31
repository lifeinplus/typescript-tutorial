import { ChangeEvent, Dispatch, memo, ReactElement } from "react";
import {
    CartItemType,
    ReducerAction,
    ReducerActionTypes,
} from "../context/CartProvider";

interface CartLineItemProps {
    item: CartItemType;
    dispatch: Dispatch<ReducerAction>;
    REDUCER_ACTIONS: ReducerActionTypes;
}

const CartLineItem = ({
    item,
    dispatch,
    REDUCER_ACTIONS,
}: CartLineItemProps) => {
    const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url)
        .href;

    const lineTotal: number = item.price * item.qty;
    const highestQty: number = item.qty > 20 ? item.qty : 20;

    const optionValues: number[] = [...Array(highestQty).keys()].map(
        (i) => i + 1
    );

    const options: ReactElement[] = optionValues.map((value) => {
        return (
            <option key={`opt${value}`} value={value}>
                {value}
            </option>
        );
    });

    const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: REDUCER_ACTIONS.QUANTITY,
            payload: { ...item, qty: Number(e.target.value) },
        });
    };

    const onRemoveFromChart = () => {
        dispatch({
            type: REDUCER_ACTIONS.REMOVE,
            payload: item,
        });
    };

    return (
        <li className="cart__item">
            <img src={img} alt={item.name} className="cart__img" />
            <div aria-label="Item Name">{item.name}</div>
            <div aria-label="Price Per Item">
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(item.price)}
            </div>
            <label htmlFor="itemQty" className="offscreen">
                Item Quantity
            </label>
            <select
                name="itemQty"
                id="itemQty"
                className="cart__select"
                value={item.qty}
                aria-label="Item Quantity"
                onChange={onChangeQty}
            >
                {options}
            </select>
            <div
                className="cart__item-subtotal"
                aria-label="Line Item Subtotal"
            >
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(lineTotal)}
            </div>
            <button
                className="cart__button"
                onClick={onRemoveFromChart}
                aria-label="Remove Item From Cart"
                title="Remove Item From Cart"
            >
                ❌
            </button>
        </li>
    );
};

function areItemsEqual(
    { item: prevItem }: CartLineItemProps,
    { item: nextItem }: CartLineItemProps
) {
    return Object.keys(prevItem).every((key) => {
        return (
            prevItem[key as keyof CartItemType] ===
            nextItem[key as keyof CartItemType]
        );
    });
}

const MemoizedCartLineItem = memo<typeof CartLineItem>(
    CartLineItem,
    areItemsEqual
);

export default MemoizedCartLineItem;
