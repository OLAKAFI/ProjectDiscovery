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
        <h1 className="display-5 fw-bold">Welcome to Discover Me</h1>
        <p>
          This is a platform that gives you the opportunity to start or continue
          your self-discovery journey.
        </p>
        <Button onClick={handleInsight} variant="primary" size="lg" className="my-3 fs-5">Get More Insight</Button>
      </div>
    </section>
  );
};

export default Introduction;
