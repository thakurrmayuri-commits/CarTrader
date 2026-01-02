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
            <div className="w-85 bg-white p-2 rounded-xl shadow-lg max-w-md w-full mx-4">
                <div className="p-4 flex flex-col item-center bg-orange-400 rounded-xl text-white shadow-lg">
                    <h2 className="text-xl font-bold">
                        <p>Calculate Your Mothly Payment</p></h2>
                    <p>Welcome to your personalized
                        car-buying experience.</p></div>
                <p className="p-2 font-bold text-orange-400">My Budget</p>
                <div className="p-4 flex flex-row justify-between item-center">
                    <div className="w-45 h-26 p-4 bg-gray-200 rounded-xl shadow-lg">
                        CREDIT AND TERM<div><p className="text-green-600">Very Good</p><p>(700-800)</p></div></div>
                    <div className="w-45 h-26 p-4 bg-gray-200 rounded-xl shadow-lg">Budget
                        <div><p className="text-green-600"></p><p>Set a budget{props.car}</p></div>
                    </div>
                </div>
                <div className="p-4 flex flex-row justify-between item-center">
                    <div className="w-45 h-26 p-4 bg-gray-200 rounded-xl shadow-lg">
                        Down Payment<div><p className="text-green-600">20%</p><p></p></div></div>
                    <div className="w-45 h-26 p-4 bg-gray-200 rounded-xl shadow-lg">
                        Trade in<div><p className="text-green-600"><Car /></p><p>Add a vehicle</p></div>
                    </div>

                </div>

                <button
                    className="mt-4 px-4 py-1 bg-red-500 text-white rounded-lg shadow-lg"
                    onClick={() => setisOpen(false)}
                >
                    Close
                </button>
            </div>
        </div>,
        document.getElementById("modal-root")! //: 2nd argument
    );
});

export default Modal;