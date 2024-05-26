import React from 'react';
import '../../Styles/team.css';
import PropTypes from 'prop-types';
import Headshot from '../../Images/placeholder.jpg';

export const Card = ({ name, pronouns, position, major, year, imageUrl }) => (
    <div className="child">
        <div className="card-info-child">
            <h2>{name}</h2>
            <p>{pronouns}</p>
            <p>{position}</p>
            <p>{major}</p>
            <p>{year}</p>
        </div>

        <div className="card-info-child">
            <img src={Headshot}/>
{/*             <img src={imageUrl} alt={`${name}'s profile`} className="card-image" />*/}        </div>
    </div>
);

Card.propTypes = {
    name: PropTypes.string.isRequired,
    pronouns: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

/* export const Archita = () => {
    return (
        <div className="child">

            <div className="childtop">
                <img src={Headshot} alt="placeholder"/>
            </div>

            <div className="childbottom">
                <h2>Archita Sarin</h2>
                <p>Project Manager</p>
                <p>Major, Year</p>
                <p>LinkedIn</p>
            </div>

        </div>

    )
}

export const Giang = () => {
    return (
        <div className="child">

            <div className="childtop">
                <img src={Headshot} alt="placeholder"/>
            </div>

            <div className="childbottom">
                <h2>Giang Le</h2>
                <p>Position</p>
                <p>Major, Year</p>
                <p>LinkedIn</p>
            </div>

        </div>

    )
}

export const Grisha = () => {
    return (
        <div className="child">

            <div className="childtop">
                <img src={Headshot} alt="placeholder"/>
            </div>

            <div className="childbottom">
                <h2>Grisha Bandodkar</h2>
                <p>Position</p>
                <p>Major, Year</p>
                <p>LinkedIn</p>
            </div>

        </div>

    )
} */