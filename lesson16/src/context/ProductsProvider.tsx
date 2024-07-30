import {
    createContext,
    PropsWithChildren,
    ReactElement,
    useEffect,
    useState,
} from "react";

type Product = {
    sku: string;
    name: string;
    price: number;
};

const initState: Product[] = [];

// const initState: Product[] = [
//     { sku: "item0001", name: "Widget", price: 9.99 },
//     { sku: "item0002", name: "Premium Widget", price: 19.99 },
//     { sku: "item0003", name: "Delux Widget", price: 29.99 },
// ];

type ProductsContextType = { products: Product[] };

const ProductsContext = createContext<ProductsContextType>({ products: [] });

const ProductsProvider = ({ children }: PropsWithChildren): ReactElement => {
    const [products, setProducts] = useState<Product[]>(initState);

    useEffect(() => {
        const fetchProducts = async (): Promise<Product[]> => {
            const data = await fetch("https://localhost:3500/products")
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
