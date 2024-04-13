import React from "react";
import { Flex } from "antd";
import "./RegisterStyles.css";
import LoginPage from "../../assets/RegisterImage.jpg";
import { Link } from "react-router-dom";
const RegisterComponent = () => {
  return (
    <Flex className="RegisterPage">
      <img src={LoginPage} alt="" />
      <form action="">
        <h1>Register Today to start buying</h1>
        <label htmlFor="firstName">First name:</label>
        <input type="text" />
        <label htmlFor="secondName">Second name:</label>
        <input type="text" />
        <label htmlFor="email">Email:</label>
        <input type="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" />
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input type="password" />
        <button className="btn">Register</button>
        <small>
          Have an account? <Link to="/login">Login</Link>
        </small>
      </form>
    </Flex>
  );
};

export default RegisterComponent;
