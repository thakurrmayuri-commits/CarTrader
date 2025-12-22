import MenubarDemo from "../AppComponent/MenuBar"
import RecentViewCarousel from "../AppComponent/RecentlyView"

const About = () => {


    return (
        <><MenubarDemo />
            <div className="w-full h-100 gap-4 bg-[url(/saving.jpg)]">
                <div className="px-20"><h1 className="text-4xl text-white font-bold py-8"><p>CarTrader</p><p>What We Offer</p>
                </h1></div>
                <div className=" w-150 px-20 text-lg text-white py-10">Experience automotive’s most complete suite of solutions, backed by the industry experts and powerful data to streamline and future-proof your business.</div>


            </div>
            <div className="p-10 gap-4 flex flex-row justify-center">
                <div className="w-100 h-150 bg-[url(/background.png)] rounded-lg"><p className="p-10 text-3xl text-white font-bold">Easy Finance Options</p>
                    <p className="px-2 bg-orange-400"><img src="/savings.svg" className="w-90 h-90" alt="finance" /></p>
                </div>
                <div className="w-100 h-150 bg-[url(/background.png)] rounded-lg"><p className="p-10 text-3xl text-white font-bold">Huge Inventory: New Cars to Used Cars</p>
                    <p className="bg-orange-400"><img src="/car-bulk.jpg" className="py-2 w-full h-90" alt="inventory" /></p>
                </div>
                <div className="w-100 h-150 bg-[url(/background.png)] rounded-lg"><p className="p-10 text-3xl text-white font-bold">Promising Exchange Options</p>
                    <p className="bg-orange-400"><img src="/Car_back.png" className="py-2 w-full h-90" alt="inventory" /></p>
                </div>
            </div>
            <div className="flex flex-col justify-center font bold-xl gap-6 px-6"><p className="text-3xl font-bold">Recently Viewed</p><RecentViewCarousel /></div></>
    )
}
export default About;