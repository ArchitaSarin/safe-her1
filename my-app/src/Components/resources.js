import React from 'react';
import '../App.css';
import '../Styles/resources.css';
import HeaderImage from '../Images/resources-header.png';
import Heart from '../Images/heart.svg';
import Phone from '../Images/pink-phone.svg';
import Globe from '../Images/resource-globe.svg';
import PinkLocation from '../Images/pink-location.svg';
import GreenLoaction from '../Images/green-location.svg';

import Card1 from '../Images/resource-card-1.png';
import Card2 from '../Images/resource-card-2.png';
import Card3 from '../Images/resource-card-3.png';






export const Resources = () => {
    return (
<div>


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
                        <h2 class="header-box-title">  <img src={Phone}/> If this is an emergency, call 911.</h2>
                        <h2 class="header-box-title-2">National Domestic Violence Hotline</h2>
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
                        <h2 class="header-box-title">  <img src={Globe}/> Legal Advice</h2>
                        <h2 class="header-box-title-2">Womens Law</h2>
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

        <div id="resouce-section">


            <div id="resource-1" class="resouce-section">
                <div class="resource-title">
                    <h2> <img src={PinkLocation}/> UC Davis Specific Resources</h2>

                </div>
                <div class="resource-wraper">
                    <div class="resource-images">
                        <img src={Card1} class="image-card"/>
                        <img src={Card2} class="image-card"/>
                        <img src={Card3} class="image-card"/>

                        <img src={Card1} class="image-card"/>
                        <img src={Card2} class="image-card"/>
                        

                     
                

                    </div>

                </div>

            </div>

            <div id="resource-1" class="resouce-section">
                <div class="resource-title">
                    <h2> <img src={PinkLocation}/> UC Davis Specific Resources</h2>

                </div>
                <div class="resource-wraper">
                    <div class="resource-images">

                        <a href="" target="_blank">   <img src={Card1} class="image-card"/>  </a>
                        <a href="" target="_blank">   <img src={Card2} class="image-card"/>  </a>
                        <a href="" target="_blank">   <img src={Card3} class="image-card"/>  </a>
                        <a href="" target="_blank">   <img src={Card1} class="image-card"/>  </a>
                        <a href="" target="_blank">   <img src={Card3} class="image-card"/>  </a>
              
                    
                        

                     
                

                    </div>

                </div>

            </div>


        </div>

       
       
       
       
 </div>

       
      
      
    )
}

// export default Home;