import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCarProducts } from "../AppComponent/CarContextProvider"
import { ShoppingCart, Heart, Landmark } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import UserInfo from '@/Pages/UserInfo';

const AppHeader = () => {
    const { CarProducts } = useCarProducts();

    return (
        <header className='bg-white shadow-md px-4 flex justify-between items-center bg-linear-to-r/oklab from-black to-blue-600 text-gray-300'>
            <Link to="/">
                <div className='flex flex-row gap-1'><span><Car /></span><span>CarTrader</span></div></Link>
            <NavigationMenu className='flex item-center gap-4'>
                <NavigationMenuList>
                    <NavigationMenuItem className='flex flex-row gap-4'>
                        <NavigationMenuLink asChild>
                            <Link to="/newcar">New Cars</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link to="/oldInventery">Used Cars</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link to="/about">About</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link to="/modal"><Landmark color='#27e44dff' /></Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link to="/profile">Profile</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link to="/cart"><p className="h-4 w-4 rounded-full bg-yellow-500 text-sm text-black flex items-center justify-center">
                                {CarProducts.length}</p>
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link to='/wishlist'> <div className='flex py-2 item-center'>
                                <div className='flex justify-center py-1 bg-white h-6 w-6 rounded-full text-red-500'><Heart color='#e81458ff' size={18} /></div></div></Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <UserInfo />
                </NavigationMenuList>
            </NavigationMenu>

        </header>
    );
}
export default AppHeader;