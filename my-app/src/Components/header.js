import React from 'react';
import '../Styles/header.css';
import '../App.css';

export const Header = () => {
    return (
        <div class="navbar-container">
            <nav>
                <ul>
                    <a href="/aboutme"><li>About</li></a>
                    <a href="/resources" ><li>Resources</li></a>
                    <a href="Pages/resources.js" ><li>Logo</li></a>
                    <a href="Pages/blog.js" ><li>Blog</li></a>
                    <a href="Pages/card_layout.js" ><li>Art</li></a>
                </ul>
            </nav>
        </div>
    )
}

// export default Home;