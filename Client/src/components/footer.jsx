import React from "react";
import {RiInstagramFill} from "react-icons/ri";
import {FaFacebook} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center py-6 mt-20 gap-12 flex flex-col md:flex-row justify-center items-center border-t border-zinc-300">
            <div>
                <h1
                    className="text-2xl font-bold text-black cursor-pointer first-letter:capitalize hover:text-teal-600"
                    onClick={() => navigate("/")}
                >
                    Viaualize It
                </h1>
            </div>
            <span className="hidden md:block font-extrabold text-teal-600">|</span>
            <div>
                <p className="text-lg text-zinc-600 ">copyright @sakshamsrivastava | All right reservered</p>
            </div>
            <span className="hidden md:block font-extrabold text-teal-600">|</span>
            <div className="flex gap-4 flex-wrap justify-items-end">
                <FaFacebook className="bg-zinc-400 rounded-lg border-0 w-10 h-10 py-2 hover:scale-105 transition-all duration-300 hover:text-teal-600" />
                <RiInstagramFill className="bg-zinc-400 rounded-lg border-0 w-10 h-10 py-2 hover:scale-105 transition-all duration-300 hover:text-teal-600" />
                <FaSquareXTwitter className="bg-zinc-400 rounded-lg border-0 w-10 h-10 py-2 hover:scale-105 transition-all duration-300 hover:text-teal-600" />
            </div>
        </div>
    );
};

export default Footer;
