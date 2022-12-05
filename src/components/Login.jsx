import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import "../styles/LoginPage.css";

export default function Login() {

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <MdOutlineMail className="fas fa-user" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <FiLock className="fas fa-lock" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
        </div>
      </div>
    </div>
  )
}