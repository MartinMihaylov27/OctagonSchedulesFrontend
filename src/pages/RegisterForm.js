import React from "react";
import '../css/Login-Register.css';

const RegisterForm = () => {
  return(
    <div className="registerBox">
        <form>
          <h1>Register</h1>
          <input className="textInput" type="text" name="email" placeholder="Enter your email."></input>
          <input className="textInput" id="password" type="password" name="password" placeholder="Enter your password."></input><br/>
          <input className="textInput" id="password" type="password" name="confirmPassword" placeholder="Confirm your password."></input><br/>
          <input className="SubmitButton" id="registerButton" type="submit" name="Register" value="Register" />
          <a href="/Login">Already have an account?</a>
        </form>
    </div>
  )
}
export default RegisterForm;