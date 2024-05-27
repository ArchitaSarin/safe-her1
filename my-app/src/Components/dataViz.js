import React from 'react';
import '../App.css';
import '../Styles/dataViz.css';

import DataHeader from '../Images/dataViz-header.png'
import Warning from '../Images/data-warning.svg'

export const DataViz = () => {
    return (

        <div id="whole-page">
            
            <div id="data-header">
        <div>
            
        </div>
               <div> <h1 id="data-header-title">Data and Graphs</h1> </div>
               <div>  <p id="data-header-small-text">♡ Learn more about womens safety ♡</p></div>


                <div id="data-warning">

                    <div><img src={Warning}/></div>
                    <div>  <p id="data-warning-text">
                            The following information contains material on sexual violence. Please be in the correct head space prior to uncovering these facts.
                            </p>
                    </div>

                </div>

               
               
            </div>

            <div id="data-header-bottom-message-container">
                <div id="bottom-message-text"><p>Women face a myriad of challenges, like gender-based violence and inequality, in our everyday lives. Below are some statistics of what women still have to endure.</p> </div>


            </div>

       
            
        </div>
    )

}