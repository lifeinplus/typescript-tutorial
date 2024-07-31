import {
    createContext,
    PropsWithChildren,
    ReactElement,
    useEffect,
    useState,
} from "react";

export type ProductType = {
    sku: string;
    name: string;
    price: number;
};

// npx json-server -w data/products.json -p 3500
const initState: ProductType[] = [];

// const initState: Product[] = [
//     { sku: "item0001", name: "Widget", price: 9.99 },
//     { sku: "item0002", name: "Premium Widget", price: 19.99 },
//     { sku: "item0003", name: "Delux Widget", price: 29.99 },
// ];

export type ProductsContextType = { products: ProductType[] };

export const ProductsContext = createContext<ProductsContextType>({
    products: [],
});

const ProductsProvider = ({ children }: PropsWithChildren): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState);

    useEffect(() => {
        const fetchProducts = async (): Promise<ProductType[]> => {
            const data = await fetch("http://localhost:3500/products")
                .then((result) => result.json())
                .catch((error) => {
                    if (error instanceof Error) {
                        console.log(error.message);
                    }
                });

            return data;
        };

        fetchProducts().then((products) => setProducts(products));
    }, []);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;
