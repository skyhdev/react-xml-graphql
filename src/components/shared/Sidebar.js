import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import '../../styles/sidebar.css'
import * as RiIcon from "react-icons/ri";

function sidebar(props) {
    useEffect(() => {
        console.log(props.toggleSidebar);
    })
    const data = [
        {
            'name': 'Dashboard',
            'link': 'dashboard',
            'icon': <RiIcon.RiDashboard3Line className="linkIcon" />
        },
        {
            'name': 'Dashboard',
            'link': 'dashboard',
            'icon': <RiIcon.RiTruckLine className="linkIcon" />
        },
        {
            'name': 'Dashboard',
            'link': 'dashboard',
            'icon': <RiIcon.RiShoppingCart2Line className="linkIcon" />
        },
    ]
    if (props.toggleSidebar) {
        return (
            <Navbar inverse className="sidebarMenu sidebarMenuToggle">
                {/* <AiIcons.AiOutlineClose onClick={() => props.setToggleSidebar(!props.toggleSidebar)} className={styles.closeBtn} /> */}
                <div className="d-flex flex-column w-100">
                    <div className="w-100">
                        <div onClick={() => props.setToggleSidebar(!props.toggleSidebar)} className="closeBtn ml-auto mb-4">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="0.5" y="0.5" width="39" height="39" rx="7.5" fill="#C4C4C4" stroke="#505050" />
                                <path d="M11 29L29 11M11 11L29 29L11 11Z" stroke="#757575" stroke-width="2" />
                            </svg>
                        </div>
                    </div>
                    {data.map((link) => {
                        return (
                            <div className="ml-2 mb-4">
                                <Link className="d-flex items-center align-items-center" to={link.link}>
                                    <span>{link.icon}</span>
                                    <span className="linkName ml-2">{link.name}</span>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </Navbar>
        )
    }
    return (
        <Navbar inverse className="sidebarMenu">
            <div className="d-flex flex-column w-100">
                {data.map((link) => {
                    return (
                        <div className="mb-4">
                            <Link to={link.link}>
                                <span>{link.icon}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </Navbar>
    )
}

export default sidebar
