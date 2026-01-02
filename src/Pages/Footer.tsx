import { Car } from 'lucide-react';


const Footer = () => {


    return (
        <footer className='flex flex-row w-full h-auto gap-8 py-2 bg-gray-300 to-blue-600 text-gray-800'>
            <div className='flex flex-row gap-2'><span><Car /></span><span>CarTrader</span>
                Contact Us at 123456754</div>

        </footer>
    );
}
export default Footer;