import { useContext } from "react";
import {
    ProductsContext,
    ProductsContextType,
} from "../context/ProductsProvider";

const useProducts = (): ProductsContextType => {
    return useContext(ProductsContext);
};

export default useProducts;
