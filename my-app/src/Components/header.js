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
                    <a href="/resources" ><li>Logo</li></a>
                    <a href="/blog" ><li>Blog</li></a>
                    <a href="/art" ><li>Art</li></a>
                </ul>
            </nav>
        </div>
    )
}

// export default Home;