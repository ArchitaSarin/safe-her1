import React from 'react';
import '../App.css';

function Home() {
    return (
        <div>
            <p> hello world</p>
            <div className="index-container">
                <div className="title-container">
                    <span className="title-text1"> Women's Safety and Rights</span>
                </div>

                <p className="body-text">
                    Our mission is to cultivate a secure, empowering, and inclusive digital sanctuary where women can freely share their stories, creativity, and resources. We strive to foster a supportive community where every woman feels heard, validated, and empowered to navigate the complexities of life. Through our platform, we aim to amplify women's voices, celebrate their resilience, and provide essential resources for personal safety and growth. Together, we aspire to build a world where women thrive, free from fear and discrimination.
                </p>

                <button class="btn" className="first">
                    Art Submission
                </button>
            </div>

        </div>
    )
}

export default Home;