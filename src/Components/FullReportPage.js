import React, { useState } from 'react';
import Form from './Form';
import FullReport from './FullReport';
import {Row, Col } from 'react-bootstrap';
import './details.css';
import './knowyou.css';
import {
  calculatePersonalityNumber,
  calculateLifePath,
  determineZodiac,
  getChineseZodiac,
  
  calculateDestinyNumber,
  calculateUniversalYear,
  calculatePersonalYear,
  calculateFirstPinnacle,
  calculateSecondPinnacle,
  calculateThirdPinnacle,
  calculateFourthPinnacle
} from './utils';

function FullReportPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        day: '',
        month: '',
        year: '',
    });
    
    const [results, setResults] = useState({});
    

    
    const calculateAll = () => {
        const { firstName, middleName, lastName, day, month, year } = formData;
    
        // Perform calculations (life path, zodiac, etc.)
        const PersonalityNumber = calculatePersonalityNumber(day);
        const LifePath = calculateLifePath(day, month, year);
        const WesternZodiac = determineZodiac(day, month);
        const ChineseZodiac = getChineseZodiac(year);
        
        const DestinyNumber = calculateDestinyNumber(firstName, middleName, lastName);
        const UniversalYear = calculateUniversalYear();
        const PersonalYear = calculatePersonalYear(day, month);
        const FirstPinnacle = calculateFirstPinnacle(day, month);
        const SecondPinnacle = calculateSecondPinnacle(day, year);
        const ThirdPinnacle = calculateThirdPinnacle(day, month, year);
        const FourthPinnacle = calculateFourthPinnacle(month, year);



        setResults({
          PersonalityNumber,
          LifePath,
          WesternZodiac,
          ChineseZodiac,
          
          DestinyNumber,
          UniversalYear,
          PersonalYear,
          FirstPinnacle,
          SecondPinnacle,
          ThirdPinnacle,
          FourthPinnacle,
        });
    };

    
    return (
        <div id='wrapper'>
          <Row className='know-you-container'>
            <h2 className='my-4 text-center text-white  display-4'>RESULTS</h2>
            <Col  className=" pb-5">

                <Form formData={formData} setFormData={setFormData} onCalculate={calculateAll} results={results} />
                {Object.keys(results).length === 0 ? (
                    <p>Loading results...</p>
                ) : (
                <   FullReport results={results} />
                )}
            </Col>
          </Row>
        </div>
    );
}

export default FullReportPage