import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppHeader = () => {


    return (
        <header className='stick-top flex flex-row w-full gap-8 py-2 bg-linear-to-r/oklab from-black to-blue-600 text-gray-300'>
            <div className='flex flex-row gap-2'><span><Car /></span><span>CarTrader</span></div>
            <div className='gap-8 flex flex-row'>
                <Link to="newInventery" className='hover:bg-gray-500 rounded px-2'>New Cars</Link>
                <Link to="oldInventery" className='hover:bg-gray-500 rounded px-2'>Old Cars</Link>
                <Link to="about" className='hover:bg-gray-500 rounded px-2'>About</Link>
                <Link to="user" className='hover:bg-gray-500 rounded px-2'>User</Link>
            </div>
        </header>
    );
}
export default AppHeader;