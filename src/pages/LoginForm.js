import React from "react";
import '../css/Login-Register.css';


const LoginForm = () => {

  function togglePassword() {
    const password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
      console.log(password)
    } else {
      password.type = "password";
  }
  }
  return(
    <div className="loginBox">
        <form>
          <h1>Login</h1>
          <input className="textInput" type="text" name="email" placeholder="Enter your email."></input>
          <input className="textInput" id="password" type="password" name="password" placeholder="Enter your password."></input><br/>
          <input type="checkbox" onClick={togglePassword} id="showPassword" name="showPassword" value="hidden" />
          <label htmlFor="showPassword"> Show Password</label><br/>
          <input className="SubmitButton" type="submit" name="Login" value="Log In" />
          <a href="/Register">Don't have an account?</a>
        </form>
    </div>
  )
}
export default LoginForm;