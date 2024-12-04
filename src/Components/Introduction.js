import React from "react";
import { Button } from "react-bootstrap";
import "./introduction.css";

const Introduction = () => (
  <section className="introduction">
    <div className="content text-center ">
      <h1>Welcome to Discover Me</h1>
      <p>
        This is a platform that gives you the opportunity to start or continue
        your self-discovery journey.
      </p>
      <Button variant="primary" size="lg">Learn more</Button>
    </div>
  </section>
);

export default Introduction;
