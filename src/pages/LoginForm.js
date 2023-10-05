import React, {useState} from "react";
import axios from "axios";
import '../css/Login-Register.css';


const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState(['']);

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  function togglePassword() {
    const password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }

  const submitLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    const username = formData.username;
    const password = formData.password;

    try {
      const response = await axios.post("http://localhost:8080/login", {username: username, password: password});
      if (response.data === "Success!") {
          window.location = "http://localhost:3000/Home";
      } else {setErrorMessage(response.data)}
    } catch(err) {
      setErrorMessage("There was an error, please try again.");
    } 
  }

  return(
    <div id="Page">\
      <div className="loginBox">
          <form>
            <h1>Login</h1>
            <input className="textInput" onChange={handleInputChange} type="text" name="username" placeholder="Enter your username."></input>
            <input className="textInput" onChange={handleInputChange} id="password" type="password" name="password" placeholder="Enter your password."></input><br/>
            <input type="checkbox" onClick={togglePassword} id="showPassword" name="showPassword" value="hidden" />
            <label htmlFor="showPassword"> Show Password</label><br/>
            {errorMessage != null 
              ? <p className={"red"} id="LoginErrorMessage">{errorMessage}</p>
              : <br></br>
            }
            <input onClick={submitLogin} className="SubmitButton" type="submit" name="Login" value="Log In" />
            <a href="/Register">Don't have an account?</a>
          </form>
      </div>
    </div>
  )
}
export default LoginForm;