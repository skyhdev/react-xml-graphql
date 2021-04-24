import React from 'react'
import { Nav, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import * as FaIcons from "react-icons/fa";
import "../../styles/header.css";

const Header = (props) => {
    return (
        <Navbar expand="lg" className="headerClass">
            <div>
                {
                    props.toggleSidebar ? <></> : <FaIcons.FaBars onClick={() => props.setToggleSidebar(!props.toggleSidebar)} className="toggleBtn ml-2" />
                }
            </div>
            <div className="ml-auto">
                <div className="d-flex justify-between">
                    <div >
                        Feedback
                    </div>
                    <div className="ml-2">
                        |
                    </div>
                    <div className="ml-2">
                        Support
                    </div>
                    <div className="ml-2">
                        <input type="text" className="searchInput"></input>
                    </div>

                </div>

            </div>
        </Navbar >
    )
}

export default Header
