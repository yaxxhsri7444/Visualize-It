import React, {useContext} from "react";
import {FaUserCircle} from "react-icons/fa";
import {MdStars} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {AppContext} from "../context/AppContext";

const Navbar = () => {
    const {user, setShowLogin, logout, credit} = useContext(AppContext);

    const navigate = useNavigate();

    return (
        <nav className="flex justify-between items-center py-4 max-w-7xl mx-auto w-full px-4">
            <h1 className="text-2xl font-bold text-teal-600 cursor-pointer" onClick={() => navigate("/")}>
                Visualize It
            </h1>

            <div>
                {user ? (
                    <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-black hover:bg-teal-600 transition duration-300">
                            <MdStars className="text-2xl text-teal-600" />
                            <p onClick={() => navigate("/buy")} className="text-white text-sm sm:text-base">Credits left: {credit}</p>
                        </button>
                        <p className="text-black max-sm:hidden text-lg cursor-pointer">Hi, {user.name}</p>
                        <div className="relative inline-block group">
                            <FaUserCircle className="text-3xl text-teal-600 cursor-pointer" />
                            <div className="absolute hidden group-hover:block top-10 right-0 z-10">
                                <ul className="m-0 p-2 list-none bg-black text-white rounded-lg shadow-lg border border-teal-600 text-sm">
                                    <li onClick={logout} className="py-1 px-4 cursor-pointer hover:text-teal-400">Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-6">
                        <p
                            onClick={() => navigate("/buy")}
                            className="text-black text-lg cursor-pointer hover:text-teal-600"
                        >
                            Pricing
                        </p>
                        <button
                            className="bg-teal-600 text-white px-6 py-2 rounded-full cursor-pointer text-sm hover:bg-black transition duration-300"
                            onClick={() => setShowLogin(true)}
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
