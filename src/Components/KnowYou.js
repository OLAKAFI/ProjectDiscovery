// src/components/KnowYou.js
import React from "react";
import {Col, Button, Row} from 'react-bootstrap';
import KnowYouData from '../data/KnowYouData'
import { useNavigate } from "react-router-dom";
import "./knowyou.css"; // Assuming you have a custom CSS file for styling

const KnowYou = ({ id }) => {

    // Find the content that matches the provided ID
    const content = KnowYouData.find((item) => item.id === id);

    const navigate = useNavigate();
    


    // If no content is found, display a message or a default content
    if (!content) {
        return <p>Content not found.</p>;
    }

    const handleLearnMore = () => {
      // Navigate to the dynamic route
      navigate(`/know-you/${id}`);
    };
  
  return (
    <div id="know-you-wrapper ">
      <section id="know_you" className="know-you-container" >
        <Row className="align-items-center " > 
            <Col xs={12} md={4} className=" image-container">
                    <img src={content.image} alt={content.title} className="  img-fluid "/>
                    
                      
                    
            </Col>
            <Col xs={12} md={8} className="content">
                <div className="">
                  <h2>{content.title}</h2>
                  <p>{content.shortdescription}</p>
                  <Button variant="primary" size="lg" onClick={handleLearnMore}>
                    {content.buttonText}
                  </Button>
                </div>
            </Col>
        </Row>
      </section>
        
    </div>
  );
};

export default KnowYou;

