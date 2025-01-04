import React from "react";
import { Button } from "react-bootstrap";
import "./introduction.css";

const Introduction = () => (
  <section className="introduction">
    <div className="content text-center ">
      <h1 className="display-5 fw-bold">Welcome to Discover Me</h1>
      <p>
        This is a platform that gives you the opportunity to start or continue
        your self-discovery journey.
      </p>
      <Button href="/know-you"variant="primary" size="lg" className="my-3 fs-5">Get Some Insight</Button>
    </div>
  </section>
);

export default Introduction;
