import React from 'react';
import '../App.css';
import '../Styles/art.css';
import Alley from '../Images/alley.jpg';
import Build from '../Images/build.png';
import ColorBG from '../Images/coloredbackground.jpg';
import Face from '../Images/face.png';
import Girlhood from '../Images/girlhood.jpg';
import Group from '../Images/group.png';
import Hike from '../Images/hike.png';
import Hold from '../Images/hold.png';
import Mili from '../Images/mili.png';

export const Art = () => {
    return (
        <div>
            <div className="art-intro">
                <div class="title-container">
                    <span class="title-text1"> Art </span>
                </div>

                <p class="body-text">
                    Mission statement + short bio
                </p>

                <btn class="index-btn"> Submit </btn>
            </div>

            <div class="grid-container">
                <div class="grid-item">
                    <img src={Girlhood} alt="girlhood abstract art"/>
                    <span>Girlhood by Sania</span>
                </div>
                
                <div class="grid-item">
                    <img src={Build} alt="Woman in front of building"/>
                    <span>Img 2</span>
                </div>
                
                <div class="grid-item">
                    <img src={ColorBG} alt="Colors"/>
                    <span>Img 3</span>
                </div>
                
                <div class="grid-item">
                    <img src={Face} alt="face"/>
                    <span> Img 4</span>
                </div>
                
                <div class="grid-item">
                <img src={Alley} alt="Alleyway"/>
                    <span>Img 5</span>
                </div>
                
                <div class="grid-item">
                    <img src={Group} alt="group of figures art piece"/>
                    <span>Img 6</span>
                </div>
        
                <div class="grid-item">
                    <img src={Hike} alt="hike"/>
                    <span>Img 7</span>
                </div>
                    
                <div class="grid-item">
                    <img src={Hold} alt="hold"/>
                    <span>Img 8</span>
                </div>
        
                <div class="grid-item">
                    <img src={Mili} alt="Mili in nature"/>
                    <span>Img 9</span>
                </div>
                    
                <div class="grid-item">
                    <a href="https://i.ebayimg.com/images/g/ARsAAOSw9rVeNSI6/s-l1600.jpg"><img src="https://i.ebayimg.com/images/g/ARsAAOSw9rVeNSI6/s-l1600.jpg" /></a>
                    <span>Img 10</span>
                </div>

                <div class="grid-item">
                    <img src={Girlhood} alt="girlhood abstract art"/>
                    <span>Girlhood by Sania</span>
                </div>
                
                <div class="grid-item">
                    <img src={Build} alt="Woman in front of building"/>
                    <span>Img 2</span>
                </div>
                
                <div class="grid-item">
                    <img src={ColorBG} alt="Colors"/>
                    <span>Img 3</span>
                </div>
                
                <div class="grid-item">
                    <img src={Face} alt="face"/>
                    <span> Img 4</span>
                </div>
                
                <div class="grid-item">
                <img src={Alley} alt="Alleyway"/>
                    <span>Img 5</span>
                </div>
                
                <div class="grid-item">
                    <img src={Group} alt="group of figures art piece"/>
                    <span>Img 6</span>
                </div>
        
                <div class="grid-item">
                    <img src={Hike} alt="hike"/>
                    <span>Img 7</span>
                </div>
                    
                <div class="grid-item">
                    <img src={Hold} alt="hold"/>
                    <span>Img 8</span>
                </div>
        
                <div class="grid-item">
                    <img src={Mili} alt="Mili in nature"/>
                    <span>Img 9</span>
                </div>
            </div>
        </div>
    )
}

// export default Home;