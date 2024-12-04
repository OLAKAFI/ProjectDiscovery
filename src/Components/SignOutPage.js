import React from 'react';
import "./register.css"; // Import custom CSS for styling if needed
import { Row } from 'react-bootstrap';


function SignOutPage() {
  return (
    <div id="wrapper">
      <section id="signout" className="">
          <Row className="know-you-container vh-100 justify-content-center align-items-center">
            <div className="signout-page text-center">
              <h1>You have successfully signed out!</h1>
              <p>Thank you for using our app. We hope to see you again soon.</p>
            </div>
          </Row>
      </section>
    </div>

  )
}

export default SignOutPage
