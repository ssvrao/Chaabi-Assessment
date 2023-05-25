import { useState } from "react";
import TypingCard from "../TypingCard/typingcard";
import NavHeader from "../NavHeader/navheader";
import "./home.css"
 
 const HomePage = () => {
  const [currentSpeed, setCurrentSpeed] = useState(0);

  const homepageCallback = (currentSpeed) => {
    setCurrentSpeed(currentSpeed);
  };

  return (
    <div className="home-container">
      <div className="main-div">
        <NavHeader currentSpeed={currentSpeed} />
        <div className="layout-container">
          <div className="left-container">
             
        <TypingCard  homepageCallback={homepageCallback}/>
            
          </div>
          <div className="right-container">
            <img  src="https://www.insperity.com/wp-content/uploads/work-from-home_program_1200x630.jpg" 
            alt="typing-gril" width="550px" height="450px"   />
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

 
 
 