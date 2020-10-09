import React from 'react';
import logo from '../img/logo.png';
import { Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import '../navbar.css';

export function UserNavbar() {
    return (
        <Navbar className="main-navbar" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
        </Navbar>
        
    );
}