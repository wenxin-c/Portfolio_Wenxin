import React from 'react';
import ReactDOM from "react-dom/client";
import {Layout, Menu, theme } from 'antd';
import SideMenu from '../components/side_menu';
import '../styles/introduction.css'
import flower from "../images/flower.jpg"

import { Outlet, Link } from "react-router-dom";


  const Introduction = () => {
    return (
      <div className = "introduction">

        <div className = "innerBox">
          <div className = "sideBar">
            <img src = {flower} alt = "Flower Logo" height = "80px" width = "80px"/>
            <SideMenu />
          </div>
          <div className = "subsections">            
            <Outlet />
          </div>

        </div>

      </div>
    );
  };

  export default Introduction;