import React from 'react';
import '../Styles/footer.css';
import '../App.css';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-col">
            <h4>Submissions</h4>
            <ul>
                <li><a href="#">Email us</a></li>
                <li><a href="#">blahblah@gmail.com</a></li>
            </ul>
            </div>

            <div className="footer-col">
            <h4>Contact</h4>
            <ul>
                <li><a href="#">linkedin</a></li>
                <li><a href="#">instagram</a></li>
            </ul>
            </div>

            <div className="footer-col">
            <h4>misc</h4>
            <ul>
                <li><a href="#">suggestions</a></li>
                <li><a href="#">d3c</a></li>
            </ul>
            </div>
        </div>
    )
}

// export default Home;