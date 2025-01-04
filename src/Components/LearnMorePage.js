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
        <section id="intro" className="know-you-container" >
            <div className='vh-100 row align-items-center'>
              <div className=" px-5">
                  <h1>{content.title}</h1>
                  <p>{content.description}</p>
                  <p>Additional information about {content.title}...</p>
              </div>
            </div>
        </section>
    </div>
  )
}

export default LearnMorePage