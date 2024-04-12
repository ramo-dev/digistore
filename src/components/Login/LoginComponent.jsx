import React from 'react'
import {Flex} from 'antd'
import './LoginStyles.css'
import LoginPage from'../../assets/Layered.svg'
import { Link } from 'react-router-dom'
const LoginComponent = () => {
  return (
    <Flex className="LoginPage">
      <img src={LoginPage} alt="" />
      <form action="">
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <input type="email" name="" id="" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="" id="" />
        <button className="btn">Login</button>
        <small>
          Dont have an account? <Link to="/register">Register</Link>
        </small>
      </form>
    </Flex>
  );
}

export default LoginComponent
