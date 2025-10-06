/* eslint-disable no-unused-vars */
import React, {useContext} from "react";
import {GiFlatStar} from "react-icons/gi";
import {BsStars} from "react-icons/bs";
import {motion} from "motion/react";
import {useNavigate} from "react-router-dom";
import { AppContext } from "../context/AppContext";
const Header = () => {
    const {user, setShowLogin} = useContext(AppContext);
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
            className="flex flex-col justify-center items-center mt-15 mb-8  "
            initial={{opacity: 0.2, y: 100}}
            transition={{duration: 1, ease: "easeInOut"}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
        >
            <motion.div
                className="text-teal-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-teal-500 "
                initial={{opacity: 0, y: -20}}
                transition={{delay: 0.5, duration: 0.75}}
                animate={{opacity: 1, y: 0}}
            >
                <p>Best text to img generator</p>
                <GiFlatStar className="text-amber-500 text-2xl" />
            </motion.div>

            <motion.p
                className="text-teal-500 text-center text-3xl max-w-[300px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 font-mono font-bold"
                initial={{opacity: 0}}
                transition={{delay: 0.4, duration: 2}}
                animate={{opacity: 1}}
            >
                Create stunning
                <span className="text-black"> Images </span>
                from text in seconds.
            </motion.p>

            <motion.p
                className="text-center max-w-xl mx-auto mt-5"
                initial={{opacity: 0, y: 20}}
                transition={{delay: 0.6, duration: 0.8}}
                animate={{opacity: 1, y: 0}}
            >
                Unleash your creativity with Ai. Turn your imagination into visual art in second - just type, and watch
                the magic happen.
            </motion.p>

            <motion.button
                className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full font-medium hover:bg-teal-600 "
                initial={{opacity: 0, y: 20}}
                transition={{default: {duration: 0.8}, delay: 0.8, duration: 0.8}}
                animate={{opacity: 1, y: 0}}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                onClick={onClickHandler}
            >
                Generate Image <BsStars className="text-amber-500" />
            </motion.button>
        </motion.div>
    );
};
export default Header;
