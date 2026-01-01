import { forwardRef, useImperativeHandle, useState } from "react";
import ReactDOM from "react-dom";
import { Car } from "lucide-react"

interface Item {
    car?: string;
}

interface ModalHandle {
    openModal: () => void;
    closeModal: () => void;
}

const Modal = forwardRef<ModalHandle, Item>((props, ref) => {
    const [isOpen, setisOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        openModal: () => {
            setisOpen(true);
        },
        closeModal: () => {
            setisOpen(false);
        },
    }), []);

    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal( // ReactDOM accept 2 arguments :1st
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50 bg-opacity-50">
            <div className="bg-white p-2 rounded-xl shadow-lg max-w-md w-full mx-4">
                <div className="p-4 flex flex-col item-center bg-orange-400 rounded text-white">
                    <h2 className="text-xl font-bold">
                        <p>Calculate Your Mothly Payment</p></h2>
                    <p>Welcome to your personalized
                        car-buying experience.</p></div>
                <p>My Budget</p>
                <div className="p-4 flex flex-row justify-between item-center">
                    <div className="w-45 h-26 p-4 bg-gray-200 rounded-xl">
                        CREDIT AND TERM<div><p className="text-green-600">Very Good</p><p>(700-800)</p></div></div>
                    <div className="w-45 h-26 p-4 bg-gray-200 rounded-xl">Budget
                        <div><p className="text-green-600"></p><p>Set a budget{props.car}</p></div>
                    </div>
                </div>
                <div className="p-4 flex flex-row justify-between item-center">
                    <div className="w-45 h-26 p-4 bg-gray-200 rounded-xl">
                        Down Payment<div><p className="text-green-600">20%</p><p></p></div></div>
                    <div className="w-45 h-26 p-4 bg-gray-200 rounded-xl">
                        Trade in<div><p className="text-green-600"><Car /></p><p>Add a vehicle</p></div>
                    </div>

                </div>

                <button
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
                    onClick={() => setisOpen(false)}
                >
                    Close Modal
                </button>
            </div>
        </div>,
        document.getElementById("modal-root")! //: 2nd argument
    );
});

export default Modal;