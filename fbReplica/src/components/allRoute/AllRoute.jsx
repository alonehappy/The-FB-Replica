import React from 'react'
import './all.css'
import { Link } from 'react-router-dom'
const AllRoute = () => {
  return (
    <>
        <div className='main-container'>
            <div className='content'>
               <h3>Sorry!!!</h3>
               <p>Page Not Found 404...</p>
               <Link to='/'>
               <button>&larr; Go Back To Home</button>
               </Link>
               
            </div>
        </div>
    </>
  )
}

export default AllRoute