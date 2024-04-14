import React, { useState } from 'react'
import {Flex} from 'antd'
import './LoginStyles.css'
import LoginPage from'../../assets/LoginImage.jpg'
import { Link } from 'react-router-dom'
import {account} from '../../utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const LoginComponent = () => {

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

   function handleSubmit(e){
    e.preventDefault()
    if(email || password === ''){
      alert('Please fill in all fields')
  }
   }

  return (
    <Flex className="LoginPage" onSubmit={handleSubmit}>
      <img src={LoginPage} alt="" />
      <form action="">
        <h1>Welcome Back</h1>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button className="btn">Login</button>
        <small>
          Dont have an account? <Link to="/register">Register</Link>
        </small>
      </form>
    </Flex>
  );
}
export default LoginComponent
