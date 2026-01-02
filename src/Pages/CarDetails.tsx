import { useMemo } from "react";
import { useParams } from "react-router-dom";
import useCarList from "@/AppComponent/useCarProducts.tsx";

import { useCarProducts } from "../AppComponent/CarContextProvider";
import { Heart } from 'lucide-react';

const CarDetails = () => {
    const { addCarProduct, addRecentViewList } = useCarProducts();



    const { id } = useParams<{ id?: string }>();
    const cars = useCarList();

    const productId = id ? Number(id) : undefined;

    const car = useMemo(() => {
        if (!Array.isArray(cars) || productId === undefined) return undefined;
        return cars.find((c: any) => c.id === productId);
    }, [cars, productId]);

    return (
        <section>
            <h1 className="p-2 font-bold">{car?.title ?? (id ?? "Car not found")}</h1>
            <div className="flex flex-row gap-4 rounded-lg p-2 justify-between">
                <div className="rounded-lg bg-gray-200 py-4 px-6 gap-6">
                    {car?.thumbnail ? (
                        <img
                            src={car.thumbnail} className="rounded-xl"
                        />

                    ) : (
                        <div style={{ width: 300, height: 300, background: "#eee" }} />
                    )}
                </div>
                <div className="p-4 w-200 bg-white rounded-xl"><p className="px-2 py-1 bg-gray-400 rounded-lg shadow-lg font-bold text-xl text-white">{car?.title}</p>
                    <div className="p-4"><p>{car?.Millage}</p>
                        <p>{car?.category}</p>
                        <p>{car?.availabilityStatus}</p>
                        <p>{car?.description}</p>
                        <p>{car?.returnPolicy}</p>
                        <p>{car?.rating}</p></div>
                    <div className="py-2">
                        <button
                            className="bg-indigo-500 text-white py-1 px-3 rounded hover:bg-green-600  cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                addCarProduct(car);
                                addRecentViewList?.(car);
                            }}
                        >
                            Add to Cart
                        </button></div></div>
            </div>
        </section>
    );
}
export default CarDetails;