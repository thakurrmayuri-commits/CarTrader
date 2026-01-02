import SearchCar from "./SearchCar";
import CarouselSpacing from "../AppComponent/CategoryCarousel";
import CarsCarousel from "../AppComponent/CarListCarousel";
import RecentViewCarousel from "../AppComponent/RecentlyView"



const Home = () => {


    return (
        <div className="bg-orange-100">
            <div className="flex flex-row item-center gap-100 bg-[url(/Car2.png)]">
                <div className="w-100 h-150 px-10 py-10"><SearchCar /></div>
                <div className="w-130 h-150 px-10 py-20 text-gray-700">
                    <p className="text-4xl font font-shadow-lg">Lets find your Dream car</p>
                    <p className="text-2xl font font-shadow-lg">Find More Details</p>
                    <button className="w-30 bg-orange-400 rounded text-white flex justify-center hover:bg-orange-500 cursor-pointer">More</button></div>
            </div>
            <div className="py-2">
                <div className="flex flex-col justify-center font bold-xl gap-6 px-6 font-bold"><p>Recently Viewed</p><RecentViewCarousel /></div>
                <div className="flex flex-col justify-center font bold-xl gap-6 px-6 font-bold"><p>Popular</p><CarsCarousel /></div>
                <div className="flex flex-col justify-center font bold-xl gap-6 py-2 font-bold"><p>Choose From More Categories</p><CarouselSpacing /></div>
            </div>


        </div>
    );
}
export default Home;