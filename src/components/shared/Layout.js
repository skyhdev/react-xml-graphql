import React, { useState } from 'react'
import Header from './Header';
import Sidebar from './Sidebar'

export default function Layout(props) {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div>
      <div className="wrapper">
        <div className="parent-container">
          <div className="side-bar">
            <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
          </div>
          <div className="content-container">
            <Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            {props.children}
          </div>
        </div>
      </div>

      <style jsx global>{`
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
        }
      `}</style>
    </div>
  )
}
