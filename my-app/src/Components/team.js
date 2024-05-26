import React from 'react';
import '../App.css';
import '../Styles/team.css';
import {Card} from "./individual components/member";
/* import {Archita} from "./individual components/member";
import {Giang} from "./individual components/member";
import {Grisha} from "./individual components/member"; */

const boardMembers = [
    { name: 'Archita Sarin', pronouns: 'she/her', position: 'Project Manager', major: 'Computer Science', year: '2027', imageUrl: '/Images/headshots/archita.png' },
    { name: 'Second Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year', imageUrl: '../Images/headshots/archita.png' },
    { name: 'Third Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year', imageUrl: '../../Images/headshots/archita.png' },
    { name: 'Fourth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year', imageUrl: '/Images/headshots/archita.png' },
    { name: 'Fifth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year', imageUrl: '../../Images/archita.png' },
    { name: 'Sixth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year', imageUrl: '/path/to/image1.jpg' },
    {
        name: 'Seventh Last',
        pronouns: 'pronouns/pronouns',
        position: 'Position',
        major: 'x major',
        year: 'x year',
        imageUrl: '/path/to/image1.jpg'
    }
    // Add more board members as needed
]

export const Team = () => {
    return (
        <div> 
            {/* <div className="about-us-team">
                <h1> Meet Your Team </h1>
                <h3>
                    The individuals behind safeHER.
                </h3>
            </div>
            <div className="intro">
                <h1> Project Managers </h1> 
                <p>UC Davis students wanting to make a change.</p>
                 */}
                
                    {/* <Archita/>
                    <Giang/>
                    <Grisha/> 

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/> */}
                <div className="member-container">
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
                </div>
                
            </div>
    )
}