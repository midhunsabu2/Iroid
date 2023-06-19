import React from "react";
import "./Signup.css";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Signup = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signupUser = async (e) => {
    e.preventDefault();

    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/signup", {
        name,
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successful. Welcome!");
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="nav">
        <span className="text">Already have an account?</span>
        <Link to={"/"}>
          <button typeof="submit" className="btn">
            Login
          </button>
        </Link>
      </div>
      <div className="container">
        <form id="form" onSubmit={signupUser}>
          <h1>Let's go!</h1>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <label htmlFor="pswd">Choose Password</label>
          <input
            type="password"
            id="pswd"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <AiOutlineEye className="icon-pswd" />

          <button type="submit" className="btn1">
            Sign up
          </button>
        </form>
      </div>
      <div className="circle"></div>
    </div>
  );
};

export default Signup;
