
import { useCarProducts } from '../AppComponent/CarContextProvider'
//import useCarProducts from '../AppComponent/useCarProducts';




const CarProduct = () => {
    const { car } = useCarProducts();
    //const Cars = useCarProducts();
    if (car.length === 0) {
        return "No items in WishList";
    }

    return (
        <>
            <div>
                <h1>New Cars</h1>
                <div className='w-100 px-10 flex flex-col gap-4'>
                    {car.map((product) => (
                        <div key={product.id} className='bg-gray-200 rounded'>
                            <img src={product.thumbnail}
                                alt={product.title}
                                className='w-full h-40 px-4 object-cover'
                            /><div className='flex flex-col'>
                                <p className='truncate font-bold'>{product.title}</p>
                                <p>{product.category}</p>
                                <p>{product.Millage} mi</p>
                                <p>${product.price}</p>
                            </div>
                        </div>
                    ))}</div>
            </div>
        </>
    );
}
export default CarProduct;