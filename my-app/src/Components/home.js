import React from 'react';
import '../App.css';
import '../Styles/home.css';
import Squares from '../Images/Squares.svg';

export const Home = () => {
    return (
        <div className="index">
            <div className="title-container">
                <h1> SafeHER </h1>
                <p> A space for women to unleash their creativity. </p>
            </div>
            <div className="share-container">
                <h1> Share Your Story </h1>
                <p> Share your experience and how ypu felt about it. We want to know. </p>
            </div>
        </div>
    )
}

// export default Home;