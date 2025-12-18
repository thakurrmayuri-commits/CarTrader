import MenubarDemo from "../AppComponent/MenuBar"


const About = () => {


    return (
        <><MenubarDemo />
            <div className="w-full h-100 gap-4 bg-[url(/saving.jpg)]">
                <div className="px-20"><h1 className="text-4xl text-white font-bold py-8"><p>CarTrader</p><p>What We Offer</p>
                </h1></div>
                <div className=" w-150 px-20 text-lg text-white py-10">Experience automotive’s most complete suite of solutions, backed by the industry experts and powerful data to streamline and future-proof your business.</div>


            </div></>
    )
}
export default About;