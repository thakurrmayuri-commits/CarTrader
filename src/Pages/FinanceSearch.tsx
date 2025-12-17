

import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function SearchFinance() {
    return (
        <div className="p-4">
            <Card className="w-full h-50 rounded border-0 shadow-lg bg-indigo-900 flex flex-row gap-6 justify-between">
                <div>
                    <CardHeader>
                        <CardTitle className="text-2xl text-white px-2 font font-bold">Shop By Budget</CardTitle>
                        <CardDescription>
                            Find Car of your Dreams
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-row gap-6">
                                <div className="flex flex-row gap-6">
                                    <div className="gap-2 w-40 ">
                                        <Label htmlFor="brand" className="text-white">Brand</Label>
                                        <Input
                                            id="brand"
                                            type="brand"
                                            placeholder="BMW"
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
                    </CardContent></div>
                <div className=" flex justify-center">
                    <img src="/savings.svg" alt="Save More" className="w-1/2 h-auto" /></div>
            </Card>

        </div>
    )
}
export default SearchFinance;
