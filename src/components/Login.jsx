import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { FiLock } from "react-icons/fi";
import featureimage1 from './images/login.jpg';
import "../styles/LoginPage.css";

export default function Login() {

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h1>Family Care</h1>
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


          <form className="sign-up-form">
            <h1>Family Care</h1>
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <BiUser className="fas fa-user" />
              <input type="text" placeholder="Username" />
            </div>
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

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New Here?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="btn transparent" id="sign-up-btn">Sign up</button>
          </div>

          <img src={featureimage1} alt="gambar" className="image" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="btn transparent" id="sign-in-btn">Sign in</button>
          </div>

          <img src={featureimage1} alt="gambar" className="image" />
        </div>
      </div>
    </div>
  )
}