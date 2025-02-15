import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig"; // Firebase config file
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "./register.css"; // Import custom CSS for additional styling

function SignInSignUpPage({ setIsSignedIn }) {
  const [isSignUp, setIsSignUp] = useState(false); // Toggles between sign-in and sign-up
  const [fullName, setFullName] = useState(""); // State to store full name
  const [email, setEmail] = useState(""); // User email
  const [password, setPassword] = useState(""); // User password
  const navigate = useNavigate(); // For programmatic navigation

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
  
        console.log("User signed up:", userCredential.user);
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in:", userCredential.user);

        
      }
      setIsSignedIn(true);
      
      navigate("/intro", { replace: true });
    } catch (error) {
      console.error("Authentication error:", error.message);
      alert(error.message);
    }
  };

  

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-In successful:", result.user);
      setIsSignedIn(true);
      navigate("/intro", { replace: true });
    } catch (error) {
      console.error("Google Sign-In error:", error.message);
      alert(error.message);
    }
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={6} lg={4} className="auth-container p-4 shadow bg-white rounded">
          <h2 className="text-center mb-4">{isSignUp ? "Sign Up" : "Sign In"}</h2>
          <Form onSubmit={handleFormSubmit}>
            {isSignUp && (
              <Form.Group controlId="formFullName" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  className="form-control-lg border border-2  border-secondary text-dark"
                  value={fullName} // Controlled component
                  onChange={(e) => setFullName(e.target.value)} // Update state
                  required
                />
              </Form.Group>
            )}
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                className="form-control-lg border border-2  border-secondary text-dark"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                className="form-control-lg border border-2  border-secondary text-dark"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" size="lg" variant="primary" className="w-100 mb-3">
              {isSignUp ? "Register" : "Log In"}
            </Button>
          </Form>
          {/* <Button
            onClick={handleGoogleSignIn}
            size="lg"
            variant="outline-primary"
            className="w-100 mb-3"
          >
            {isSignUp ? "Sign Up with Google" : "Sign In with Google"}
          </Button> */}
          <p className="text-center">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              className="text-primary toggle-link"
              onClick={() => setIsSignUp(!isSignUp)}
              style={{ cursor: "pointer" }}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default SignInSignUpPage;
