// import React, { useState, useRef, useContext } from "react";
// import OutsideClickHandler from "react-outside-click-handler";
// import { AppContext } from "../../context";
// import "./Signup.css";

// const Signup = ({}) => {
//   const { closeMenu,closeRegister } = useContext(AppContext);

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     dob: '',
//     gender: '',
//     contact: '',
//     address:'',
//     pincode:'',
//     password: '',
//     confirmPassword: '',
// });

// const [error, setError] = useState('');

// const handleChange = (e) => {
//   setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//   });
// };
// const handleSubmit = async (e) => {
//   e.preventDefault();
  
//   if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//   }
//   try {
//       //Sends the form data to the 'signup' function which calls the SignUp API.
//       const response = await signup(formData);
//       console.log(response);
//       closeRegister();
//       //HIDE THE ICON OR DISPLAY A MESSAGE FOR SUCCESS   
      
//   } catch (error) {
//       console.error(error);
//       setError('Signup failed. Please try again.');
//   }
// };
//   return (
//     <div class="signupForm">
//    <OutsideClickHandler onOutsideClick={()=>{
//     closeMenu();
//     closeRegister();
//    }}>
//    <div class="form-containe" >
        
//         <form  onSubmit={handleSubmit}>
//         <section class="sectio">
//         <h1>Sign up</h1>
//                <div style={{display:"flex",gap:"3vw",width:"100vw"}}>
//                  <div>
//                  <label for="firstname">First name(s):</label>
//                 <input type="text" id="firstname" name="firstname" value={formData.firstName} onChange={handleChange} required/>
//                  </div>

//                 <div>
//                 <label for="lastname">Last name:</label>
//                 <input type="text" id="lastname" name="lastname" value={formData.lastName} onChange={handleChange}/>
//                 </div>
//                 </div>

            
//                 <label for="dob">Date of birth:</label>
//                 <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />

//                 <label>Gender:</label>
//                 <input type="radio" id="male" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} />
//                 <label for="male">Male</label>
//                 <input type="radio" id="female" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
//                 <label for="female">Female</label>
//                 <input type="radio" id="other" name="gender"value="Rather not say" checked={formData.gender === 'Rather not say'} onChange={handleChange} />
//                 <label for="other">Other</label>
    
//              <div style={{display:"flex",gap:"3vw",width:"100vw"}}>
//               <div >   
//              <label for="address">Residential address:</label>
//                 <input type="text" id="address" name="address" value={formData.address} onChange={handleChange}/>
//               </div>
//              <div>
//              <label for="pincode">PinCode:</label>
//                 <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange}/>
//              </div>

//              </div>
//                 {/* <label for="phone">Telephone:</label>
//                 <input style={{width:"30vw"}}  type="tel" id="phone_mobile" name="phone_mobile" placeholder="Mobile"/> */}
          
//             <label for="surname">Contact:</label>
//                 <input type="text" id="Contact" name="Contact" value={formData.contact} onChange={handleChange} required />
//                <div style={{display:"flex",gap:"3vw",width:"100vw"}}>
//                 <div>
//                 <label for="Password">Password:</label>
//                 <input
//                           id="p1"
//                           type="password"
//                           name="password"
//                           value={formData.password}
//                           onChange={handleChange}
//                           pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}"
//                           onInvalid={e => e.target.setCustomValidity('must contain uppercase, lowercase characters, and numbers')}
//                           onInput={e => e.target.setCustomValidity('')}
//                           required
//                       />
//                 </div>
//                 <div>
//                 <label for="Confirm Password:">Confirm Password:</label>
//                 <input
//                           id="p2"
//                           type="password"
//                           name="confirmPassword"
//                           value={formData.confirmPassword}
//                           onChange={handleChange}
//                           pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}"
//                           onInvalid={e => e.target.setCustomValidity('must contain uppercase, lowercase characters, and numbers')}
//                           onInput={e => e.target.setCustomValidity('')}
//                           required
//                       />
//                        {formData.password !== formData.confirmPassword && (
//                           <p id="redtext" style={{ fontSize: '15px', color: 'red' }}>Passwords do not match</p>
//                       )}
//                 </div>
//                </div>
//                 <button><input type="onsubmit" value="Sign Up" id="SubmitBtn" /></button>
//             </section>
       
//         </form>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//    </OutsideClickHandler>
//     </div>
//   );
// };

// export default Signup;
