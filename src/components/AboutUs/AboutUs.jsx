import React from 'react'
import './AboutUs.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { assets } from '../../assets/assets';

const AboutUs = () => {
    return (
        <section id="about-us">
            <h2 className="about-title">About Me</h2>
            <div className="about-content">
                <div className="about-left">
                    <img src={assets.profile} alt="Abdul Wahab" className="profile-img" />
                    <p>
                        I'm a passionate Mern-Stack Developer who loves building dynamic, user-friendly applications.
                        I enjoy solving problems, creating seamless experiences, and continuously expanding my skills.
                        Always eager to learn and grow, I'm currently looking for new opportunities to contribute and innovate.
                    </p>
                    <hr className='hr'/>
                    <div className="location">
                        <FaMapMarkerAlt size={16} />
                        <span> Tamil Nadu, India</span>
                    </div>
                </div>
                <div className="about-right">
                    <div className="section-block">
                        <h3>Education</h3>
                        <div className="edu-item">
                            <div>
                                <strong>Karpagam college of engineering, Coimbatore</strong>
                                <p>Bachelor of Information Technology</p>
                            </div>
                            <div>
                                <span>2023 - 2027</span>
                                <p>CGPA: 8.4</p>
                            </div>
                        </div>
                    </div>
                    <div className="section-block">
                        <h3>Experience</h3>
                        <div className="exp-item">
                            <div>
                                <strong>AlgoZenith Hackathon</strong>
                                <p>AI-Powered Chrome Extension - Team Project</p>
                            </div>
                            <div>
                                <span>Feb 2025</span>
                                <p>Remote</p>
                            </div>
                        </div>
                        <ul className="exp-points">
                            <li>Built an AI chatbot to debug console errors with automated suggestions.</li>
                            <li>Integrated React frontend with AI API for real-time error explanations.</li>
                            <li>Enhanced the UX for debugging tools with modern Chrome extension APIs.</li>
                        </ul>
                    </div>
                    <div className="section-block">
                        <h3>Tech Stack</h3>
                        <div className="tech-stack">
                            <div className="flex">
                                <img src={assets.html} alt="html image" className='image'/>
                                <span>HTML</span>
                            </div>
                            <div className="flex">
                                <img src={assets.css} alt="css image" className='image'/>
                                <span>CSS</span>
                            </div>
                            <div className="flex">
                                <img src={assets.js} alt="javascript image" className='image'/>
                                <span>JavaScript</span>
                            </div>
                            <div className="flex">
                                <img src={assets.bootstrap} alt="bootstrap image" className='image'/>
                                <span>Bootstrap</span>
                            </div>
                            <div className="flex">
                                <img src={assets.react} alt="react image" className='image'/>
                                <span>React</span>
                            </div>
                            <div className="flex">
                                <img src={assets.node} alt="node image" className='image'/>
                                <span>Node</span>
                            </div>
                            <div className="flex">
                                <img src={assets.express} alt="express image" className='image'/>
                                <span>Express</span>
                            </div>
                            <div className="flex">
                                <img src={assets.mongodb} alt="mongodb image" className='image'/>
                                <span>MongoDB</span>
                            </div>
                            <div className="flex">
                                <img src={assets.git} alt="git image" className='image'/>
                                <span>git</span>
                            </div>
                            <div className="flex">
                                <img src={assets.github} alt="github image" className='image'/>
                                <span>github</span>
                            </div>
                            <div className="flex">
                                <img src={assets.c} alt="c image" className='image'/>
                                <span>C</span>
                            </div>
                            <div className="flex">
                                <img src={assets.cplusplus} alt="c++ image" className='image'/>
                                <span>C++</span>
                            </div>
                            <div className="flex">
                                <img src={assets.java} alt="java image" className='image'/>
                                <span>Java</span>
                            </div>
                            <div className="flex">
                                <img src={assets.python} alt="python image" className='image'/>
                                <span>Python</span>
                            </div>
                            <div className="flex">
                                <img src={assets.springboot} alt="springboot image" className='image'/>
                                <span>Spring Boot</span>
                            </div>
                            <div className="flex">
                                <img src={assets.sql} alt="sql image" className='image'/>
                                <span>SQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs