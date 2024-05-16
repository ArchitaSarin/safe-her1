import React from 'react';
import '../App.css';
import '../Styles/forum.css';


export const Forum = () => {
    return (
        <div>
            <div className="forum-intro">
                <p>Create a New Post</p>
            </div>

            <div className='parent'>

                <div className='left-child'>
                    <input class="w3-input" type="text" value="Title"/>
                    <input class="w3-input" type="text" value="What's on your mind?"/>
                </div>

                <div className='right-child'>
                    <div class='tile'>
                        <img/>
                        <h2> Photogenic Phrases </h2>
                        <p>
                            I’m reading a book on anti gravity it’s impossible to put down!
                        </p>

                    </div>
                    
                    <div class='tile'>
                        <img/>
                        <h2> Photogenic Phrases </h2>
                        <p>
                            I’m reading a book on anti gravity it’s impossible to put down!
                        </p>

                    </div>

                    <div class='tile'>
                        <img/>
                        <h2> Photogenic Phrases </h2>
                        <p>
                            I’m reading a book on anti gravity it’s impossible to put down!
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forum;
