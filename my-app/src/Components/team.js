import React from 'react';
import '../App.css';
import '../Styles/team.css';
import {Card} from "./individual components/member";
import ArchitaHeadshot from "../Images/headshots/archita.png"
import IpsitaHeadshot from "../Images/headshots/ipsita.jpeg"

import LinkedIn from "../Images/linkedin.png"


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

                {/* archita profile */}
                <div className="child">
                    <div className="card-info-top">
                        <p>
                            UC Davis Class of 2027
                        </p>

                        <img src={LinkedIn} alt="linkedin" className="card-image"/>

                        
                    </div>

                    <div className="card-info-child">
                        <h2>Archita Sarin</h2>
                        <h4>Position</h4>
                            <p>Project Manager</p>
                        <h4>Major</h4>
                        <p>Computer Science</p>
                    </div>

                    <div className="card-info-child">
                        <img src={ArchitaHeadshot} alt="Archita" className="card-image"/>
                    </div>
                </div>

                {/* ipsitas profile */}
                <div className="child">
                    <div className="card-info-child">
                        <h2>Ipsita ---</h2>
                        <p>she/her</p>
                        <p>project manager</p>
                        <p>computer science</p>
                        <p>2027</p>
                    </div>

                    <div className="card-info-child">
                        <img src={IpsitaHeadshot} alt="girlhood abstract art" className="card-image"/>
                    </div>
                </div>

            {/* Designers section  */}
                <h1>Designers</h1>

                <div className="child">
                    <div className="card-info-child">
                        <h2>Sania Heydarfadai</h2>
                        <p>she/her</p>
                        <p>project manager</p>
                        <p>computer science</p>
                        <p>2027</p>
                    </div>

                    <div className="card-info-child">
                        <img src={ArchitaHeadshot} alt="girlhood abstract art" className="card-image"/>
                    </div>
                </div>

                <div className="child">
                    <div className="card-info-child">
                        <h2>Giang Le </h2>
                        <p>she/her</p>
                        <p>project manager</p>
                        <p>computer science</p>
                        <p>2027</p>
                    </div>

                    <div className="card-info-child">
                        <img src={IpsitaHeadshot} alt="girlhood abstract art" className="card-image"/>
                    </div>
                </div>

            {/* researchers section  */}
                <h1>Designers</h1>

                <div className="child">
                    <div className="card-info-child">
                        <h2>Archita Sarin</h2>
                        <p>she/her</p>
                        <p>project manager</p>
                        <p>computer science</p>
                        <p>2027</p>
                    </div>

                    <div className="card-info-child">
                        <img src={ArchitaHeadshot} alt="girlhood abstract art" className="card-image"/>
                    </div>
                </div>

                <div className="child">
                    <div className="card-info-child">
                        <h2>Ipsita ---</h2>
                        <p>she/her</p>
                        <p>project manager</p>
                        <p>computer science</p>
                        <p>2027</p>
                    </div>

                    <div className="card-info-child">
                        <img src={IpsitaHeadshot} alt="girlhood abstract art" className="card-image"/>
                    </div>
                </div>


            </div>  



        </div>
    )
}