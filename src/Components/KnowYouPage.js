import React from 'react';
import KnowYou from './KnowYou';
import "./knowyou.css"; // Assuming you have a custom CSS file for styling

function KnowYouPage() {
  return (
    <div className=''>
        <KnowYou id="personalityNumber"/>
        <KnowYou id="lifePath"/>
        <KnowYou id="expressionNumber"/>
        <KnowYou id="pinnacleCycle"/>
        <KnowYou id="universalYear"/>
        <KnowYou id="personalYear"/>
        <KnowYou id="personalMonth"/>
        <KnowYou id="personalDay"/>
        
    </div>
  )
}

export default KnowYouPage