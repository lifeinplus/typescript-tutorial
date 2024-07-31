import { Dispatch, SetStateAction } from "react";
import useCart from "../hooks/useCart";
import Nav from "./Nav";

interface HeaderProps {
    viewCart: boolean;
    setViewCart: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ viewCart, setViewCart }: HeaderProps) => {
    const { totalItems, totalPrice } = useCart();

    return (
        <header className="header">
            <div className="header__title-bar">
                <h1>Acme Co.</h1>
                <div className="header__price-box">
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: {totalPrice}</p>
                </div>
            </div>
            <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </header>
    );
};

export default Header;
