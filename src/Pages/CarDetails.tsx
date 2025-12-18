import { useMemo } from "react";
import { useParams } from "react-router-dom";
import useCarList from "@/AppComponent/useCarProducts.tsx";

const CarDetails = () => {
    const { id } = useParams<{ id?: string }>();
    const cars = useCarList();

    const productId = id ? Number(id) : undefined;

    const car = useMemo(() => {
        if (!Array.isArray(cars) || productId === undefined) return undefined;
        return cars.find((c: any) => c.id === productId);
    }, [cars, productId]);

    return (
        <section>
            <h1>{car?.title ?? (id ?? "Car not found")}</h1>
            <div className="w-80 rounded bg-gray-200 py-4 px-6 gap-6">
                {car?.thumbnail ? (
                    <img
                        src={car.thumbnail}
                        style={{
                            width: "250px",
                            height: "250px"
                        }}
                    />

                ) : (
                    <div style={{ width: 300, height: 300, background: "#eee" }} />
                )}<div><p>{car?.title}</p>
                    <p>{car?.Millage}</p>
                    <p>{car?.category}</p></div>
            </div>
        </section>
    );
}
export default CarDetails;