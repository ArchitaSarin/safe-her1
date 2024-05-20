import React from 'react';
import '../App.css';
import '../Styles/resources.css';
import HeaderImage from '../Images/resources-header.png';
import Heart from '../Images/heart.svg';
import Phone from '../Images/phone.svg';
import Globe from '../Images/resource-globe.svg';




export const Resources = () => {
    return (
       
        <div id="resources-header">
            <div id="header-text">
                <h1 id="header-main-text">Resources</h1>
                <p id="header-small-text"> <img src={Heart} class="heart"/>We want you to be safe, happy and heard <img src={Heart} class="heart"/></p>

            </div>
            
           
            <div id="header-box-container">

                
                <div class="header-box" id="SA-hotline">

                    <div class="header-box-text">
                        <h2 class="header-box-title">  <img src={Globe}/> Confidental 24/7 Support</h2>
                        <h2 class="header-box-title-2">National Sexual Assault Hotline</h2>
                        <p><b>Languages:</b> English, Spainish</p>
                    
                    </div>

                    <div class="header-box-button-container">
                        <p class="box-phone">(800) 656-4673</p>

                        <div class="header-box-button-level-2">
                            <button class="header-box-button">Spainish Live Video Chat</button>
                            <button class="header-box-button"> Spainish Live Video Chat</button>

                        </div>

                    </div>
                    

                </div>

                <div class="header-box" id="911-box">

                    <div class="header-box-text">
                        <h2 class="header-box-title">  <img src={Globe}/> Confidental 24/7 Support</h2>
                        <h2 class="header-box-title-2">National Sexual Assault Hotline</h2>
                        <p><b>Languages:</b> English, Spainish</p>
                    
                    </div>

                    <div class="header-box-button-container" >
                        <p class="box-phone">(800) 656-4673</p>

                        <div class="header-box-button-level-2">
                            <button class="header-box-button">Spainish Live Video Chat</button>
                            <button class="header-box-button"> Spainish Live Video Chat</button>

                        </div>

                    </div>
                </div>

                  <div class="header-box" id="legal-box">

                    <div class="header-box-text">
                        <h2 class="header-box-title">  <img src={Globe}/> Confidental 24/7 Support</h2>
                        <h2 class="header-box-title-2">National Sexual Assault Hotline</h2>
                        <p><b>Languages:</b> English, Spainish</p>
                    
                    </div>

                    <div class="header-box-button-container" >
                        <p class="box-phone">(800) 656-4673</p>

                        <div class="header-box-button-level-2">
                            <button class="header-box-button">Spainish Live Video Chat</button>
                            <button class="header-box-button"> Spainish Live Video Chat</button>

                        </div>

                    </div>
                </div>

            </div>
        
         <p id="footer-note">We are based in UC Davis, so most of our resources will be located here</p>
         
        </div>
      
      
    )
}

// export default Home;