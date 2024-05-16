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
                    <p> posts </p>
                    <div class='tile'></div>
                    <div class='tile'></div>
                    <div class='tile'></div>
                </div>
            </div>
        </div>
    )
}

export default Forum;
