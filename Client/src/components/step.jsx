/* eslint-disable no-unused-vars */
import React from "react";
import {GrMagic} from "react-icons/gr";
import {IoIosEye} from "react-icons/io";
import {BiSolidDownload} from "react-icons/bi";
import {motion} from "motion/react";

const Step = () => {
    return (
        <motion.div
            className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center"
            initial={{opacity: 0.2, y: 100}}
            transition={{duration: 1}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
        >
            <h1 className="text-4xl sm:text-5xl text-teal-500 text-shadow-teal-500 font-semibold mb-0.5">
                How its works ?
            </h1>
            <p className="text-zinc-600 mb-4">Transform Texts Into Stunning Images </p>

            <div className="mt-2 flex flex-col items-center-safe">
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2.5 bg-white p-4 rounded-lg border-0 drop-shadow-md hover:scale-[1.02]">
                    <IoIosEye className="text-teal-500 w-12 h-12" />
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl text-teal-500 font-semibold mb-1.5">Describe Your Vision</h2>
                        <p className="max-w-md text-black">
                            Type a phrase, sentence, or paragraph that describes the image you want to create.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-6 mt-2.5 bg-white p-4 rounded-lg drop-shadow-md hover:scale-[1.02]">
                    <GrMagic className="text-teal-500 w-12 h-12" />
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl text-teal-500 font-semibold mb-1.5">Watch the Magic</h2>
                        <p className="max-w-md text-black">
                            Our AI-powered engine will transform your text into a high-quality, unique image in seconds.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-6 mt-2.5 bg-white p-4 rounded-lg drop-shadow-md hover:scale-[1.02]">
                    <BiSolidDownload className="text-teal-500 rounded w-12 h-12 " />
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl text-teal-500 font-semibold mb-1.5">Download & Share</h2>
                        <p className="max-w-md text-black">
                            Instantly download your creation or share it with the world directly from our platform.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Step;
