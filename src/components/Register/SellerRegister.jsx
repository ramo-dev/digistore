import React from "react";
import { Flex } from "antd";
import "./RegisterStyles.css";
import LoginPage from "../../assets/Layered.svg";
import { Link } from "react-router-dom";
const RegisterComponent = () => {
  return (
    <Flex className="LoginPage">
      <img src={LoginPage} alt="" />
      <form action="">
        <h1>Register as a seller</h1>
        <label htmlFor="firstName">First name:</label>
        <input type="text" name="" id="" />
        <label htmlFor="secondName">Second name:</label>
        <input type="text" name="" id="" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="" id="" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="" id="" />
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input type="password" name="" id="" />
        <button className="btn">Register</button>
        <small>
          Have an account? <Link to="/login">Login</Link>
        </small>
      </form>
    </Flex>
  );
};

export default RegisterComponent;
