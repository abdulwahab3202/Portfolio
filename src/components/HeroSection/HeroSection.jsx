import React from 'react';
import './HeroSection.css';
import {assets} from '../../assets/assets'
const HeroSection = () => {
    return (
        <div id="hero">
            <h1>Crafting Modern &<br />Impactful Web Applications</h1>
            <p>Hi, I'm Abdul Wahab — an Information Technology student passionate about crafting scalable web applications and solving complex problems through efficient code.</p>
            <div className="buttons">
                <a href="https://www.linkedin.com/in/abdul-wahab-a926a6293" target='blank' className="btn primary">🤝 Let’s Connect</a>
                <a href="/My-Resume.pdf" download="Abdul-Wahab-Resume.pdf" className="btn secondary">Download My Resume ⬇️</a>
            </div>
        </div>
    );
};

export default HeroSection;