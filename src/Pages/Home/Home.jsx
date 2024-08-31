import React, {useState, useContext } from "react";
import icon from "./fav.jpg";
import slide1 from "./slider_1.jpg";
import blog1 from "./blog_01.jpg"
import blog2 from "./blog_02.jpg"
import blog3 from "./blog_03.jpg"
import nurse from "./why.jpg";
import "./Home.css";
import Login from "../Login/Login";
import { AppContext } from "../../context";
import Signup from "../Signup/Signup";
const Home = () => {
  const {register,Menu} = useContext(AppContext); 
  return (
    <div>
       {/* {Menu && <Login/>} */}
       {/* {register && <Signup/>} */}
      <img style={{ objectFit:"cover", width:"100%",paddingTop:"7vw"}} src={slide1} alt="" />
      <div class="sec2">
        <h1>Integrated Hospital Management System</h1>
        <div style={{color:"#6a6a6a"}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animidolor
          sit amet consectetur adipisicing elit. Animi, dolorum explicabo.
          Veritatis atque vitae, ipsa aperiam dolorum ea architecto molestias.
        </div>
        <div class="sec-buttons">
          <button>Book an Appointment</button>
        </div>
      </div>
      <div class="sec3">
        <div class="sec3-content">
          <img src={icon} alt="" />
          <h1>Bed Availabilty</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            debitis!Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div class="sec3-content" style={{ backgroundColor:" #0085bc" }}>
          <img src={icon} alt="" />
          <h1>Doctor Availabilty</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            debitis!Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div class="sec3-content">
          <img src={icon} alt="" />
          <h1>Medicines Availabilty</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            debitis!Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div class="sec3-content" style={{ backgroundColor: "#0085bc" }}>
          <img src={icon} alt="" />
          <h1>Acceptable Policies</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            debitis!Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
      <div class="sec4">
        <div>
          <h1>
            Why choose Health Care with <br />
            Medical Hospital
          </h1>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            neque libero, pulvinar et elementum quis, facilisis eu ante. Mauris
            non placerat sapien. Pellentesque tempor arcu non odio scelerisque
            ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nam varius eros consequat auctor gravida. Fusce tristique
            lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices
            mauris. Ut ultricies lacus a rutrum mollis. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Sed porta dolor quis felis pulvinar dignissim. Etiam nisl ligula,
            ullamcorper non metus vitae, maximus efficitur mi. Vivamus ut ex
            ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna,
            volutpat vel augue eget, iaculis tristique dui.
          </div>
        </div>
        <img src={nurse} alt="" />
      </div>
      <div class="sec5">
       
<div style={{padding:"3vw"}}>
<h1 style={{fontWeight:"400", fontSize:"3vw"}}>Our Key Features</h1>
<h5 style={{fontWeight:"600", fontSize:"1vw"}}>Take a look at some of our key features</h5>
</div>
        <div class="sec5-grid">
          <div class="sec5-content">
            <img src={icon} alt="" />
            <h1>Doctors Availabilty</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              erat nec leo lobortis blandit.
            </div>
          </div>
          <div class="sec5-content">
            <img src={icon} alt="" />
            <h1>Bed Availabilty</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              erat nec leo lobortis blandit.
            </div>
          </div>
          <div class="sec5-content">
            <img src={icon} alt="" />
            <h1>Blood Availabilty</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              erat nec leo lobortis blandit.
            </div>
          </div>
          <div class="sec5-content">
            <img src={icon} alt="" />
            <h1>Policies Applicable</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              erat nec leo lobortis blandit.
            </div>
          </div>
          <div class="sec5-content">
            <img src={icon} alt="" />
            <h1>Book Appoiment online</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              erat nec leo lobortis blandit.
            </div>
          </div>
          <div class="sec5-content">
            <img src={icon} alt="" />
            <h1>Location Based Searches</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              erat nec leo lobortis blandit.
            </div>
          </div>
        </div>
      </div>

      <div class="sec6">
       
<div style={{padding:"3vw"}}>
<h1 style={{fontWeight:"400", fontSize:"3vw"}}>Our Blog</h1>
<h5 style={{fontWeight:"600", fontSize:"1vw"}}>Take a look at what people say about US</h5>
</div>
        <div class="sec6-grid">
          <div class="sec6-content">
            <img src={blog1} alt="" />
            <h1>Methods of Recuirtments</h1>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.
            </div>
          </div>
          <div class="sec6-content">
            <img src={blog2} alt="" />
            <h1>Methods of Recuirtments</h1>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.
            </div>
          </div>
          <div class="sec6-content">
            <img src={blog3} alt="" />
            <h1>Methods of Recuirtments</h1>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.
            </div>
          </div>
          
        </div>
        </div>
    </div>
  );
};

export default Home;
