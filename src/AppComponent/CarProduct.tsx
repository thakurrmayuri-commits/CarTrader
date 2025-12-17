import { useNavigate } from "react-router-dom";
import { useCarProducts } from "../AppComponent/CarContextProvider";
import { Heart } from 'lucide-react';

const CarProduct = ({ car }: { car: any }) => {
    const { addCarProduct, addWishList } = useCarProducts();
    const navigate = useNavigate();

    const onProductClickHandler = () => {
        navigate(`/car/${car.id}`);
    };
    return (
        <section
            onClick={onProductClickHandler}
            className="border border-gray-300 rounded-lg p-4 text-center shadow-sm bg-white transition-transform duration-200 hover:scale-105 cursor-pointer"
        >
            <img
                src={car.thumbnail}
                alt={car.title}
                className="w-full h-30 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-2">{car.title}</h3>
            <p className="text-gray-600 mb-2">${car.price}</p>
            <div className="flex justify-end gap-2">
                <div
                    onClick={() => {
                        addWishList(car);
                        alert("Added to Wishlist")
                    }}><Heart className='transition delay-150 duration-300 ease-in-out hover:rounded-full hover:scale-110 hover:cursor-pointer hover:bg-indigo-300' /></div>

                <button
                    className="bg-indigo-500 text-white py-1 px-3 rounded hover:bg-green-600  cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        addCarProduct(car);
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </section>
    );
};

export default CarProduct;