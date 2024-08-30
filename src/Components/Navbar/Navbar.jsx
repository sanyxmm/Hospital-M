import React ,{ useState , useContext}  from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from './WhatsApp Image 2024-08-30 at 10.56.00_55b7501f.jpg'
import { AppContext } from '../../context';
const Navbar = () => {
  const {openMenu} = useContext(AppContext);
  return (
    <nav className='navbar'>
    <img id='logo' src={logo} alt="" />
      <ul className='navbtns'>
          <li> <a href="/Home">Home</a></li>
          <li> <a href="/Services">Services</a></li>
          <li><a href="/eBloodBank">eBloodBank</a></li>
          <li><a href="/Contactus">Contact us</a></li>
          <li><a href="/Aboutus">About us</a></li>
          <li> <a href="PatientAdmission">Patient Admission</a></li>
      </ul>
      <div>
        <button  id='nav-button' onClick={openMenu}>Login/Signup</button>
      </div>
    </nav>
  )
}
export default Navbar
