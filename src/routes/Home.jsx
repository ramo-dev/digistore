import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import HomeComponent from "../components/Home/HomeComponent";
import {Flex} from 'antd'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeComponent />
    </div>
  );
}

export default Home
