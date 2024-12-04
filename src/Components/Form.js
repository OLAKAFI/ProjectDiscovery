// Form.js
import React from 'react';
import './form.css';
import { Form, Row, Col, Container, Button} from 'react-bootstrap';



function UserForm({ formData, setFormData, onCalculate}) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

  };
  

  return (
    <div className=" ">
      <Container className=' form-container'>
        <Form className=''>
          {/* Title Section */}
          <h2 className="form-heading">Get in touch</h2>
          <p className="form-subheading">
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
            mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
            hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
            quis lorem.
          </p>

          {/* Name Section */}
          <Row className="mb-4">
            <Col md={4} sm={12} className="mb-3">
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                />
              </Form.Group>
            </Col>
            <Col md={4} sm={12} className="mb-5">
              <Form.Group>
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  placeholder="Enter middle name"
                />
              </Form.Group>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Date of Birth Section */}
          <h4 className="form-section-heading">Enter your Date of Birth details</h4>
          <Row>
            <Col md={4} sm={12} className="mb-3">
              <Form.Group>
                <Form.Label>Day</Form.Label>
                <Form.Control
                  type="number"
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  placeholder="DD"
                  min="1"
                  max="31"
                />
              </Form.Group>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Form.Group>
                <Form.Label>Month</Form.Label>
                <Form.Control
                  type="number"
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  placeholder="MM"
                  min="1"
                  max="12"
                />
              </Form.Group>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Form.Group>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="YYYY"
                  min="1600"
                  max="2100"
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center mt-4">
              <Button 
                variant="primary"
                onClick={onCalculate}
                size="lg"
              >
                Calculate All
              </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default UserForm;
