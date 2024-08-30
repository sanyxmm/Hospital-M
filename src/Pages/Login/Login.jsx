import React, { useState, useRef, useContext } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { AppContext } from "../../context";
import "./Login.css";

const Login = ({}) => {
  const { closeMenu, openlogPop, openlogchk } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");

  return (
    <div>
      <div className="login">
        <OutsideClickHandler
          onOutsideClick={() => {
            // Close the menu
            closeMenu();
          }}
        >
          <form className="login-box">
            <div>
              <h1>Login</h1>
              <a>New User? Sign up</a>
            </div>

            <div>
              Email address: <br />
              <input type="email" value={email} required />
            </div>
            <div>
              Password: <br />
              <input type="password" value={password} required />
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
