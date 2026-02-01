import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div id="hero" className="h-[90vh] flex flex-col justify-center items-center text-center px-5 z-10 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-[800px]"
            >
                <p className="text-xl tracking-[3px] text-cyan-400 mb-2 font-semibold font-['Montserrat']">HELLO, I'M</p>

                {/* 1. Name with Gradient */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold m-0 leading-[1.1] bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl">
                    Abdul Wahab
                </h1>

                {/* 2. Typewriter Effect */}
                <h2 className="text-2xl md:text-4xl font-bold text-white my-5">
                    I am a <span className="text-rose-500">
                        <Typewriter
                            words={['Full Stack Developer.', 'MERN Stack Enthusiast.', 'Problem Solver.', 'Tech Innovator.']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>

                <p className="text-lg md:text-xl text-gray-300 max-w-[600px] mx-auto mb-10 leading-relaxed">
                    Specializing in <strong className="text-white">Full Stack Development</strong> and <strong className="text-white">Microservices Architecture</strong>.
                    I engineer robust, high-performance web solutions using the <strong className="text-white">MERN Stack</strong> and <strong className="text-white">Java Spring Boot</strong>.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-5 items-center w-full">
                    {/* 3. Primary Button (Gradient) */}
                    <a
                        href="https://www.linkedin.com/in/abdul-wahab-a926a6293"
                        target='_blank'
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full text-base font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] w-[80%] md:w-auto"
                    >
                        Let’s Connect
                    </a>

                    {/* 4. Secondary Button (Outline/Glass) */}
                    <a
                        href="/My-Resume.pdf"
                        download="Abdul-Wahab-Resume.pdf"
                        className="px-8 py-3 rounded-full text-base font-semibold text-white border-2 border-cyan-400 bg-transparent transition-all duration-300 hover:bg-cyan-400/10 hover:-translate-y-1 w-[80%] md:w-auto"
                    >
                        Download CV
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;