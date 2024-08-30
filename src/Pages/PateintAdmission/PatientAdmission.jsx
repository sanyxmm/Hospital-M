import React from 'react'
import './PatientAdmission.css'
const PatientAdmission = () => {
  return (
    <div>
       <div class="form-container">
        <h2>Patient Admission Form</h2>
        <form>
        <section class="section">
                <h3>Personal and Administration Details</h3>
               

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
                <label for="other">I identify my gender as</label>
                <input type="text" id="other_gender" name="other_gender"/>
            </section>

            <section class="section">

             <div style={{display:"flex",gap:"3vw",width:"100vw"}}>
              <div >   
             <label for="address">Residential address:</label>
                <input type="text" id="address" name="address"/>
              </div>
             <div>
             <label for="postal">Postal address:</label>
                <input type="text" id="postal" name="postal"/>
             </div>

             </div>
                <label for="email">Email address:</label>
                <input type="email" id="email" name="email"/>

                <label for="phone">Telephone:</label>
                <input style={{width:"30vw"}} type="tel"id="phone_home" name="phone_home" placeholder="Home"/>
                <input style={{width:"30vw",margin:" 0 2vw"}}  type="tel" id="phone_business" name="phone_business" placeholder="Business"/>
                <input style={{width:"30vw"}}  type="tel" id="phone_mobile" name="phone_mobile" placeholder="Mobile"/>
            </section>


            <section class="section">
            <label for="surname">Policy no. (if any):</label>
                <input type="text" id="surname" name="surname"/>
                
                <label for="gp_name">General Practitioner (Name):</label>
                <input type="text" id="gp_name" name="gp_name"/>

                <label for="medical_centre">Medical Centre:</label>
                <input type="text" id="medical_centre" name="medical_centre"/>
                
            </section>

            <section class="section">
                <h3>Next of Kin/Contact Person</h3>
                <label for="kin_name">Name:</label>
                <input type="text" id="kin_name" name="kin_name"/>

                <label for="relationship">Relationship to patient:</label>
                <input type="text" id="relationship" name="relationship"/>

                <label for="kin_phone">Telephone:</label>
                <input style={{width:"30vw"}} type="tel"id="kin_phone_home" name="kin_phone_home" placeholder="Home"/>
                <input style={{width:"30vw",margin:" 0 2vw"}}  type="tel" id="kin_phone_business" name="kin_phone_business" placeholder="Business"/>
                <input style={{width:"30vw"}}  type="tel" id="kin_phone_mobile" name="kin_phone_mobile" placeholder="Mobile"/>
            </section>

            <section class="section">
                <h3>Payment Details</h3>
                <label>How will your procedure be paid for?</label>
                <input type="checkbox" id="health_insurance" name="payment_method" value="Health insurance"/>
                <label for="health_insurance">Health insurance</label>
                <input type="checkbox" id="acc" name="payment_method" value="ACC"/>
                <label for="acc">ACC</label>
                <input type="checkbox" id="dhb" name="payment_method" value="DHB"/>
                <label for="dhb">DHB</label>
             
            </section>
       <button class="sub" type='submit'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default PatientAdmission;
