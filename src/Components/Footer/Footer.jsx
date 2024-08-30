import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
       <div className='main-footer'>
     <div>
        <h1>Programs</h1>
        <div>Coporate</div>
        <div>One to ONe</div>
        <div>Consulting</div>
     </div>
     <div>
        <h1>Services</h1>
        <div>Coporate</div>
        <div>One to ONe</div>
        <div>Consulting</div>
     </div>
     <div>
        <h1>Contact</h1>
        <div>Coporate</div>
        <div>One to ONe</div>
        <div>Consulting</div>
     </div>
     <div>
        <h1>Newsletter</h1>
        <input type="text" style={{padding:"0.5vw",width:"20vw"}} placeholder='Email Address' />
        <button>Subscribe</button>
     </div>
      </div>
  
  </div>
  )
}

export default Footer
