import React from 'react';
import '../App.css';
import '../Styles/resources.css';

export const Resources = () => {
    return (
      
        <div id="main-page">

            <div id="header">
                <h1 class="header-text">Resources</h1>
                <p id="header-small-text">We want you to be safe, happy and heard</p>
            </div>
            <div id="header-two">
                <p id="header-two-text">
                Because we are based in  UC Davis, most of our resources will be located there.
                <br></br>
                <br></br>
                If this is an emergency,  call 911.
                </p>

            </div>

            <div id="card-section">
                <div id="resource-cards">
                    <h1 class="card-header">Center for Resources</h1>
                    <hr class="line"/>

                </div>

                <div id="health-cards">
                    <h1 class="card-header">Mental Health</h1>
                    <hr class="line"/>

                </div>

                <div id="domestic--cards">
                <h1 class="card-header">Domestic Violence</h1>
                <hr class="line"/>

                </div>

                

            </div>


            


        </div>
    )
}

// export default Home;