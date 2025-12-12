

import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function SearchCar() {
    return (
        <Card className="w-120 h-80 rounded-4xl border-0 shadow-lg bg-linear-to-r/oklab from-black to-indigo-900">
            <CardHeader>
                <CardTitle className="text-xl text-white px-2">Search Your New Car</CardTitle>
                <CardDescription>
                    Find Car of your Dreams
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-row gap-6">
                            <div className="gap-2 w-1/2 ">
                                <Label htmlFor="brand" className="text-white">Brand</Label>
                                <Input
                                    id="brand"
                                    type="brand"
                                    placeholder="BMW"
                                    required
                                />
                            </div>
                            <div className="w-1/2 gap-2">
                                <Label htmlFor="model" className="text-white px-2">Model</Label>
                                <Input
                                    id="model"
                                    type="model"
                                    placeholder="328i"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-row gap-6">
                            <div className=" gap-2">
                                <Label htmlFor="zip" className="text-white px-2">Zip</Label>
                                <Input
                                    id="zip"
                                    type="zip"
                                    placeholder="00123"
                                    required
                                />
                            </div>
                            <div className="py-4">
                                <CardAction>
                                    <Button variant="link" className="w-30 bg-orange-400 rounded-lg text-white flex item-center">Search</Button>
                                </CardAction>

                            </div>
                        </div></div>
                </form>
            </CardContent>
            <CardFooter className="flex-col font-italic text-gray-400">
                @2026 CarTrader.Inc
            </CardFooter>
        </Card>
    )
}
export default SearchCar;
