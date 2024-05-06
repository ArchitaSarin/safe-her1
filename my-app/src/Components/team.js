import React from 'react';
import '../App.css';
import '../Styles/team.css';
import {Card} from "./individual components/member";

export const Team = () => {
    return (
        <div> 
            <div className="about-us-team">
                <h1> About Us </h1>
                <p> blah blah </p>
            </div>
            <div className="intro">
                <h1> Meet Us </h1>
                <p>UC Davis students wanting to make a change.</p>
                
                <div>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>

            <div className="team_impact">
                
            </div>
        </div>
    )
}