import { Dispatch, SetStateAction } from "react";

interface NavProps {
    viewCart: boolean;
    setViewCart: Dispatch<SetStateAction<boolean>>;
}

const Nav = ({ viewCart, setViewCart }: NavProps) => {
    const button = viewCart ? (
        <button
            onClick={() => {
                setViewCart(false);
            }}
        >
            View Products
        </button>
    ) : (
        <button
            onClick={() => {
                setViewCart(true);
            }}
        >
            View Cart
        </button>
    );

    return <nav className="nav">{button}</nav>;
};

export default Nav;
