import { useContext } from "react";
import { CartContext, CartContextType } from "../context/CartProvider";

const useCart = (): CartContextType => {
    return useContext(CartContext);
};

export default useCart;
