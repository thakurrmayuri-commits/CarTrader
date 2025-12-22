import { createContext, useContext, useState } from "react";

interface providerProps {
    CarProducts: any[];
    car: any[];
    carRecent: any[];
    addCarProduct: (product: any) => void;
    removeCarProduct: (id: number) => void;
    addWishList: (car: any) => void;
    addRecentViewList?: (carRecent: any) => void | undefined;
}

const ProductContext = createContext<providerProps>({
    CarProducts: [],
    car: [],
    carRecent: [],
    addCarProduct: () => { },
    removeCarProduct: () => { },
    addWishList: () => { },
    addRecentViewList: () => { },
});

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {


    const [CarProducts, setProducts] = useState<any[]>([]);
    const [car, setCarWishlist] = useState<any[]>([]);
    const [carRecent, setCarRecentlist] = useState<any[]>([]);

    const addCarProduct = (product: any) => {
        setProducts((prev) => [...prev, product])

    };

    const removeCarProduct = (id: number) => {
        const _CarProducts = CarProducts.filter((product) => product.id !== id);
        setProducts(_CarProducts);
    }
    const addWishList = (car: any) => {
        setCarWishlist((prev) => [...prev, car])

    };
    const addRecentViewList = (carRecent: any) => {
        setCarRecentlist((prev) => [...prev, carRecent])

    };

    return (
        <ProductContext.Provider value={{ CarProducts, car, carRecent, addRecentViewList, addCarProduct, removeCarProduct, addWishList }}>
            {children}
        </ProductContext.Provider>
    );


}

export const useCarProducts = () => {
    return useContext(ProductContext);
}