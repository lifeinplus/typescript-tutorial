import { Dispatch, memo, ReactElement } from "react";
import { ReducerAction, ReducerActionTypes } from "../context/CartProvider";
import { ProductType } from "../context/ProductsProvider";

interface ProductProps {
    product: ProductType;
    dispatch: Dispatch<ReducerAction>;
    REDUCER_ACTIONS: ReducerActionTypes;
    inCart: boolean;
}

const Product = ({
    product,
    dispatch,
    REDUCER_ACTIONS,
    inCart,
}: ProductProps): ReactElement => {
    const img = new URL(`../images/${product.sku}.jpg`, import.meta.url).href;

    const onAddToCart = () => {
        dispatch({
            type: REDUCER_ACTIONS.ADD,
            payload: { ...product, qty: 1 },
        });
    };

    const itemInCart = inCart ? " → Item in Cart: ✅ " : null;

    return (
        <article className="product">
            <h3>{product.name}</h3>
            <img src={img} alt={product.name} className="product__img" />
            <p>
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(product.price)}
                {itemInCart}
            </p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </article>
    );
};

function arePropsEqual(
    { product: prevProduct, inCart: prevInCart }: ProductProps,
    { product: nextProduct, inCart: nextInCart }: ProductProps
) {
    return (
        prevInCart === nextInCart &&
        Object.keys(prevProduct).every((key) => {
            return (
                prevProduct[key as keyof ProductType] ===
                nextProduct[key as keyof ProductType]
            );
        })
    );
}

const MemoizedProduct = memo<typeof Product>(Product, arePropsEqual);

export default MemoizedProduct;
