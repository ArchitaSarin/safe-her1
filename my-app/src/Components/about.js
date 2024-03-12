import React from 'react';
import '../App.css';
import '../Styles/about.css';

export const About = () => {
    return (
        <div> 
            <div class="section-mission">
                <h1>Mission Statement</h1>
                <p>Our mission is to cultivate a secure, empowering, and inclusive digital sanctuary where women can freely share their stories, creativity, and resources. We strive to foster a supportive community where every woman feels heard, validated, and empowered to navigate the complexities of life. Through our platform, we aim to amplify women's voices, celebrate their resilience, and provide essential resources for personal safety and growth. Together, we aspire to build a world where women thrive, free from fear and discrimination.</p>
            </div>

            <div class="section-index-main">
                <div class="section-index-main-container">
                    <h1>SafeHER</h1>

                    <p>
                        Our mission is to cultivate a secure, empowering, and inclusive digital sanctuary where women can freely share their stories, creativity, and resources. We strive to foster a supportive community where every woman feels heard, validated, and empowered to navigate the complexities of life. Through our platform, we aim to amplify women's voices, celebrate their resilience, and provide essential resources for personal safety and growth. Together, we aspire to build a world where women thrive, free from fear and discrimination.
                    </p>

                    <button class="index-btn" className="first">
                        Art Submission
                    </button>
                </div>
            </div>

            <div className="section-blog">
                <h1> Recent Blogs </h1>

                    <div class="section-blog-left">
                        <div class="left-top-container">
                            <div class="left-top-card">
                                <h2> Heading </h2>
                                <p> Suspendisse consectetur cursus mauris, id tempor ipsum placerat vel. Duis ut felis nec orci venenatis pulvinar. Praesent a mi non odio imperdiet porta quis non turpis. Nunc ornare dui a odio laoreet, vel mollis ex rhoncus. Fusce malesuada elit id molestie dapibus. Fusce fringilla tempus tortor, at placerat purus tempor eu. Nulla nec elit non enim tempor condimentum. Nulla suscipit, risus quis vehicula auctor, leo nunc consequat augue, et accumsan turpis diam ac eros. Duis id imperdiet arcu, id placerat arcu. Donec condimentum mollis tellus, vitae blandit mauris laoreet et. Suspendisse lorem elit, congue ut eros sed, pharetra congue mi. Sed sed leo libero. Quisque pellentesque at nisi a bibendum. Proin nec nisi ipsum. Donec euismo </p>
                            </div>

                        <div className="left-top-card">
                            <h2> Heading </h2>
                            <p> 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat, dui eget maximus hendrerit, nibh libero ultricies diam, at venenatis quam tellus non mi. Nunc eu congue eros. Etiam aliquam facilisis nisi. 
                            </p>
                        </div>
                    </div>

                <div class="left-bottom-container">
                    <div class="left-top-card">
                        <h2> Heading </h2>
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat, dui eget maximus hendrerit, nibh libero ultricies diam, at venenatis quam tellus non mi. Nunc eu congue eros. Etiam aliquam facilisis nisi. 
                        </p>
                    </div>

                    <div class="left-top-card">
                        <h2> Heading </h2>
                        <p> Suspendisse consectetur cursus mauris, id tempor ipsum placerat vel. Duis ut felis nec orci venenatis pulvinar. Praesent a mi non odio imperdiet porta quis non turpis. Nunc ornare dui a odio laoreet, vel mollis ex rhoncus. Fusce malesuada elit id molestie dapibus. Fusce fringilla tempus tortor, at placerat purus tempor eu. Nulla nec elit non enim tempor condimentum. Nulla suscipit, risus quis vehicula auctor, leo nunc consequat augue, et accumsan turpis diam ac eros. Duis id imperdiet arcu, id placerat arcu. Donec condimentum mollis tellus, vitae blandit mauris laoreet et. Suspendisse lorem elit, congue ut eros sed, pharetra congue mi. Sed sed leo libero. Quisque pellentesque at nisi a bibendum. Proin nec nisi ipsum. Donec euismo </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}