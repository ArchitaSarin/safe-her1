import React from 'react';
import '../Styles/header.css';
import '../App.css';
import { Row, Col, Nav, Navbar } from 'react-bootstrap';

export const Header = () => {
    return (
        // <div class="navbar-container">
        //     <nav>
        //         <ul>
        //             <a href="/aboutme"><li>About</li></a>
        //             <a href="/resources" ><li>Resources</li></a>
        //             <a href="/resources" ><li>Logo</li></a>
        //             <a href="/blog" ><li>Blog</li></a>
        //             <a href="/art" ><li>Art</li></a>
        //         </ul>
        //     </nav>
        // </div>

        <div className="navbar-container">
        <Navbar expand="lg" className="bg-body-tertiary navbar-subcontainer"  sticky="top">
            <Row className="navbar-row">
                <Col sm = {2} md={2} lg={2}>
                    <Navbar.Brand className="logo-text" href="/">safeHER</Navbar.Brand>
                </Col>
                <Col>
                    <Nav className="d-flex justify-content-end">
                        <Nav.Link className="navbar-text" href="/">Home</Nav.Link>
                        <Nav.Link className="navbar-text" href="/team">About</Nav.Link>
                        <Nav.Link className="navbar-text" href="/resources">Resources</Nav.Link>
                        <Nav.Link className="navbar-text" href="/rant">Rant Bot</Nav.Link>
                        <Nav.Link className="navbar-text" href="/forum">Forum</Nav.Link>
                        <Nav.Link className="navbar-text" href="/art">Art</Nav.Link>
                        <Nav.Link className="navbar-text" href="/login">Login</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Navbar>
        </div> 
    )
}

export default Header;