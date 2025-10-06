/* eslint-disable no-unused-vars */
import React, {useContext} from "react";
import {IoMdLock} from "react-icons/io";
import {motion} from "motion/react";
import {AppContext} from "../context/AppContext";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";

const Buycredit = () => {
    const {user, backendUrl, loadCreditData, setShowLogin, token} = useContext(AppContext);
    const navigate = useNavigate();

    const initPay = async (order) => {
        const option = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: "Credit Payment",
            description: "Credit Payment",
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                console.log(response);
            },
        };

        const rzp = new window.RazorPay(option);
        rzp.open();
    };

    const payment = async (planId) => {
        try {
            if (!user) {
                setShowLogin(true);
            }

            const {data} = await axios.post(
                `${backendUrl}/auth/pay`,
                {planId},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (data.success) {
                initPay(data.order);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <motion.divs
            className="flex flex-col justify-center items-center gap-4 min-h-[90vh] px-4"
            initial={{opacity: 0.2, y: 100}}
            transition={{duration: 1}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
        >
            <div className="text-teal-600 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-teal-600 font-medium shadow-sm">
                <p>Our Plans</p>
            </div>

            <h1 className="text-black mt-2.5 text-4xl sm:text-6xl font-bold text-center">
                Choose the <span className="text-teal-600">Plan</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 mt-12 w-full max-w-6xl justify-center">
                <div className="flex flex-col items-center gap-3 bg-white p-8 rounded-2xl border border-teal-600 shadow-md hover:scale-105 transition-all duration-300 cursor-pointer w-full sm:w-1/3">
                    <IoMdLock className="text-3xl text-teal-600" />
                    <p className="text-xl font-bold text-black">Basic</p>
                    <p className="text-gray-600">Best for personal use</p>
                    <p className="text-lg font-semibold text-teal-600">$10 / 100 Credits</p>
                    <button
                        onClick={() => {
                            payment(1);
                        }}
                        className="mt-4 px-6 py-2 rounded-full bg-teal-600 text-white font-medium hover:bg-black transition-all"
                    >
                        Get Started
                    </button>
                </div>

                <div className="flex flex-col items-center gap-3 bg-black text-white p-8 rounded-2xl border border-teal-600 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer w-full sm:w-1/3">
                    <IoMdLock className="text-3xl text-teal-400" />
                    <p className="text-xl font-bold">Advance</p>
                    <p className="text-gray-300">Best for business use</p>
                    <p className="text-lg font-semibold text-teal-400">$50 / 500 Credits</p>
                    <button
                        onClick={() => {
                            payment(2);
                        }}
                        className="mt-4 px-6 py-2 rounded-full bg-teal-600 text-white font-medium hover:bg-white hover:text-black transition-all"
                    >
                        Get Started
                    </button>
                </div>

                <div className="flex flex-col items-center gap-3 bg-white p-8 rounded-2xl border border-teal-600 shadow-md hover:scale-105 transition-all duration-300 cursor-pointer w-full sm:w-1/3">
                    <IoMdLock className="text-3xl text-teal-600" />
                    <p className="text-xl font-bold text-black">Business</p>
                    <p className="text-gray-600">Best for enterprise use</p>
                    <p className="text-lg font-semibold text-teal-600">$250 / 5000 Credits</p>
                    <button
                        onClick={() => {
                            payment(3);
                        }}
                        className="mt-4 px-6 py-2 rounded-full bg-teal-600 text-white font-medium hover:bg-black transition-all"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </motion.divs>
    );
};

export default Buycredit;
