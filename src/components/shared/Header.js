import React from 'react'
import { Nav, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import * as FaIcons from "react-icons/fa";
import "../../styles/header.css";
import { useTranslation } from 'react-i18next';

const Header = (props) => {
    const { t } = useTranslation();
    const changeLanguage = (e) => {
        const lang = e.target.value;
        i18n.changeLanguage(lang);
    };
    return (
        <Navbar expand="lg" className="headerClass">
            <div>
                {
                    props.toggleSidebar ? <></> : <FaIcons.FaBars onClick={() => props.setToggleSidebar(!props.toggleSidebar)} className="toggleBtn ml-2" />
                }
            </div>
            <div className="ml-auto">
                <div className="d-flex justify-between">
                    {/* <div className='ml-2'>
                        <select id='languageSelecter' onChange={changeLanguage}>
                            <option value='en'>English</option>
                        </select>
                    </div> */}
                    <div>
                        {t('Company')}
                    </div>
                    <div className="ml-3">
                        {t('Feedback')}
                    </div>
                    <div className="ml-2">
                        |
                    </div>
                    <div className="ml-2">
                        {t('Support')}
                    </div>
                    <div className="mx-3">
                        <input type="text" className="searchInput"></input>
                    </div>

                </div>

            </div>
        </Navbar >
    )
}

export default Header
