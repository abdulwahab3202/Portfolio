import React from 'react'
import { assets } from '../../assets/assets'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Project = () => {

    const projectData = [
        {
            title: "HomeFix",
            subtitle: "Home Service Platform",
            description:
                "A secure, microservices-based application for managing on-demand home services. Customers book services, workers accept jobs with secure OTP verification.",
            image: assets.project2,
            githubLink: "https://github.com/abdulwahab3202/Home-Service-Application",
            liveLink: "https://home-service-application-five.vercel.app/",
        },
        {
            title: "ArabSpice",
            subtitle: "Food Ordering Application",
            description:
                "Full-featured food ordering platform with cart, wishlist, and secure payments. Includes an admin dashboard for managing menu items and orders.",
            image: assets.project3,
            githubLink: "https://github.com/abdulwahab3202/Food-Delivery-Application",
            liveLink: "https://food-delivery-application-neon.vercel.app",
        },
        {
            title: "HomeWork Tracker",
            subtitle: "Homework Tracking Application",
            description:
                "A simple application for tracking homework assignments. Faculty can easily track completed and pending submissions.",
            image: assets.project4,
            githubLink: "https://github.com/abdulwahab3202/Homework-Tracking-Application",
            liveLink: "https://homework-tracking-application.vercel.app/",
        },
        {
            title: "Civic AI",
            subtitle: "Smart Grievance Redressal System",
            description:
                "An AI-powered platform that automates the reporting and validation of public infrastructure issues using computer vision and AI models.",
            image: assets.project1,
            githubLink: "https://github.com/VelmuruganSuresh/Civic-Ai",
            liveLink: "https://civic-ai-frontend.onrender.com",
        },
    ]

    return (
        <section id="project" className="relative py-28 bg-slate-950 text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <div className="h-1.5 w-32 mx-auto mt-6 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
            </motion.div>

            {/* Swiper Container with External Navigation Padding */}
            <div className="max-w-7xl mx-auto px-12 relative z-10">

                {/* Custom Navigation Buttons will be targeted by class name */}
                <div className="swiper-button-prev-custom absolute top-1/2 left-0 -translate-y-1/2 z-20 cursor-pointer group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 backdrop-blur-md border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/40">
                        <FaChevronLeft className="text-white group-hover:text-cyan-400 text-xl" />
                    </div>
                </div>
                <div className="swiper-button-next-custom absolute top-1/2 right-0 -translate-y-1/2 z-20 cursor-pointer group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 backdrop-blur-md border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/40">
                        <FaChevronRight className="text-white group-hover:text-cyan-400 text-xl" />
                    </div>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoHeight={false}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                    }}
                    modules={[Pagination, Navigation]}
                    className="project-swiper pb-16"
                >
                    {projectData.map((project, index) => (
                        <SwiperSlide key={index} className="h-auto px-2">
                            <div
                                className="group relative h-full min-h-[500px] flex flex-col
                                bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800
                                border border-white/10 rounded-2xl overflow-hidden
                                transition-all duration-500
                                hover:-translate-y-2
                                hover:border-cyan-500/50
                                hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.2)]"
                            >

                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow relative z-10">
                                    <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                                        {project.subtitle}
                                    </p>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-4 group-hover:text-gray-300">
                                        {project.description}
                                    </p>

                                    {/* Buttons */}
                                    <div className="flex gap-4 mt-auto">
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg
                                            bg-white/5 border border-white/10
                                            hover:bg-white/10 hover:border-white/30 transition-all
                                            hover:scale-[1.02] active:scale-95"
                                        >
                                            <FaGithub className="text-lg" /> <span className="text-sm font-semibold">Code</span>
                                        </a>

                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg
                                            bg-gradient-to-r from-cyan-600 to-blue-600
                                            hover:brightness-110 hover:shadow-lg hover:shadow-cyan-500/25 transition-all
                                            hover:scale-[1.02] active:scale-95"
                                        >
                                            <FaExternalLinkAlt className="text-sm" /> <span className="text-sm font-semibold">Live</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                .project-swiper {
                    padding-bottom: 60px !important;
                }
                .project-swiper .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background-color: rgba(255, 255, 255, 0.2);
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                .project-swiper .swiper-pagination-bullet-active {
                    width: 30px;
                    border-radius: 5px;
                    background-color: #22d3ee;
                    box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
                }
            `}</style>

        </section>
    )
}

export default Project;