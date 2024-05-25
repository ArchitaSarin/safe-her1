import React from 'react';
import '../../Styles/team.css';
/* import Headshot from '../../Images/placeholder.jpg'; */

export const Card = ({ name, pronouns, position, major, year }) => {
    return (
        <div className="member-container">
            <div>

                {/* <div className="childtop">
                    <img src={Headshot} alt="placeholder"/>
                </div> */}

                <div className="child">
                    <h2>{name}</h2>
                    <p> {pronouns} </p>
                    <p> {position} </p>
                    <p>{year}, {major}</p>
                </div>

            </div>
        </div>

    )
}

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