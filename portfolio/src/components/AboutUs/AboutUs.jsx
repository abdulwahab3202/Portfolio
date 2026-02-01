import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { assets } from '../../assets/assets';
import { motion } from 'framer-motion';

const AboutUs = () => {

    // 1. Define your data here
    const techSkills = [
        { name: "HTML", img: assets.html },
        { name: "CSS", img: assets.css },
        { name: "JavaScript", img: assets.js },
        { name: "Bootstrap", img: assets.bootstrap },
        { name: "React", img: assets.react },
        { name: "Node", img: assets.node },
        { name: "Express", img: assets.express },
        { name: "MongoDB", img: assets.mongodb },
        { name: "Git", img: assets.git },
        { name: "GitHub", img: assets.github },
        { name: "C", img: assets.c },
        { name: "C++", img: assets.cplusplus },
        { name: "Java", img: assets.java },
        { name: "Spring Boot", img: assets.springboot },
        { name: "SQL", img: assets.sql },
    ];

    return (
        <section id="about-us" className="py-20 px-5 text-white bg-slate-900/50 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20 relative z-10"
            >
                <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 drop-shadow-sm">
                    About Me
                </h2>
                <div className="h-1.5 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-10 max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 flex flex-col items-center"
                >
                    <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-gray-700 shadow-[0_0_20px_rgba(0,0,0,0.5)] mb-6 transition-transform duration-300 hover:scale-105">
                        <img src={assets.profile} alt="Abdul Wahab" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-center text-gray-300 max-w-[300px] leading-relaxed mb-6">
                        I'm a passionate Full Stack Developer who loves building dynamic, user-friendly applications.
                        I enjoy solving problems, creating seamless experiences, and continuously expanding my skills.
                        Always eager to learn and grow, I'm currently looking for new opportunities to contribute and innovate.
                    </p>
                    <div className="w-[90%] h-[1px] bg-gray-700 mb-4"></div>
                    <div className="flex items-center gap-2 text-gray-400">
                        <FaMapMarkerAlt />
                        <span>Tamil Nadu, India</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    {/* Education */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 text-cyan-400">Education</h3>
                        <div className="flex justify-between items-start mb-2 group p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <div>
                                <strong className="text-white block mb-1 text-lg">Karpagam college of engineering, Coimbatore</strong>
                                <p className="text-gray-400 text-sm">Bachelor of Information Technology</p>
                            </div>
                            <div className="text-right">
                                <span className="text-cyan-400 text-sm block mb-1">2023 - 2027</span>
                                <p className="text-gray-400 text-xs">CGPA: 8.4</p>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 text-cyan-400">Experience</h3>
                        <div className="flex justify-between items-start mb-2 group p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <div>
                                <strong className="text-white block mb-1 text-lg">Fullstack Development Intern, HaskelAI</strong>
                                <p className="text-gray-400 text-sm">Blog HaskelAI - Full Stack Blogging Platform</p>
                            </div>
                            <div className="text-right">
                                <span className="text-cyan-400 text-sm block mb-1">Jul 2025 - Aug 2025</span>
                                <p className="text-gray-400 text-xs">Bangalore, India</p>
                            </div>
                        </div>
                        <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2 mt-3 marker:text-cyan-500">
                            <li>Architected and developed a full-stack blogging platform, "Blog HaskelAI," from conception to deployment.</li>
                            <li>Built a dynamic and responsive UI with <strong className="text-white">React.js</strong>, improving user engagement metrics by <strong className="text-white">15%</strong>.</li>
                            <li>Designed and implemented RESTful APIs for seamless data exchange using <strong className="text-white">MongoDB</strong>, reducing data latency by <strong className="text-white">25%</strong>.</li>
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 text-cyan-400">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {techSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1, backgroundColor: "#334155" }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 bg-slate-800/50 transition-colors cursor-pointer"
                                >
                                    <img src={skill.img} alt={`${skill.name} logo`} className='w-5 h-5 object-contain' />
                                    <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutUs