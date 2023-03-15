import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Services.css";
//
//images
import s1 from "./images/service_img1.png"
//
import { BrowserRouter } from "react-router-dom";

const Services = () => {
  return (
    
        <div class="grid-container">
          <div class="grid-item">
            <img src={s1} className="pic"></img>
            <Link to="/Service1">Register</Link>
          </div>
          <div class="grid-item">Coming Soon</div>
          <div class="grid-item">Coming Soon</div>
          <div class="grid-item">Coming Soon</div>
          <div class="grid-item">Coming Soon</div>
          <div class="grid-item">Coming Soon</div>
          <div class="grid-item">Coming Soon</div>
          <div class="grid-item">Coming Soon</div>
          <div class="grid-item">Coming Soon</div>
        </div>
        
  );
}

export default Services;
