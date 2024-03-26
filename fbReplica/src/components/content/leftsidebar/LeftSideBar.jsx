import React from 'react'
import './left.css'
import { friends, group, marketplace, news, shortcut1, watch } from '../indexContImg'
import { useContext } from 'react'
import DarkLightMode from '../../context/DarkMode'


const links = [
  {id:1,img:news,text:'latest news'},
  {id:2,img:friends,text:'friends'},
  {id:3,img:group,text:'Groups'},
  {id:4,img:marketplace,text:'Marketplace'},
  {id:5,img:watch,text:'Watch'},
  
]

const LeftSideBar = () => {
  
  const {theme} = useContext(DarkLightMode)
  
  return (
    <>
    <div data-theme = {theme}>
    <div className='imp-links' >
      {links.map((linko)=>{
        const {id,img,text} = linko
        
        return(
          <a href="#" key={id}>
            <img src={img} />
            {text}
          </a>
        )
        
      })}
      <a href="#">See More</a>
    </div>
    <div className='shortcut-links'>
      <p>Your shortcuts</p>
      <a href="#">
        <img src={shortcut1}  />
        web designing
      </a>
      <a href="#">
        <img src={shortcut1}  />
        web designing
      </a>
      <a href="#">
        <img src={shortcut1}  />
        web designing
      </a>
      <a href="#">
        <img src={shortcut1}  />
        web designing
      </a>
    </div>
    </div>
    </>
  )
}

export default LeftSideBar