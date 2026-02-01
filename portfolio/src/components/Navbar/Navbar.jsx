import React from 'react';
import { FaHome, FaRegUserCircle, FaCode, FaRegEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <div className="flex justify-center items-center">
            <motion.div
                initial={{ y: -100, opacity: 0, x: "-50%" }}
                animate={{ y: 0, opacity: 1, x: "-50%" }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="fixed top-5 left-1/2 flex gap-6 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg z-50 text-white"
            >
                <a href="#hero" className="text-xl sm:text-2xl text-gray-300 hover:text-indigo-400 hover:scale-125 transition-all duration-300 flex items-center justify-center">
                    <FaHome />
                </a>
                <a href="#about-us" className="text-xl sm:text-2xl text-gray-300 hover:text-indigo-400 hover:scale-125 transition-all duration-300 flex items-center justify-center">
                    <FaRegUserCircle />
                </a>
                <a href="#project" className="text-xl sm:text-2xl text-gray-300 hover:text-indigo-400 hover:scale-125 transition-all duration-300 flex items-center justify-center">
                    <FaCode />
                </a>
                <a href="#contact" className="text-xl sm:text-2xl text-gray-300 hover:text-indigo-400 hover:scale-125 transition-all duration-300 flex items-center justify-center">
                    <FaRegEnvelope />
                </a>
                <div className="w-[1px] h-6 bg-gray-500 mx-1"></div>
                <a
                    href="https://www.linkedin.com/in/abdul-wahab-a926a6293"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl text-gray-300 hover:text-blue-500 hover:scale-125 transition-all duration-300 flex items-center justify-center"
                >
                    <FaLinkedinIn />
                </a>

                <a
                    href="https://github.com/abdulwahab3202"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl text-gray-300 hover:text-white hover:scale-125 transition-all duration-300 flex items-center justify-center"
                >
                    <FaGithub />
                </a>
            </motion.div>
        </div>
    );
};

export default Navbar;