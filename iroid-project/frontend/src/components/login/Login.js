import React, { useState } from "react";
import "./Login.css";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    try {
      const { data } = await axios.post("/", {
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="nav">
        <span className="text">Don't have an account?</span>
        <Link to={"/signup"}>
          <button typeof="submit" className="btn2">
            Sign Up
          </button>
        </Link>
      </div>
      <div className="container">
        <form id="form" onSubmit={loginUser}>
          <h1>Welcome back!</h1>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <label htmlFor="pswd">Password</label>
          <input
            type="password"
            id="pswd"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <AiOutlineEye className="icon-pswd" />

          <div className="checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <button type="submit" className="btn3">
            Login
          </button>
        </form>
      </div>
      <div className="forgot">
        <a href="">Forgot your password?</a>
      </div>
      <div className="circle"></div>
    </div>
  );
};

export default Login;
