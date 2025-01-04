
// src/App.js
import React, { useState } from "react";
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Introduction from "./Components/Introduction";
import KnowYouPage from "./Components/KnowYouPage";
import DetailsPage from "./Components/DetailsPage";
import LearnMorePage from "./Components/LearnMorePage";
import SignInSignUpPage from "./Components/SignInSignUpPage";
import SignOutPage from "./Components/SignOutPage";
import Footers from "./Components/Footer/Footers";
import SideBar from "./Components/SideBar/SideBar";
import GetInTouchPage from "./Components/GetInTouchPage";


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignOut = () => {
    setIsSignedIn(false)}; // Reset signed-in state
  
  return (
    <Router>
      <div className="main-layout display-content-center">
        <SideBar isSignedIn={isSignedIn} handleSignOut={handleSignOut}/>
          <Routes className="content-area">
            <Route path="/" element={isSignedIn ?  (<Navigate to="/" replace />) : (<SignInSignUpPage setIsSignedIn={setIsSignedIn}/>) } />
            {/* <Route path="/welcome" element={<Register/>} /> */}
            <Route path="/intro" element={<Introduction/>} />
            <Route path="/know-you"  element={<KnowYouPage/>} />
            <Route path="/know-you/:id"  element={<LearnMorePage/>} />
            <Route path="/details-page"  element={<DetailsPage/>} />
            <Route path="/get-in-touch"  element={<GetInTouchPage/>} />
            <Route path="/signout" element={ !isSignedIn ? (<Navigate to="/" replace />) : (<SignOutPage setIsSignedIn={setIsSignedIn}/>) } />
            {/* <Route path="/details-page/full-report"  element={<FullReportPage/>} /> */}

            {/* Add other routes here if needed */}
          </Routes>
      </div>
      <Footers/>
    </Router>
  );
}

export default App
