import React from 'react';
import '../App.css';
import '../Styles/team.css';
import {Card} from "./individual components/member";
/* import {Archita} from "../Images/headshots/archita.png" */
/* import {Archita} from "./individual components/member";
import {Giang} from "./individual components/member";
import {Grisha} from "./individual components/member"; */

const boardMembers = [
    { name: 'Archita Sarin', pronouns: 'she/her', position: 'Project Manager', major: 'Computer Science', year: '2027', imageUrl: '/Images/headshots/archita.png' },
    { name: 'Second Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year', imageUrl: '../Images/headshots/archita.png' }
    // Add more board members as needed
]

export const Team = () => {
    return (
        <div> 
            <div className="about-us-team">
                <h1> Meet Your Team </h1>
                <h3>
                    The individuals behind safeHER.
                </h3>
            </div>

            <div className="team-intro">
                <div className="team-intro-divs">
                    <h4>Who We Are</h4>
                    <p>
                        We are an all-women team of 12 with specialties in various fields, coming together to create a community for women.
                    </p>
                </div>

                <div class="vl"></div>

                <div className="team-intro-divs">
                    <h4>Our Mission</h4>
                    <p>
                        Our goal is to cultivate a secure, empowering, and inclusive digital sanctuary where women can freely express themselves, share their stories, showcase their creativity, and access vital resources.
                    </p>
                </div>

                <div class="vl"></div>

                <div className="team-intro-divs">
                    <h4>Our Vision</h4>
                    <p>
                        Together, we envision a world where women thrive, unrestricted by fear or discrimination. Join us as we strive to make this vision a reality, embracing diversity, and fostering solidarity among women everywhere.
                    </p>
                </div>
            </div>

            <div className="team-category">
                <h1>Project Managers</h1>
                <div className="child">
                    <div className="card-info-child">
                        <h2>Archita Sarin</h2>
                        <p>she/her</p>
                        <p>project manager</p>
                        <p>computer science</p>
                        <p>2027</p>
                    </div>

                    <div className="card-info-child">
                        {/* <img src={Archita} alt={`Archita's profile`} className="card-image"/> */}
                    </div>

                </div>

                    {/* <div className="member-container">
                        {boardMembers.map((member, index) => (
                            <Card
                                key={index}
                                name={member.name}
                                pronouns={member.pronouns}
                                position={member.position}
                                major={member.major}
                                year={member.year}
                            />
                        ))}
                    </div> */}
            </div>        
        </div>
    )
}