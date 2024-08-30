import React, { useState, useRef, useContext } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { AppContext } from "../../context";
import "./Signup.css";

const Signup = ({}) => {
  const { closeMenu,closeRegister,openRegister, openlogPop, openlogchk } = useContext(AppContext);

  return (
    <div class="signupForm">
   <OutsideClickHandler onOutsideClick={()=>{
    closeMenu();
    closeRegister();
   }}>
   <div class="form-containe">
        
        <form>
        <section class="sectio">
        <h1>Sign up</h1>
               <div style={{display:"flex",gap:"3vw",width:"100vw"}}>
                 <div>
                 <label for="firstname">First name(s):</label>
                <input type="text" id="firstname" name="firstname"/>
                 </div>

                <div>
                <label for="lastname">Last name:</label>
                <input type="text" id="lastname" name="lastname"/>
                </div>
                </div>

            
                <label for="dob">Date of birth:</label>
                <input type="date" id="dob" name="dob"/>

                <label>Gender:</label>
                <input type="radio" id="male" name="gender" value="Male"/>
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="Female"/>
                <label for="female">Female</label>
                <input type="radio" id="other" name="gender" value="Other"/>
                <label for="other">Other</label>
    
             <div style={{display:"flex",gap:"3vw",width:"100vw"}}>
              <div >   
             <label for="address">Residential address:</label>
                <input type="text" id="address" name="address"/>
              </div>
             <div>
             <label for="address">PinCode:</label>
                <input type="text" id="address" name="address"/>
             </div>

             </div>
                {/* <label for="phone">Telephone:</label>
                <input style={{width:"30vw"}}  type="tel" id="phone_mobile" name="phone_mobile" placeholder="Mobile"/> */}
          
            <label for="surname">Email Address:</label>
                <input type="text" id="Email Address" name="Email Address"/>
               <div style={{display:"flex",gap:"3vw",width:"100vw"}}>
                <div>
                <label for="Password">Password:</label>
                <input type="text" id="Password" name="Password"/>
                </div>
                <div>
                <label for="Confirm Password:">Confirm Password:</label>
                <input type="text" id="Confirm Password:" name="Confirm Password:"/>
                </div>
               </div>
                <button>Sign Up</button>
            </section>
       
        </form>
    </div>
   </OutsideClickHandler>
    </div>
  );
};

export default Signup;
