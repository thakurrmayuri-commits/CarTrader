
import { Cars } from "@/utils/Car-list";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function CarsCarousel() {
    return (
        <Carousel className="w-auto">
            <CarouselContent>
                {Cars.map((label) => (
                    <CarouselItem key={label.id} className="pl-2 md:basis-1/2 lg:basis-1/4">
                        <div className="p-1">
                            <Card className="bg-orange-50 hover:scale-105 transition-transform duration-300">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <div>
                                        <p className="flex justify-center text-2xl font bold">{label.title}</p>
                                        <img className="sepia-50" src={label.thumbnail}
                                            alt={label.title}
                                        /></div>
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
export default CarsCarousel;