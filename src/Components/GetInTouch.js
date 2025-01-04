import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './getintouch.css'; // Ensure this file exists

const GetInTouch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
      <Container className="p-4 my-5 contact-form-container ">
        {/* Section Header */}
       

        {/* Main Content */}
        <Row className=" shadow-lg p-5 rounded  ">
          <Row>
            <Col>
              <header className="text-center mb-5">
                <h1 className="text-primary display-5 fw-bold fs-sm-3">Get in Touch</h1>
                <p className="text-muted fs-sm-5">
                  Have questions or want to work together? Feel free to reach out. We are here to help!
                </p>
              </header>
            </Col>
          </Row>
          {/* Form Section */}
          <Col md={6} className="mb-4">
            <div className="">
              {/* <h4 className="mb-4 text-dark">Send Us a Message</h4> */}
              <Form method="post" onSubmit={handleSubmit} className="">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    size="lg"
                    aria-label="Name"
                    className="input-field"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    size="lg"
                    aria-label="Email"
                    className="input-field"
                  />
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Form.Control
                    as="textarea"
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Please enter your enquiries here"
                    size="lg"
                    aria-label="Message"
                    className="input-field "
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2"
                  size="lg"
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* Contact Info Section */}
          <Col md={6}>
            <div className="contact-info">
              <ul className="list-unstyled">
                <li className="mb-4">
                  <h5 className="text-secondary">Address</h5>
                  <address className="text-primary">
                    12345 Somewhere Road #654
                    <br />
                    Nashville, TN 00000-0000
                    <br />
                    USA
                  </address>
                </li>
                <li className="mb-4">
                  <h5 className="text-secondary">Email</h5>
                  <p>
                    <a
                      href="mailto:user@untitled.tld"
                      className="text-decoration-none"
                    >
                      support@discoverme.com
                    </a>
                  </p>
                </li>
                <li className="mb-4">
                  <h5 className="text-secondary">Phone</h5>
                  <p  className="text-primary">(000) 000-0000</p>
                </li>
                <li>
                  <h5 className="text-secondary">Social</h5>
                  <ul className="list-inline">
                    {[
                      { platform: "Twitter", icon: "fa-twitter", url: "#" },
                      { platform: "Facebook", icon: "fa-facebook-f", url: "#" },
                      { platform: "GitHub", icon: "fa-github", url: "#" },
                      { platform: "Instagram", icon: "fa-instagram", url: "#" },
                      { platform: "LinkedIn", icon: "fa-linkedin-in", url: "#" },
                    ].map((social, idx) => (
                      <li key={idx} className="list-inline-item mx-2">
                        <a
                          href={social.url}
                          className={`icon brands ${social.icon}`}
                          aria-label={social.platform}
                        >
                          <i
                            className={`fab ${social.icon} social-icon`}
                          ></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default GetInTouch;
