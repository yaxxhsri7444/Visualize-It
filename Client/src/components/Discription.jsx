/* eslint-disable no-unused-vars */
import React from "react";
import {PiShootingStarBold} from "react-icons/pi";
import {motion} from "motion/react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {AppContext} from "../context/appContext";

const Discription = () => {
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
            className="flex flex-col text-center justify-center p-4 md:px-28 mb-5"
            initial={{opacity: 0.2, y: 100}}
            transition={{duration: 1}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
        >
            <h1 className="text-2xl sm:text-4xl font-semibold text-teal-500">Create AI Images</h1>
            <p className="mb-8 text-black max-w-2xl mx-auto">
                Transform your text into stunning images with our AI-powered tool. Simply enter a description, and watch
                as our technology brings your vision to life in seconds.
            </p>
            <div className="flex items-center bg-white drop-shadow-md justify-center rounded-lg gap-8 py-2.5 flex-col lg:flex-row">
                <img src="/sample_img_1.png" alt="img" className="w-70 xl:w-96 rounded-lg py-2 px-2 ml-1" />
                <div className="text-top lg:text-left px-4">
                    <h2 className="text-2.5xl font-medium text-left text-shadow-amber-50 text-teal-500 py-1.5">
                        Introducing the AI-Powered text to Image Generator{" "}
                    </h2>
                    <p className="text-black text-left max-w-1.5xl mx-auto py-2 mb-4">
                        Unleash your creativity with our cutting-edge AI text to image generator. Transform your words
                        into captivating visuals in seconds. Whether you're an artist, designer, or simply looking to
                        bring your ideas to life, our tool makes it effortless. Just type your description, and watch as
                        our AI crafts stunning images tailored to your vision. Perfect for social media, presentations,
                        or personal projects. Try it now and see your imagination come to life!
                    </p>
                    <motion.button
                        className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:bg-teal-600 hover:scale-105 hover:transition-all hover:duration-300"
                        onClick={onClickHandler}
                        initial={{opacity: 0, y: 20}}
                        transition={{default: {duration: 0.8}, delay: 0.8, duration: 0.8}}
                        animate={{opacity: 1, y: 0}}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        Generate Image <PiShootingStarBold className="text-amber-500" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default Discription;
