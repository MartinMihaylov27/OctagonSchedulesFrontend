import React, {useState} from "react";
import axios from "axios";
import '../css/Login-Register.css';

const RegisterForm = () => {
  const[errorStyle, setErrorStyle] = useState("red");

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errorMessage, setErrorMessage] = useState(['']);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleErrorMessage = (message) => {
    setErrorMessage(message);
    if (message === "Success!") {
      setErrorStyle("green");
    } else {
      setErrorStyle("red");
    }
  }
  
  const submitRegistration = async (event) => {
    event.preventDefault();

    const username = formData.username;
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;

    if(username.length < 3) {
      console.log(username.length)
      handleErrorMessage("Username must be at least 3 characters!");
    }
    else if (password !== confirmPassword) {
        handleErrorMessage("Passwords must match!");
    } else if (password.length < 8){
        handleErrorMessage("Password must be at least 8 characters!");
    } else {
        try {
          const response = await axios.post("http://localhost:8080/register", {username: username, password: password});
          if (response.data === "Success!") {
            handleErrorMessage("Success!");
            setTimeout(()=> {
              window.location = "http://localhost:3000/Home";
           }
           , 500);
          } else if (response.data === "There was an error, please try again."){
            handleErrorMessage("There was an error, please try again.");
          } else {
            handleErrorMessage("Username already in use.");
          }
        } catch(err) {
          handleErrorMessage("There was an error, please try again.");
        } 
    }
  }
  
  return(
    <div id="Page">
      <div className="registerBox">
        <form>
          <h1>Register</h1>
          <input className="textInput" onChange={handleInputChange} autoComplete="Username" type="text" name="username" placeholder="Enter your username."></input>
          <input className="textInput" onChange={handleInputChange} id="password" type="password" name="password" placeholder="Enter your password."></input><br/>
          <input className="textInput" onChange={handleInputChange} id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm your password."></input><br/>
          {errorMessage != null 
            ? <p className={errorStyle} id="errorMessage">{errorMessage}</p>
            : <br></br>
          }
          <input onClick={submitRegistration} className="SubmitButton" type="submit" name="Register" value="Register" />
          <a href="/Login">Already have an account?</a>
        </form>
      </div>
    </div>
  )
}
export default RegisterForm;