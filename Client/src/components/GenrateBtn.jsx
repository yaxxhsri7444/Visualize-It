/* eslint-disable no-unused-vars */
import React, {useState} from "react";

import {BsStars} from "react-icons/bs";
import {AppContext} from "../context/AppContext";
import {useNavigate} from "react-router-dom";
import {motion} from "motion/react";
import AppContextProvider from "../context/AppContextProvider";

const GenrateBtn = () => {
    const {user, setShowLogin} = useState(AppContext);
    const navigate = useNavigate();

    const onClickHandler = () => {
        if (user) {
            navigate("/result");
        } else {
            setShowLogin(true);
        }
    };
    return (
        <motion.div
            className="flex flex-col justify-center items-center my-20 py-12 md:px-28"
            initial={{opacity: 0.2, y: 100}}
            transition={{duration: 1}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
        >
            <h1 className="text-4xl sm:text-5xl text-teal-500 text-shadow-teal-500 font-semibold mb-2">
                See The Magic. Try Now
            </h1>

            <motion.button
                onClick={onClickHandler}
                initial={{opacity: 0, y: 20}}
                transition={{default: {duration: 0.8}, delay: 0.8, duration: 0.8}}
                animate={{opacity: 1, y: 0}}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:bg-teal-600 "
            >
                Generate Image <BsStars className="text-amber-500" />
            </motion.button>
        </motion.div>
    );
};

export default GenrateBtn;
