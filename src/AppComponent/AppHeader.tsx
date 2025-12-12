import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppHeader = () => {


    return (
        <header className='stick-top flex flex-row justify-between w-full gap-8 py-2 bg-linear-to-r/oklab from-black to-blue-600 text-gray-300'>

            <div className='flex flex-row gap-2'>
                <Link to="/">
                    <div className='flex flex-row gap-1'><span><Car /></span><span>CarTrader</span></div></Link>
                <div className='gap-8 flex flex-row'>
                    <Link to="/newcar" className='hover:bg-gray-500 rounded px-2'>New Cars</Link>
                    <Link to="/oldInventery" className='hover:bg-gray-500 rounded px-2'>Old Cars</Link>
                    <Link to="/about" className='hover:bg-gray-500 rounded px-2'>About</Link>
                    <Link to="/user" className='hover:bg-gray-500 rounded px-2'>UserInfo</Link>
                </div></div>
            <div className='px-2'><Link to="user" className='w-auto bg-orange-400 rounded text-white flex item-center hover:bg-orange-500 rounded px-2'>LogIn</Link></div>
        </header>
    );
}
export default AppHeader;