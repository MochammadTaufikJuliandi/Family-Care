import React from 'react'
import { BiUser } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";

export default function Register() {
  return (
    <>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-up-form">
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
      </div>
    </>
  )
}
