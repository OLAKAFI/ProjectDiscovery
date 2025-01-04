// Results.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './form.css';
import NumberData from "../data/NumberData"; // Import NumberData

function Results({ results }) {
  
  return (
    <section className="mt-4">
      <h2 className='my-4 text-center text-white  display-4'>Results</h2>
      <Row>
        {/* {Object.entries(results).map(([key, value]) => ( */}
        {Object.entries(results).map(([key, value]) => {
         // Convert camelCase to snake_case to match NumberData.title
         const formattedTitle = key
         .replace(/([a-z])([A-Z])/g, "$1_$2")
         .toLowerCase();

       // Log to debug the transformation
       console.log("Formatted Title:", formattedTitle);

       // Find the matching data in NumberData
       const matchingData = NumberData.find(
         (item) => item.title === formattedTitle
       );

       // Log to debug the matchingData
       console.log("Matching Data:", matchingData);

       // Get the description for the corresponding value in NumberData
       const description =
         matchingData && matchingData.value[value]
           ? matchingData.value[value]
           : "No matching data found.";

       // Log to debug the value and description
       console.log("Value:", value, "Description:", description);

          return (
            <Col md={12} key={key} className="mb-3">
                <Card>
                  <Card.Body>
                    <Card.Title>{key.replace(/([A-Z])/g, " $1")}</Card.Title>
                    <Card.Text>{value}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                  </Card.Body>
                </Card>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

export default Results;



