import React, { Component } from "react";
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <div className="p1">
            <p>"Welcome to <b>BABY E-Konsulta SYSTEM</b>, the all-in-one solution for your baby's health
            and well-being.Our app brings together urgent care and services, baby's health monitoring,
            and vaccination and immunization management, all in one convenient place.</p>
        </div>
        <div className="p2">
            <p>Join thousands of parents who have discovered the convenience
            and peace of mind provided by <b>BABY E-Konsulta SYSTEM</b>.
            Download our app today and experience the comprehensive care
            and support that your baby deserves. Together, let's ensure
            a healthy and happy start to their journey."</p>
        </div>
      </div>
    );
  }
}
export default About;
