import React from 'react';
import '../App.css';
import '../Styles/forum.css';


export const Forum = () => {
    return (
        <div>
            <div className="forum-intro">
                <h1>Forum</h1>

                <div className="forum-search-bar">
                <input type="text" placeholder="Search here"></input>
                <button>
                    <a href="#">Search</a>
                    <ion-icon name="search-outline" class="search-icon"></ion-icon>
                </button>
                
            </div>
            </div>

            <div className='parent'>
                <div className='child'>child 1</div>
                <div className='child'>child 2</div>
            </div>
        </div>
    )
}

export default Forum;
