import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCarProducts } from "../AppComponent/CarContextProvider"
import { ShoppingCart, Heart, Landmark } from 'lucide-react';

const AppHeader = () => {
    const { CarProducts } = useCarProducts();

    return (
        <header className='stick-top flex flex-row justify-between w-full gap-8 py-2 bg-linear-to-r/oklab from-black to-blue-600 text-gray-300'>

            <div className='flex flex-row gap-2 justify-center items-center'>
                <Link to="/">
                    <div className='flex flex-row gap-1'><span><Car /></span><span>CarTrader</span></div></Link>
                <div className='gap-8 flex flex-row'>
                    <Link to="/newcar" className='hover:bg-gray-500 rounded px-2'>New Cars</Link>
                    <Link to="/oldInventery" className='hover:bg-gray-500 rounded px-2'>Used Cars</Link>
                    <Link to="/about" className='hover:bg-gray-500 rounded px-2'>About</Link>
                    <Link to="/user" className='hover:bg-gray-500 rounded px-2'>UserInfo</Link>
                </div></div>
            <div className='px-2 flex flex-row gap-4 item-center'>
                <div className='flex item-center py-2'><Link to='/modal'> <Landmark color='#27e44dff' /></Link>
                </div>
                <Link to='/wishlist'> <div className='flex py-2 item-center'>
                    <div className='flex justify-center py-1 bg-white h-6 w-6 rounded-full text-red-500'><Heart color='#e81458ff' size={18} /></div></div></Link>
                <div ><Link to="/cart"><p className="h-4 w-4 rounded-full bg-yellow-500 text-sm text-black flex items-center justify-center">
                    {CarProducts.length}</p><ShoppingCart />
                </Link></div>
                <div className='flex py-2 item-center'>
                    <Link to="user" className='w-auto bg-orange-400 rounded text-white flex item-center hover:bg-orange-500 rounded px-2'>LogIn</Link></div>
            </div>
        </header>
    );
}
export default AppHeader;