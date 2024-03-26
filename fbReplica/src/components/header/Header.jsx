import React, { useContext, useState } from "react";
import "./header.css";
import {
  logo,
  notification,
  inbox,
  video,
  search,
  profilePic,
  feedback,
  setting,
  arrow,
  help,
  display,
  logout,
  fbicon,
} from "../../indexImg";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import {IoIosHome} from 'react-icons/io'
import {MdForwardToInbox} from 'react-icons/md'
import {MdOutlineOndemandVideo} from 'react-icons/md'
import {MdOutlineGroups2} from 'react-icons/md'
import DarkLightMode from "../context/DarkMode";
import { NavLink } from "react-router-dom";

const settingLinks = [
  { id: 1, img: setting, text: "Settings & Privacy", arrowImg: arrow },
  { id: 2, img: help, text: "Help & Support", arrowImg: arrow },
  { id: 3, img: display, text: "display & Accessibility", arrowImg: arrow },
  { id: 4, img: logout, text: "Logout", arrowImg: arrow },
];

const activeLink = ({isActive})=>(isActive?'active':'icon-color')

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [focused,setFocused] = useState(false)
  const settingMenuToggle = () => {
    setToggle(!toggle);
  };
  const handleIput =()=>{
    setFocused(!focused)
  }
  const {theme,toggleTheme,onswitch} = useContext(DarkLightMode)
  
  return (
    <>
      <nav data-theme={theme}>
        <div className="nav-left">
          <img src={fbicon}  className="logo" />
          <ul>
            <li>
            <NavLink to='/' className={activeLink}>
            <IoIosHome />
            </NavLink>
            </li>
            <li>
            <MdForwardToInbox />
            </li>
            <li>
            <MdOutlineOndemandVideo />
            </li>
            <li>
            <MdOutlineGroups2 />

            </li>
          </ul>
        </div>

        <div className="nav-right">
          <div className={focused?'search-box search-box-focused':'search-box'}>
            <img src={search} alt="" />
            <input type="text" placeholder="search here..." onClick={handleIput}/>
          </div>
          <div className="nav-user-icon online" onClick={settingMenuToggle}>
            <img src={profilePic} alt="" />
            {toggle?<FaCaretUp size={20} className="icon"/>:<FaCaretDown size={20} className="icon"/>}
            
          </div>
        </div>
        {/* <!-- setting-menu --> */}

        <div
          className={
            toggle ? "setting-menu setting-menu-height" : "setting-menu"
          }
        >
          <div id="dark-btn"  onClick={toggleTheme}>
            <span className={onswitch?'ball moved':'ball'}></span>
          </div>

          <div className="setting-menu-inner">
            <div className="user-profile">
              <img src={profilePic} alt="" />
              <div>
                <p>Basit</p>
                <a href="#">See Your Profile</a>
              </div>
            </div>
            <hr />
            <div className="user-profile">
              <img src={feedback} alt="" />
              <div>
                <p>Give Feedback</p>
                <a href="#">Help us to improve the new design</a>
              </div>
            </div>
            <hr />

            {settingLinks.map((link) => {
              const { id, img, text, arrowImg } = link;
              return (
                <div key={id} className="setting-links">
                  <img src={img} alt="" className="settings-icon" />
                  <a href="#">
                    {text} <img src={arrowImg} width="10px" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
