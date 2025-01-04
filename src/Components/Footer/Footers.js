import React from 'react';
import "./footer.css"; 

function Footers() {
  return (
    <div id="wrapper">
        <section id="intro" className="">
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-section">
                            <h4>Discover Me</h4>
                            <p>Your journey begins here.</p>
                        </div>
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="/intro">Intro</a></li>
                                <li><a href="/know-you">Know Yourself</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Contact Us</h4>
                            <p>Email: support@discoverme.com</p>
                            <p>Phone: +123-456-7890</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Discover Me. All Rights Reserved.</p>
                    </div>
                </footer>
        </section>
    </div> 
  )
}

export default Footers;
