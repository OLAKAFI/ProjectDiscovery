import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

function SideBar({ isSignedIn, handleSignOut }) {
    const [isMobileView, setIsMobileView] = useState(false);

    // Check screen size on load and resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobileView(window.innerWidth <= 1024); // Laptop width breakpoint
        };

        checkScreenSize(); // Check on component mount
        window.addEventListener("resize", checkScreenSize); // Add listener

        return () => window.removeEventListener("resize", checkScreenSize); // Cleanup listener
    }, []);
  return (
    <>
            {isMobileView ? (
                // Mobile Navbar (Constant at the Top)
                <nav className="mobile-navbar">
                    <ul className="mobile-menu">
                        <li>
                            <NavLink to="/intro">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/know-you">Overview</NavLink>
                        </li>
                        {isSignedIn && (
                            <li>
                                <NavLink to="/details-page">Discovery</NavLink>
                            </li>
                        )}
                        <li>
                                <NavLink to="/get-in-touch">Contact</NavLink>
                        </li>
                  
                        {isSignedIn && (
                            <li>
                                <NavLink to="/signout" onClick={handleSignOut}>
                                    Close
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
            ) : (
                // Desktop Sidebar
                <section id="sidebar">
                    <div className="inner">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/intro">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/know-you">Overview</NavLink>
                                </li>
                                {isSignedIn && (
                                    <li>
                                        <NavLink to="/details-page">Discover Me</NavLink>
                                    </li>
                                )}
                                <li>
                                        <NavLink to="/get-in-touch">Get in touch</NavLink>
                                </li>

                                {isSignedIn && (
                                    <li>
                                        <NavLink to="/signout" onClick={handleSignOut}>
                                            Sign Out
                                        </NavLink>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </section>
            )}
        </>
  )
}

export default SideBar;


