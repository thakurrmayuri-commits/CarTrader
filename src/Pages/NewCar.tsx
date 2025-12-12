import { Cars } from '../utils/Car-list';

const CarProduct = () => {
    //const { cars } = prop
    return (
        <>
            <div>
                <h1>New Cars</h1>
                <div className='w-100 flex flex-col gap-4'>
                    {Cars.map((product: any) => (
                        <p key={product.id} className='bg-blue-300 font-bold'>{product.title}<p>${product.price}</p>
                            <img src={product.thumbnail}
                                alt={product.title}
                            /></p>
                    ))}</div>
            </div>
        </>
    );
}
export default CarProduct;