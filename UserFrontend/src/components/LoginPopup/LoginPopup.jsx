import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPopup = ({ setShowLogin, url, setToken }) => {
  const [curState, setCurState] = useState("Sign Up");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();

    let newUrl = `${url}/api/user/${curState === "Sign Up" ? "register" : "login"}`;

    try {
      const response = await axios.post(newUrl, data);

      if (curState === "Sign Up") {
        toast.success("Account created successfully! Please log in.");
        setCurState("Log In");
      } else {  
          if (response.data.isAdmin) {
            window.location.href = "http://localhost:5174"; // redirect to admin frontend
          } else {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
            window.location.reload();
          }
        } 

      } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{curState}</h2>
          <img src={assets.cross} alt="close" onClick={() => setShowLogin(false)} />
        </div>

        <div className="login-popup-inputs">
          {curState === "Sign Up" && (
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={data.name}
              onChange={onChangeHandler}
              required
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={data.email}
            onChange={onChangeHandler}
            required
          />
          <div className="login-popup-password">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={data.password}
              onChange={onChangeHandler}
              required
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye />:<FaEyeSlash />}
            </span>
          </div>
        </div>

        <button type="submit" className="btn">
          {curState === "Sign Up" ? "Create Account" : "Log In"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms & privacy policy.</p>
        </div>

        {curState === "Log In" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurState("Log In")}>Log in here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
