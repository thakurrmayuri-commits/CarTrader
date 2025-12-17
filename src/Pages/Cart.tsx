import { useCarProducts } from "../AppComponent/CarContextProvider";

const Cart = () => {
    const { CarProducts, removeCarProduct } = useCarProducts();
    console.log("this is from Cart")

    const onRemoveCartProduct = (id: number) => {
        removeCarProduct(id);
    }

    if (CarProducts.length === 0) {
        return (
            <div>
                <h2>Your Cart</h2>
                <p>Your cart is empty..</p>

            </div>
        );
    }

    return (
        <><div className="gap-4">
            <h1>Your Cart </h1>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {CarProducts.map((item) => (
                    <section
                        key={item.id} className="mb-4 p-4 border border-gray-300 rounded shadow">
                        <img src={item.thumbnail} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>Price: ${item.price}</p>
                        <div className="flex justify-end"><button
                            className="mt-2 bg-red-500 rounded py-1 px-3 text-white cursor-pointer hover:bg-red-600" onClick={() => onRemoveCartProduct(item.id)}>Remove</button></div>
                    </section>
                ))}
            </div>
        </div>
        </>
    )
}
export default Cart;