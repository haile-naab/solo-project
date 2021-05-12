import React, { useState } from "react";

import axios from "axios";
import { navigate, Link } from "@reach/router";

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = event => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/user/login",
        { email, password },
        {
          // this will force the sending of the credentials / cookies so they can be updated
          //    XMLHttpRequest from a different domain cannot set cookie values for their own domain 
          //    unless withCredentials is set to true before making the request
          withCredentials: true
        }
      )
      .then(res => {
        console.log(res);
        navigate("/rent");
      })
      .catch(err => {
        console.log(err);
        setErrorMessage(err.response.data.msg);
      });
  };

  return (
    <fieldset>
        <p><Link className='registerli' to= {`/signup`} >  Don't have account? register   </Link> </p>
        
      <legend>Sign In</legend>
      <form onSubmit={login}>
          
        <p className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </p>
        <p className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="email"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </p>
        <input type="submit" value="Sign In" className="btn" />
        <p className="error-message">{errorMessage ? errorMessage : ""}</p>

        
      </form>
    </fieldset>
  );
};

export default SignIn;