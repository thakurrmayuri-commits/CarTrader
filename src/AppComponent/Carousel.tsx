
import { CarCategory } from "@/utils/CarCategory-list";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function CarouselSpacing() {
    return (
        <Carousel className="w-auto max-w-3xl">
            <CarouselContent className="-ml-2">
                {CarCategory.map((label) => (
                    <CarouselItem key={label.id} className="pl-2 md:basis-30 lg:basis-1/2">
                        <div className="p-1">
                            <Card className="bg-orange-100">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <div className="flex flex-col justify-center item-center gap-2">
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
export default CarouselSpacing;