import React, { useEffect, useCallback } from "react";
import useCarList from '../AppComponent/useCarProducts';
import CarProduct from '../AppComponent/CarProduct';


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"





const OldCar = () => {

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
            <div className="p-4 h-50 gap-10 bg-[url(/CARback.jpg)] flex flex-row">
                <div>
                    <h1 className="text-2xl font-bold text-white">Used Cars for sale</h1>
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
            </div><div>
                <Carousel className="w-auto">
                    <CarouselContent className="py-2">
                        {filteredProducts.map((car) => (
                            <CarouselItem key={car.id} className="pl-2 md:basis-1/2 lg:basis-1/4">
                                <CarProduct key={car.id} car={car} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel></div>
            <div className="flex flex-row gap-4 justify-between">
                <div className="w-150 px-16"><h1 className="text-3xl py-2">Buying a Used Car</h1>
                    Sure, used cars may not come with that nice “new-car smell,” but a used car value is almost always the better financial decision. On average, drivers save about $200 monthly on used car payments versus new car payments. Not to mention how quickly new cars depreciate once they leave the lot! That fancy new model will drop 35% of its value in the first three years of its life, while you can still find a used car with tip-top technology, high-end packages, and aftermarket additions you don’t have to buy yourself. Whether you’re buying for yourself or a new driver in the family, a used car can be a great deal when shopping at dealerships or private sellers.
                </div>
                <div className="flex justify-center"><img src="/Buy_installments.svg" alt="Finance" className="w-1/3 h-auto" /></div>
            </div>
        </>
    );
}
export default OldCar;