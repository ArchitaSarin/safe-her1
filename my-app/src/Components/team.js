import React from 'react';
import '../App.css';
import '../Styles/team.css';
import {Card} from "./individual components/member";
import ArchitaHeadshot from "../Images/headshots/archita.png"
import IpsitaHeadshot from "../Images/headshots/ipsita.jpeg"
import SaniaHeadshot from "../Images/headshots/sania.png"
import GiangHeadshot from "../Images/headshots/giang.png"
import TanyaHeadshot from "../Images/headshots/tanya.jpg"
import HaylieHeadshot from "../Images/headshots/haylie.png"
import KellyHeadshot from "../Images/headshots/kelly.JPG"
import KylieHeadshot from "../Images/headshots/kylie.jpg"
import JordanHeadshot from "../Images/headshots/jordan.jpg"
import AnviHeadshot from "../Images/headshots/anvi.png"
import JadeHeadshot from "../Images/headshots/jade.jpg"
import GrishaHeadshot from "../Images/headshots/grisha.jpeg"
import DivyaHeadshot from "../Images/headshots/divya.png"

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

                {/* ipsita profile */}
                <div className="child">
                    <div className="card-info-top">
                        <p>
                            UC Davis Class of 2027
                        </p>

                        <img src={LinkedIn} alt="linkedin" className="card-image"/>

                        
                    </div>

                    <div className="card-info-child">
                        <h2>Ipsita Chauhan</h2>
                        <h4>Position</h4>
                            <p>Project Manager</p>
                        <h4>Major</h4>
                        <p>Mechanical Engineering & Aerospace Science and Engineering</p>
                    </div>

                    <div className="card-info-child">
                        <img src={IpsitaHeadshot} alt="Archita" className="card-image"/>
                    </div>
                </div>

            {/* Designers section  */}
                <h1>Designers</h1>

                {/* Sania profile */}
                <div className="child">
                    <div className="card-info-top">
                        <p>
                            UC Davis Class of 2025
                        </p>

                        <img src={LinkedIn} alt="linkedin" className="card-image"/>

                        
                    </div>

                    <div className="card-info-child">
                        <h2>Sania Heydarfadai</h2>
                        <h4>Position</h4>
                            <p>Product Designer</p>
                        <h4>Major</h4>
                        <p>Design, Technology Management Minor</p>
                    </div>

                    <div className="card-info-child">
                        <img src={SaniaHeadshot} alt="Sania" className="card-image"/>
                    </div>
                </div>

                {/* Giang profile */}
                <div className="child">
                    <div className="card-info-top">
                        <p>
                            UC Davis Class of 2026
                        </p>

                        <img src={LinkedIn} alt="linkedin" className="card-image"/>

                        
                    </div>

                    <div className="card-info-child">
                        <h2>Giang Le</h2>
                        <h4>Position</h4>
                            <p>Product Designer</p>
                        <h4>Major</h4>
                        <p>Design & Statistics</p>
                    </div>

                    <div className="card-info-child">
                        <img src={GiangHeadshot} alt="Giang" className="card-image"/>
                    </div>
                </div>

            {/* researchers section  */}
                <h1>Researchers</h1>

                {/* Tanya profile */}
                <div className="child">
                    <div className="card-info-top">
                        <p>
                            UC Davis Class of 2025
                        </p>

                        <img src={LinkedIn} alt="linkedin" className="card-image"/>

                        
                    </div>

                    <div className="card-info-child">
                        <h2>Tanya Jalal</h2>
                        <h4>Position</h4>
                            <p>Researcher</p>
                        <h4>Major</h4>
                        <p>Mathematical Analytics & Operations Research</p>
                    </div>

                    <div className="card-info-child">
                        <img src={TanyaHeadshot} alt="Tanya" className="card-image"/>
                    </div>
                </div>

            {/* researchers section  */}
            <h1>Developers</h1>

                {/* Haylie profile */}
                <div className="child">
                    <div className="card-info-top">
                        <p>
                            UC Davis Class of 2027
                        </p>

                        <img src={LinkedIn} alt="linkedin" className="card-image"/>

                        
                    </div>

                    <div className="card-info-child">
                        <h2>Haylie Tan</h2>
                        <h4>Position</h4>
                            <p>Developer</p>
                        <h4>Major</h4>
                        <p>Mathematics and Scientific Computation</p>
                    </div>

                    <div className="card-info-child">
                        <img src={HaylieHeadshot} alt="Haylie" className="card-image"/>
                    </div>
                </div>

                {/* Kelly profile */}
                <div className="child">
                    <div className="card-info-top">
                        <p>
                            UC Davis Class of 2026
                        </p>

                        <img src={LinkedIn} alt="linkedin" className="card-image"/>

                        
                    </div>

                    <div className="card-info-child">
                        <h2>Kelly Phan</h2>
                        <h4>Position</h4>
                            <p>Developer</p>
                        <h4>Major</h4>
                        <p>Computer Science</p>
                    </div>

                    <div className="card-info-child">
                        <img src={KellyHeadshot} alt="Kelly" className="card-image"/>
                    </div>
                </div>

                {/* Kylie profile */}
                <div className="child">
                    <div className="card-info-top">
                        <p>
                            UC Davis Class of 2026
                        </p>

                        <img src={LinkedIn} alt="linkedin" className="card-image"/>

                        
                    </div>

                    <div className="card-info-child">
                        <h2>Kylie Lallan</h2>
                        <h4>Position</h4>
                            <p>Developer</p>
                        <h4>Major</h4>
                        <p>Computer Science</p>
                    </div>

                    <div className="card-info-child">
                        <img src={KylieHeadshot} alt="Kylie" className="card-image"/>
                    </div>
                </div>

                {/* Jordan profile */}
                <div className="child">
                    <div className="card-info-top">
                        <p>
                            UC Davis Class of 2026
                        </p>

                        <img src={LinkedIn} alt="linkedin" className="card-image"/>

                        
                    </div>

                    <div className="card-info-child">
                        <h2>Jordan Thompson</h2>
                        <h4>Position</h4>
                            <p>Developer</p>
                        <h4>Major</h4>
                        <p>Computer Science</p>
                    </div>

                    <div className="card-info-child">
                        <img src={JordanHeadshot} alt="Jordan" className="card-image"/>
                    </div>
                </div>

                {/* Anvi profile */}
                <div className="child">
                    <div className="card-info-top">
                        <p>
                            UC Davis Class of 2026
                        </p>

                        <img src={LinkedIn} alt="linkedin" className="card-image"/>

                        
                    </div>

                    <div className="card-info-child">
                        <h2>Anvi Kalucha</h2>
                        <h4>Position</h4>
                            <p>Developer</p>
                        <h4>Major</h4>
                        <p>Computer Science</p>
                    </div>

                    <div className="card-info-child">
                        <img src={AnviHeadshot} alt="Anvi" className="card-image"/>
                    </div>
                </div>

                {/* Jade profile */}
                <div className="child">
                    <div className="card-info-top">
                        <p>
                            UC Davis Class of 2026
                        </p>

                        <img src={LinkedIn} alt="linkedin" className="card-image"/>

                        
                    </div>

                    <div className="card-info-child">
                        <h2>Xinhui Zhang</h2>
                        <h4>Position</h4>
                            <p>Developer</p>
                        <h4>Major</h4>
                        <p>Statistics</p>
                    </div>

                    <div className="card-info-child">
                        <img src={JadeHeadshot} alt="Jade" className="card-image"/>
                    </div>
                </div>

            {/* researchers section  */}
            <h1>Mentors</h1>

                {/* Grisha profile */}
                <div className="child">
                    <div className="card-info-top">
                        <p>
                            UC Davis Class of 2024
                        </p>

                        <img src={LinkedIn} alt="linkedin" className="card-image"/>

                        
                    </div>

                    <div className="card-info-child">
                        <h2>Grisha Bandodkar</h2>
                        <h4>Position</h4>
                            <p>Mentor</p>
                        <h4>Major</h4>
                        <p>Computer Science & Engineering</p>
                    </div>

                    <div className="card-info-child">
                        <img src={GrishaHeadshot} alt="Grisha" className="card-image"/>
                    </div>
                </div>

                {/* Divya profile */}
                <div className="child">
                    <div className="card-info-top">
                        <p>
                            UC Davis Class of 2024
                        </p>

                        <img src={LinkedIn} alt="linkedin" className="card-image"/>

                        
                    </div>

                    <div className="card-info-child">
                        <h2>Divya Gautam</h2>
                        <h4>Position</h4>
                            <p>Mentor</p>
                        <h4>Major</h4>
                        <p>Industrial and Product Design</p>
                    </div>

                    <div className="card-info-child">
                        <img src={DivyaHeadshot} alt="Divya" className="card-image"/>
                    </div>
                </div>

            </div>  
        </div>
    )
}