import React from 'react'
import './right.css'
import advertisment from '../../../assets/advertisement.png'
import member1 from '../../../assets/member-1.png'
import member2 from '../../../assets/member-2.png'
import member3 from '../../../assets/member-3.png'
const RightSidebar = () => {
  return (
    <>
      <div className="sidebar-title">
          <h4>Events</h4>
          <a href="#">See All</a>
        </div>
        <div className="event">
          <div className="left-event">
            <h3>27</h3>
            <span>March</span>
          </div>
          <div className="right-event">
            <h4>Social Media</h4>
            <p><i className="fa-solid fa-location-dot ic"></i>Romeo Tech Park</p>
            <a href="#">More Info</a>
          </div>
        </div>
        <div className="event">
          <div className="left-event">
            <h3>14</h3>
            <span>April</span>
          </div>
          <div className="right-event">
            <h4>Mobile Marketing</h4>
            <p><i className="fa-solid fa-location-dot ic"></i>Romeo Tech Park</p>
            <a href="#" className="link">More Info</a>
          </div>
        </div>
        <div className="sidebar-title">
          <h4>Advertisement</h4>
          <a href="#">Close</a>
        </div>
        <img
          src={advertisment}
          className="sidebar-ads"
        />

        <div className="sidebar-title">
          <h4>Conversation</h4>
          <a href="#">Hide Chat </a>
        </div>

        <div className="online-list">
          <div className="online">
            <img src={member1}/>
          </div>
          <p>Puntina</p>
        </div>
        <div className="online-list">
          <div className="online">
            <img src={member2} />
          </div>
          <p>NightMare</p>
        </div>
        <div className="online-list">
          <div className="online">
            <img src={member3} />
          </div>
          <p>Jackline</p>
        </div>
    </>
  )
}

export default RightSidebar