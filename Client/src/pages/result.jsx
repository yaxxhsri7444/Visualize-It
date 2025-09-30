/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import {BsStars} from "react-icons/bs";
import {ImFolderDownload} from "react-icons/im";
import {motion} from "motion/react";

const Result = () => {
    const [image, setImage] = useState("/sample_img_1.png");
    const [isImageLoading, setIsImageLoading] = useState(false);
    const [Loading, setLoading] = useState(false);
    const [input, setInput] = useState("");

    const onSubmitHandler = async (e) => {

    };

    return (
        <motion.form
            initial={{opacity: 0.2, y: 100}}
            transition={{duration: 1}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            onSubmit={onSubmitHandler}
            className="flex flex-col justify-center items-center mt-20 mb-10 gap-10 min-h-[90vh]"
        >
            <div>
                <div className="relative">
                    <img className="max-w-sm rounded shadow-2xl" src={image} alt="Background" />
                    <span
                        className={`absolute bottom-0 left-0 h-1 bg-teal-500 ${
                            Loading ? "w-full transition-all duration-[10s]" : "w-0 "
                        }`}
                    />
                    <p className={!Loading ? "hidden" : ""}>Loading....</p>
                </div>
            </div>
            {!isImageLoading && (
                <div className="flex items-center border border-teal-600 rounded-full mt-5 max-w-md mx-auto shadow-md">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="Describe what you want to generate..."
                        className="flex-1 bg-transparent outline-none ml-4 text-black placeholder-gray-500 placeholder-color"
                    />

                    <button className="sm:text-lg text-white bg-black ml-4 px-6 py-2 flex items-center gap-2 rounded-full hover:bg-teal-600 hover:scale-105 transition-all duration-300">
                        Generate
                        <BsStars className="text-amber-500" />
                    </button>
                </div>
            )}
            {isImageLoading && (
                <div className="flex gap-3 flex-wrap justify-center items-center text-sm mt-10">
                    <button
                        onClick={() => {
                            setIsImageLoading(false);
                        }}
                        className="bg-transparent border border-teal-600 text-black px-8 py-3 rounded-full cursor-pointer hover:bg-teal-600 hover:text-white transition-all duration-300"
                    >
                        Generate Another
                    </button>
                    <a
                        href={image}
                        download
                        className="bg-black px-10 py-3 rounded-full cursor-pointer flex items-center gap-2 text-white hover:bg-teal-600 transition-all duration-300"
                    >
                        Download <ImFolderDownload className="text-teal-400" />
                    </a>
                </div>
            )}
        </motion.form>
    );
};

export default Result;
