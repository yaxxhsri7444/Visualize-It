/* eslint-disable no-unused-vars */
import React from "react";
import {MdOutlineStarHalf} from "react-icons/md";
import {MdOutlineStarPurple500} from "react-icons/md";
import {motion} from "motion/react";

const Testimonial = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center my-20 py-12 md:px-28"
            initial={{opacity: 0.2, y: 100}}
            transition={{duration: 1}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
        >
            <h1 className="text-4xl sm:text-5xl text-teal-500 text-shadow-teal-500 font-semibold mb-2">
                Customer Testimonials
            </h1>
            <p className="text-zinc-600 mb-12">What Our User Are Saying </p>
            <div className=" flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="max-w-sm bg-white p-6 rounded-lg border-0 drop-shadow-md hover:scale-[1.02]">
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                            alt="Profile"
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">Donald Jackman</h3>
                            <p className="text-sm text-gray-500">Graphic Designer</p>
                            <p className="flex text-black gap-2">
                                <MdOutlineStarPurple500 className="text-amber-500" />
                                <MdOutlineStarPurple500 className="text-amber-500" />
                                <MdOutlineStarPurple500 className="text-amber-500" />
                                <MdOutlineStarPurple500 className="text-amber-500" />
                                <MdOutlineStarHalf className="text-amber-500" />
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-700">
                        I've been using bg.removal for nearly two years, primarily for Instagram, and it has been
                        incredibly user-friendly, making my work much easier.
                    </p>
                </div>
                <div className="max-w-sm bg-white p-6 rounded-lg border-0 drop-shadow-md hover:scale-[1.02]">
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                            alt="Profile"
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">Donald Jackman</h3>
                            <p className="text-sm text-gray-500">Graphic Designer</p>
                            <p className="flex text-black gap-2">
                                <MdOutlineStarPurple500 className="text-amber-500 " />
                                <MdOutlineStarPurple500 className="text-amber-500 " />
                                <MdOutlineStarPurple500 className="text-amber-500 " />
                                <MdOutlineStarPurple500 className="text-amber-500 " />
                                <MdOutlineStarHalf className="text-amber-500 " />
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-700">
                        I've been using bg.removal for nearly two years, primarily for Instagram, and it has been
                        incredibly user-friendly, making my work much easier.
                    </p>
                </div>
                <div className="max-w-sm bg-white p-6 rounded-lg border-0 drop-shadow-md hover:scale-[1.02]">
                    {" "}
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                            alt="Profile"
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">Donald Jackman</h3>
                            <p className="text-sm text-gray-500">Graphic Designer</p>
                            <p className="flex gap-2 text-black">
                                <MdOutlineStarPurple500 className="text-amber-500" />
                                <MdOutlineStarPurple500 className="text-amber-500" />
                                <MdOutlineStarPurple500 className="text-amber-500" />
                                <MdOutlineStarPurple500 className="text-amber-500" />
                                <MdOutlineStarHalf className="text-amber-500" />
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-700">
                        I've been using bg.removal for nearly two years, primarily for Instagram, and it has been
                        incredibly user-friendly, making my work much easier.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Testimonial;
