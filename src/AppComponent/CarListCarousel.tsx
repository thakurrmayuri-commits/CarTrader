
import useCarList from "../AppComponent/useCarProducts";
import CarProduct from "../AppComponent/CarProduct"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"


function CarsCarousel() {
    const Cars = useCarList();



    return (
        <Carousel className="w-auto">
            <CarouselContent>
                {Cars.map((car) => (
                    <CarouselItem key={car.id} className="pl-2 md:basis-1/2 lg:basis-1/4 sepia-50">
                        <CarProduct key={car.id} car={car} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
export default CarsCarousel;