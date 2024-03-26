import React from 'react'
import './footer.css'
const Footer = () => {
    let getYear =new Date()
    let year = getYear.getFullYear()
  return (
    <>
        <div class="footer">
      <p>Copyright &copy; {year} -FuturestarsGaming</p>
    </div>
    </>
  )
}

export default Footer