import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import "../styles/LoginPage.css";

export default function Login() {
  const loginClick = (e) =>{
    e.preventDefault();
    let u = e.target.username.value;
    let p = e.target.pass.value;

    alert('Username : '+u+ 'Password :'+p );
  }

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={loginClick}>
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <MdOutlineMail className="fas fa-user" />
              <input type="email" placeholder="Email" name='username' />
            </div>
            <div className="input-field">
              <FiLock className="fas fa-lock" />
              <input type="password" placeholder="Password" name='pass'/>
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
        </div>
      </div>
    </div>
  )
}