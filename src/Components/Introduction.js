import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "react-bootstrap";
import "./introduction.css";

const Introduction = () => {
  const location = useLocation();
  const fullName = location.state?.fullName || "Guest";
  const navigate = useNavigate();
  const handleInsight = () => {
    // Navigate to the dynamic route
    navigate(`/know-you`);
  };
  return (
    <section className="introduction">
      <div className="content text-center ">
        <h1>Hello {fullName}!</h1>
        <h1 className="display-5 fw-bold">Welcome to DiscoverMe</h1>
        <br></br>
        <br></br>
        <h5 >
          This platform offers you deep insights into your personality, strengths, challenges, and life purpose. Whether you’re seeking clarity about yourself or a better understanding
           of those around you, our tools are designed to guide you on a journey of self-discovery. 
          your self-discovery journey.
          Every individual is unique, and while our insights provide a strong foundation, your experiences,
            choices, and mindset shape your path. Take this as an opportunity to reflect, explore, and embrace the knowledge that resonates with you.
            At DiscoverMe, we believe that self-awareness is the key to personal growth and fulfillment. Start your journey today and uncover the hidden patterns that influence your life!
            This is a platform that gives you the opportunity to start or continue
        </h5>
        
      
        <Button onClick={handleInsight} variant="primary" size="lg" className="mt-5 fs-5">Get More Insight</Button>
      </div>
    </section>
  );
};

export default Introduction;
