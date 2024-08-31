import React, { useState, useRef, useContext } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { AppContext } from "../../context";
import "./Login.css";

const Login = ({}) => {
  const { closeMenu, openRegister } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      
      // Obtain the Firebase user token
      const token = await user.getIdToken();
      const userData = await getUserDetails(user.uid);
      console.log(userData);
      closeMenu();
      
      // Save user details in session storage
      sessionStorage.setItem('user', JSON.stringify({
        token,
        email: user.email,
        username: userData.firstName + " " + userData.lastName,
        uid: userData.uid
      }));

    } catch (error) {
      setError('Invalid credentials. Please try again.'); // Handle error
      console.error('Sign-in error:', error);
    }
  };
  return (
    <div>
      <div className="login">
        <OutsideClickHandler
          onOutsideClick={() => {
            // Close the menu
            closeMenu();
          }}
        >
          <form className="login-box" onSubmit={handleSignIn}>
            <div>
              <h1>Login</h1>
              <a onClick={openRegister}>New User? Sign up</a>
            </div>

            <div>
              Email address: <br />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  required />
            </div>
            <div>
              Password: <br />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Sign in</button>
          </form>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Login;
