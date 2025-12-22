
import { useCarProducts } from "../AppComponent/CarContextProvider"
import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Heart } from 'lucide-react';

function RecentViewCarousel() {
    const { addWishList, carRecent } = useCarProducts();
    // const carRecent = useCarList();


    return (
        <Carousel className="w-auto">
            <CarouselContent>
                {carRecent.map((label) => (
                    <CarouselItem key={label.id} className="pl-2 md:basis-1/2 lg:basis-1/4">
                        <div className="p-1">
                            <Card className="bg-orange-50 hover:scale-105 transition-transform duration-300">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <div>
                                        <p className="flex justify-center text-2xl font bold">{label.title}</p>
                                        <img className="sepia-50" src={label.thumbnail}
                                            alt={label.title}
                                        /><div className="flex justify-end p-2 cursor-pointer w-8 h-8 item-center rounded-full hover:bg-indigo-300"
                                            onClick={() => addWishList(label)}><Heart size={16} /></div></div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
export default RecentViewCarousel;