import './Project.css'
import React from 'react'
import { assets } from '../../assets/assets';
import { FaGithub } from 'react-icons/fa'

const Project = () => {
    return (
        <div id="project">
            <h2 className='project-title'>Projects</h2>
            <div className="project-container">
                <div className="left">
                    <h3 className='project-name'>ArabSpice</h3>
                    <h4 className='h4'>This is a food ordering platform which contains all varieties of the food,starters and desserts around the world.</h4>
                    <h4 className='h4'>- This website has 8 type of food menu which contains 4 food each. The price is best compared to other platforms.</h4>
                    <h4 className='h4'>- You can add the food to the cart and also you can add the food to the wishlist. You can order whatever you want.</h4>
                    <h4 className='h4'>- Payment method is very fast and secure.Admin dashboard for adding, editing the details and deleting the food.</h4>
                    <div className="right"><img src={assets.project1} alt="project 1 image" /></div>
                    <div className="tech-stack">
                        <div className="flex">
                            <img src={assets.react} alt="react image" className='image' />
                            <span>React</span>
                        </div>
                        <div className="flex">
                            <img src={assets.node} alt="node image" className='image' />
                            <span>Node</span>
                        </div>
                        <div className="flex">
                            <img src={assets.express} alt="express image" className='image' />
                            <span>Express</span>
                        </div>
                        <div className="flex">
                            <img src={assets.mongodb} alt="mongodb image" className='image' />
                            <span>MongoDB</span>
                        </div>
                    </div>
                    <div className="github-btn">
                        <a href="https://github.com/abdulwahab3202/ArabSpice" target='blank' className='github-button'>Github <FaGithub size={20} color='white' /></a>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="left">
                    <h3 className='project-name'>Student Database</h3>
                    <h4 className='h4'>This Student Management System provides secure registration, login, and token-based authentication.</h4>
                    <h4 className='h4'>-This contains various operations like Create, Read, Update and Delete Students.</h4>
                    <h4 className='h4'>-Role-based access is implemented where USERS can only view student data, while ADMINS have full CRUD capabilities.</h4>
                    <h4 className='h4'>-After login, the token is fetched and stored for secure API calls, and users are redirected to the home page.</h4>
                    <div className="right"><img src={assets.project5} alt="project 5 image" /></div>
                    <div className="tech-stack">
                        <div className="flex">
                            <img src={assets.html} alt="react image" className='image' />
                            <span>HTML</span>
                        </div>
                        <div className="flex">
                            <img src={assets.css} alt="node image" className='image' />
                            <span>CSS</span>
                        </div>
                        <div className="flex">
                            <img src={assets.react} alt="react image" className='image' />
                            <span>React</span>
                        </div>
                        <div className="flex">
                            <img src={assets.springboot} alt="springboot image" className='image' />
                            <span>SpringBoot</span>
                        </div>
                    </div>
                    <div className="github-btn">
                        <a href="https://github.com/abdulwahab3202/StudentCRUD" target='blank' className='github-button'>Github <FaGithub size={20} color='white' /></a>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="left">
                    <h3 className='project-name'>Expense Tracker</h3>
                    <h4 className='h4'>This is an expenses calculating website used for managing your expenses and also you can maintain the budget.</h4>
                    <h4 className='h4'>- You can calculate your daily, weekly, monthly, yearly expenses in this website within a minute.</h4>
                    <h4 className='h4'>- It contains various types of fields which you can used for spending money.Especially, you can store the date.</h4>
                    <h4 className='h4'>- You can also store your data in a table and you can also retrieve the data whenever you want.</h4>
                    <div className="right"><img src={assets.project2} alt="project 2 image" /></div>
                    <div className="tech-stack">
                        <div className="flex">
                            <img src={assets.html} alt="react image" className='image' />
                            <span>HTML</span>
                        </div>
                        <div className="flex">
                            <img src={assets.css} alt="node image" className='image' />
                            <span>CSS</span>
                        </div>
                        <div className="flex">
                            <img src={assets.js} alt="express image" className='image' />
                            <span>JavaScript</span>
                        </div>
                    </div>
                    <div className="github-btn">
                        <a href="https://github.com/abdulwahab3202/Expense-Tracker-Website" target='blank' className='github-button'>Github <FaGithub size={20} color='white' /></a>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="left">
                    <h3 className='project-name'>Smart Learn</h3>
                    <h4 className='h4'>This is an interactive learning platform contains all types of courses related to Web develpoment, FullStack Develpment.</h4>
                    <h4 className='h4'>- All types of courses are cost-friendly and also many offers are available which will reduce the amount.</h4>
                    <h4 className='h4'>- You can enroll the course whatever you want and you can add your profile for your learning journey.</h4>
                    <h4 className='h4'>- The special feature is, it contains the mentors who are handling the particular courses.</h4>
                    <div className="right"><img src={assets.project3} alt="project 3 image" /></div>
                    <div className="tech-stack">
                        <div className="flex">
                            <img src={assets.html} alt="react image" className='image' />
                            <span>HTML</span>
                        </div>
                        <div className="flex">
                            <img src={assets.css} alt="node image" className='image' />
                            <span>CSS</span>
                        </div>
                    </div>
                    <div className="github-btn">
                        <a href="https://github.com/abdulwahab3202/e-learning-website" target='blank' className='github-button'>Github <FaGithub size={20} color='white' /></a>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="left">
                    <h3 className='project-name'>Console Debugger AI</h3>
                    <h4 className='h4'>This is an AI-powered assistant for real-time debugging of console errors in web development.</h4>
                    <h4 className='h4'>- Automatically detects JavaScript console errors and provides contextual solutions using the OpenAI API.</h4>
                    <h4 className='h4'>- Chrome extension captures errors instantly and suggests fixes directly within the developer tools environment.</h4>
                    <h4 className='h4'>- Fetches relevant resources and documentation from platforms like Stack Overflow to support issue resolution.</h4>
                    <div className="right"><img src={assets.project4} alt="project 4 image" /></div>
                    <div className="tech-stack">
                        <div className="flex">
                            <img src={assets.html} alt="react image" className='image' />
                            <span>HTML</span>
                        </div>
                        <div className="flex">
                            <img src={assets.css} alt="node image" className='image' />
                            <span>CSS</span>
                        </div>
                        <div className="flex">
                            <img src={assets.js} alt="express image" className='image' />
                            <span>JavaScript</span>
                        </div>
                    </div>
                    <div className="github-btn">
                        <a href="https://github.com/abdulwahab3202/ArabSpice" target='blank' className='github-button'>Github <FaGithub size={20} color='white' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project