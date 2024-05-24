import React from 'react';
import '../App.css';
import '../Styles/about.css';

export const About = () => {
    return (
        <div>
            <div className="landing-intro"> 
                <h1>safeHER</h1>
                <h4>
                    A  world where women can thrive
                </h4>
            </div>

            <div className="landing-pink-divider">
            </div>

            <div className="landing-community">
                <h4>we strive to create a</h4>
                <h1><u>♡ community...</u></h1>
            </div>

            <div className="pink-landing-container">
                <div className="pink-rect-text">
                    <h2>Resouces</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida felis at mi scelerisque, ac eleifend lacus consequat. Nulla facilisi.
                    </p>
                    <btn className="rect-button">Learn More</btn>
                </div>
            </div>

        </div>
    )
}