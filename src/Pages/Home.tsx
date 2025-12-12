import SearchCar from "./SearchCar";
import CarouselSpacing from "../AppComponent/Carousel";



const Home = () => {


    return (
        <div className="bg-[url(/Car2.png)]">
            <div className="flex flex-row item-center gap-100 ">
                <div className="w-100 h-150 px-10 py-10"><SearchCar /></div>
                <div className="w-130 h-150 px-10 py-20 text-gray-700">
                    <p className="text-4xl font font-shadow-lg">Lets find your Dream car</p>
                    <p className="text-2xl font font-shadow-lg">Find More Details</p>
                    <button className="w-30 bg-orange-400 rounded text-white flex justify-center hover:bg-orange-500 cursor-pointer">More</button></div>
            </div>
            <div className="flex justify-center"><CarouselSpacing /></div>

        </div>
    );
}
export default Home;