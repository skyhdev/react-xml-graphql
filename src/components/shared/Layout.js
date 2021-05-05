import React, { useState, useEffect } from 'react'
import Header from './Header';
import Sidebar from './Sidebar'
import { useHistory } from "react-router-dom";
import netlifyIdentity from 'netlify-identity-widget';

export default function Layout(props) {
  const history = useHistory();
  const [toggleSidebar, setToggleSidebar] = useState(true);

  useEffect(() => {
    if (!netlifyIdentity.currentUser()) {
      netlifyIdentity.on('init', user => {
        if (!user) {
          history.push("/login");
        }
      });
      netlifyIdentity.init();
    }
  }, []);


  return (
    <div>
      <div className="wrapper">
        <div className="parent-container">
          <div className="side-bar">
            <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} active={props.active} />
          </div>
          <div className="content-container">
            <Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} active={props.active} />
            {props.children}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .wrapper{
            align-items: stretch;
            max-height: 100vh;
        }
        .parent-container{
            display: flex;
        }
        .content-container{
            height: 100vh;
            width: 100%;
            background-color: #F4F4F4;
        }
        
      `}</style>
    </div>
  )
}
