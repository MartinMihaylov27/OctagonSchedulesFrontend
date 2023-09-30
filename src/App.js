import LoginForm from "../src/pages/LoginForm";
import RegisterForm from "../src/pages/RegisterForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/Login" element={<LoginForm/>}/>
          <Route exact path="/Register" element={<RegisterForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
