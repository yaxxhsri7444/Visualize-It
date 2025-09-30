/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useState} from "react";
import {FaRegUser} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {FaLock} from "react-icons/fa6";
import {RxCross1} from "react-icons/rx";
import {motion} from "motion/react";
import axios from "axios";
import {toast} from "react-toastify";
import {AppContext} from "../context/appContext";

const Login = () => {
    const [isLogin, setIsLogin] = useState("Login");
    const {setShowLogin, backendUrl, setToken, setUser} = useContext(AppContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            if (isLogin === "Login") {
                const {data} = await axios.post(`${backendUrl}/auth/login`, {email, password});

                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.getItem("token", data.token);
                    setShowLogin(true)
                } else {
                    toast.error(data.message);
                }
                
            } else {
                const {data} = await axios.post(`${backendUrl}/auth/register`, {name, email, password});

                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.getItem("token", data.token);
                    setShowLogin(true);
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred");
        }
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div className="absolute inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
            <motion.form
                onSubmit={onSubmitHandler}
                className="w-full max-w-sm"
                initial={{opacity: 0.2, y: 50}}
                transition={{duration: 0.3}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
            >
                <div className="bg-white p-8 sm:p-10 rounded-2xl flex flex-col gap-5 shadow-2xl border border-gray-200 relative">
                    <div
                        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                        onClick={() => setShowLogin(false)}
                    >
                        <RxCross1 size={20} />
                    </div>
                    <h1 className="text-3xl font-bold text-center text-teal-500">{isLogin}</h1>
                    <p className="text-center text-gray-500 text-sm">
                        {isLogin === "Login"
                            ? "Welcome back! Please sign in to continue."
                            : "Create your account to get started."}
                    </p>
                    {isLogin !== "Login" && (
                        <div className="flex items-center gap-3 border border-teal-300 p-2 rounded-md focus-within:ring-2 focus-within:ring-teal-500 transition">
                            <FaRegUser className="text-teal-500 text-lg" />
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                placeholder="Full Name"
                                className="flex-1 outline-none bg-transparent"
                            />
                        </div>
                    )}
                    <div className="flex items-center gap-3 border border-teal-300 p-2 rounded-md focus-within:ring-2 focus-within:ring-teal-500 transition">
                        <MdEmail className="text-teal-500 text-lg" />
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Email ID"
                            className="flex-1 outline-none bg-transparent"
                        />
                    </div>

                    <div className="flex items-center gap-3 border border-teal-300 p-2 rounded-md focus-within:ring-2 focus-within:ring-teal-500 transition">
                        <FaLock className="text-teal-500 text-lg" />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="Password"
                            className="flex-1 outline-none bg-transparent"
                        />
                    </div>

                    {isLogin === "Login" && (
                        <p className="text-sm text-teal-600 cursor-pointer hover:underline self-end">
                            Forgot Password?
                        </p>
                    )}

                    <button
                        type="submit"
                        className="bg-teal-600 text-white p-2 rounded-md hover:bg-black transition-all duration-300 font-medium"
                    >
                        {isLogin === "Login" ? "Login" : "Sign Up"}
                    </button>

                    {isLogin === "Login" ? (
                        <p className="text-center text-sm text-gray-600">
                            Don’t have an account?{" "}
                            <span
                                className="text-teal-600 cursor-pointer hover:underline"
                                onClick={() => setIsLogin("Sign Up")}
                            >
                                Sign Up
                            </span>
                        </p>
                    ) : (
                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{" "}
                            <span
                                className="text-teal-600 cursor-pointer hover:underline"
                                onClick={() => setIsLogin("Login")}
                            >
                                Login
                            </span>
                        </p>
                    )}
                </div>
            </motion.form>
        </div>
    );
};

export default Login;
