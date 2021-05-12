import React, { useState } from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";

const SignUp = props => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const register = event => {
    event.preventDefault();

    const newUser = { username, email, password, confirmPassword };

    axios
      .post("http://localhost:8000/api/user/register", newUser, {
        // this will force the sending of the credentials / cookies so they can be updated
        //    XMLHttpRequest from a different domain cannot set cookie values for their own domain 
        //    unless withCredentials is set to true before making the request
        withCredentials: true
      })
      .then(res => {
        console.log(res);

        // when we successfully create the account, reset state for reg form
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch(err => {
        console.log(err);

        setErrors(err.response.data.errors);
      });
  };

  return (
    <fieldset>
      <legend>Sign Up</legend>
      <p><Link className='registerli' to= {`/`} >  i have account? sig in   </Link> </p>

      <form onSubmit={register}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
           name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            
          />
          {errors.username ? (
            <span className="error-message">{errors.username.message}</span>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          {errors.email ? (
            <span className="error-message">{errors.email.message}</span>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="email"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          {errors.password ? (
            <span className="error-message">{errors.password.message}</span>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          {errors.confirmPassword ? (
            <span className="error-message">
              {errors.confirmPassword.message}
            </span>
          ) : (
            ""
          )}
        </div>

        <input type="submit" value="Sign Up" className="btn" />
      </form>
    </fieldset>
  );
};

export default SignUp;