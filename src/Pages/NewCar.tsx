import React, { useEffect, useCallback } from "react";
import useCarList from '../AppComponent/useCarProducts';
import CarProduct from '../AppComponent/CarProduct';
import SearchFinance from "./FinanceSearch";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



const NewCar = () => {

    const Cars = useCarList();
    const [filteredProducts, setFilteredProducts] = React.useState<any[]>([]);
    const [search, setSearch] = React.useState("");

    const filterProducts = useCallback(() => {
        const filtered = Cars.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [search, Cars]);

    useEffect(() => {
        filterProducts();
    }, [filterProducts]);

    return (
        <>
            <div className="p-4 h-50 gap-10 bg-[url(/Car2.png)] flex flex-row">
                <div>
                    <h1 className="text-2xl font-bold text-white">New Cars for sale</h1>
                    <div className="flex flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="p-2 border border-gray-300 rounded w-100 bg-white"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <button className="bg-orange-500 text-white px-3 rounded hover:bg-orange-600">Search</button>
                    </div></div>
            </div>
            <div className="p-2 gap-4"><SearchFinance /></div>
            <div className="flex flex-row gap-8 justify-between">
                <div className="w-200 px-16 py-8"><h1 className="text-3xl py-4">Buying a New Car</h1>
                    Buying a new car ensures you'll get the most possible life out of the car. You are the first owner, after all! With almost no miles, the most up-to-date safety features, and all the bells and whistles of the latest technology, the value of a new car can be enticing for any buyer. Although new car prices may exceed those of a used car, you won’t have to worry about maintenance for a while as additional warranties are typically included in the new car price. Plus, you might want to trade-in for another car by the time your warranty expires. Not sure where to start? Check out our list of the best new cars this year.
                </div>
                <div className="flex justify-center"><img src="/Buy_installments.svg" alt="Finance" className="w-1/3 h-auto" /></div>
            </div>
            <Carousel className="w-auto">
                <CarouselContent>
                    {filteredProducts.map((car) => (

                        <CarouselItem key={car.id} className="pl-2 md:basis-1/2 lg:basis-1/4">
                            <CarProduct key={car.id} car={car} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
}
export default NewCar;