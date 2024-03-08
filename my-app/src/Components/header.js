import React from 'react';
import '../Styles/header.css';
import '../App.css';

export const Header = () => {
    return (
        <div class="navbar-container">
            <nav>
                <ul>
                    <a href="Pages/about.html" ><li>About</li></a>
                    <a href="Pages/resources.html" ><li>Resources</li></a>
                    <a href="Pages/resources.html" ><li>Logo</li></a>
                    <a href="Pages/blog.html" ><li>Blog</li></a>
                    <a href="Pages/card_layout.html" ><li>Art</li></a>
                </ul>
            </nav>
        </div>
    )
}

// export default Home;