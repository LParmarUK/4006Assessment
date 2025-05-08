import React from 'react';
import logoBackground from '../assets/invert.png';

const Home = () => {
  return (
    <div 
      className="home-container" 
      style={{ backgroundImage: `url(${logoBackground})` }}
    >
      <h1 className="home-heading">Welcome to St Mary's Health Hub</h1>
      <p className="home-subtext">
        For personal wellness, fitness tips, and mental health support.
      </p>
      <div className="home-content">
        <p>
          At St Mary’s Health Hub, we believe that managing your health should be easy and empowering.
          Our platform offers a range of tools to help you track your wellness journey:
        </p>
        <ul>
          <li>📊 Stay informed with the latest health news</li>
          <li>💧 Track your water intake, calories, and daily steps</li>
          <li>📝 Set medication reminders to never miss a dose</li>
          <li>⚖️ Calculate and monitor your BMI</li>
          <li>🔎 Use the symptom checker for quick advice</li>
          <li>🍎 Access detailed nutrition information</li>
        </ul>
        <p>
          Explore the dashboard and other tools using the navigation menu above.
          Your health journey starts here!
        </p>
      </div>
    </div>
  );
};

export default Home;
