
import './main.css'
import LeftSideBar from '../content/leftsidebar/LeftSideBar'
import MainContent from '../content/maincontent/MainContent'
import RightSidebar from '../content/rightsidebar/RightSidebar'
import { useContext } from 'react'
import DarkLightMode from '../context/DarkMode'

const MainPage = () => {
  const {theme} = useContext(DarkLightMode)
  return (
    <>
        <div data-theme = {theme} className='container'>
        <div className='left-sidebar'>
        <LeftSideBar/>
        </div>
        <div className='main-content'>
        <MainContent/>
        </div>
        <div className='right-sidebar'>
        <RightSidebar/>
        </div>
        </div>
    </>
  )
}

export default MainPage