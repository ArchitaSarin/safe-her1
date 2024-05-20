import React from 'react';
import '../App.css';
import '../Styles/resources.css';
import HeaderImage from '../Images/resources-header.png'
import Heart from '../Images/heart.svg'


export const Resources = () => {
    return (
        <div id="resources-header">
            <div id="header-text">
                <h1 id="header-main-text">Resources</h1>
                <p id="header-small-text"> <img src={Heart} class="heart"/>We want you to be safe, happy and heard <img src={Heart} class="heart"/></p>

            </div>

            <div id="header-box-container">
                <div class="header-box">
                    <div class="header-box-text">
                        <h2>Confidental 24/7 Support</h2>
                        <h3>National Sexual Assault Hotline</h3>
                        <p>Languages: English, Spainish</p>
                    
                    </div>

                    <div class="header-box-button">
                        <p class="box-phone">(800) 656-4673</p>

                    </div>
                    


                </div>

            </div>
        
          


        </div>
      
      
    )
}

// export default Home;