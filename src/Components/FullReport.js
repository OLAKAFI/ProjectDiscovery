import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './form.css';
import NumberData from "../data/NumberData"; // Import NumberData

function FullReport({ results }) {
    
    return (
        <section className="mt-4">
          <h2 className='mt-2 mb-5 text-center text-white fw-bold display-4'>Results</h2>
          <br/>
          <Row>
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
                <Col md={12} key={key} className="my-3">
                    <Container className='pb-3'>
                        <h2>{key.replace(/([A-Z])/g, " $1")} {value}</h2>
                        <h5>{description}</h5>
                    </Container>
                    <hr></hr>
                </Col>
              );
            })}
          </Row>
        </section>
      );
}
    

export default FullReport