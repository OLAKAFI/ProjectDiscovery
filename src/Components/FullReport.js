import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './form.css';
import NumberData from "../data/NumberData"; // Import NumberData

function FullReport({ results }) {
    
    return (
        <section className="mt-4">
          <h2 className='mt-2 mb-5 text-center text-white fw-bold display-4'>Results</h2>
          <h4 style={{color:'yellow', fontStyle:'italic', fontWeight: 'bold'}}>
              DISCLAIMER: DiscoverMe is a self-discovery platform is designed to provide insights into personality and life purpose using fundamental principles of astrology and numerology. 
              The primary goal of this website is to foster self-awareness and a deeper understanding of yourself and those around you. 
              While many individuals find these insights to be highly relatable, it is important to remember that they represent broad tendencies
               rather than definitive conclusions. Personal experiences, beliefs, and life choices all play a significant role in shaping one’s journey,
                and variations from person to person are natural. This platform is intended for self-exploration and personal growth. It should not be considered a rigid
                 or absolute guide, nor a substitute for professional advice in any area of life. We encourage an open mind, curiosity, and a balanced perspective while 
                 engaging with the information provided.
          </h4>
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
                        <h2 className='fw-bold display-5' style={{color:''}}>{key.replace(/([A-Z])/g, " $1")} {value}</h2>
                        <h5 className='fs-sm-5'>{description}</h5>
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