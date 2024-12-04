import React from 'react';
import { useParams } from "react-router-dom";
import KnowYouData from "../data/KnowYouData";
import "./knowyou.css"; // Assuming you have a custom CSS file for styling
import "./introduction.css"; // Import custom CSS for styling if needed

function LearnMorePage() {

    const { id } = useParams(); // Get the dynamic ID from the route

    const content = KnowYouData.find((item) => item.id === id);
  
    if (!content) {
      return <p>Content not found.</p>;
    }
  return (
    <div id="wrapper">
        <section id="intro" className="" >
            <div className="introduction-container">
                <h1>{content.title}</h1>
                <p>{content.description}</p>
                <p>Additional information about {content.title}...</p>
            </div>
        </section>
    </div>
  )
}

export default LearnMorePage