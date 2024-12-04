import React, { useState } from 'react';
import Form from './Form';
import FullReport from './FullReport';
import {Row, Col } from 'react-bootstrap';
import './details.css';
import './knowyou.css';
import {
  calculateLifePath,
  determineZodiac,
  getChineseZodiac,
  calculatePersonalityNumber,
  calculateDestinyNumber,
  calculateUniversalYear,
  calculatePersonalYear,
  calculateFirstPinnacle,
  calculateSecondPinnacle,
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
        const LifePath = calculateLifePath(day, month, year);
        const WesternZodiac = determineZodiac(day, month);
        const ChineseZodiac = getChineseZodiac(year);
        const PersonalityNumber = calculatePersonalityNumber(day);
        const DestinyNumber = calculateDestinyNumber(firstName, middleName, lastName);
        const UniversalYear = calculateUniversalYear();
        const PersonalYear = calculatePersonalYear(day, month);
        const FirstPinnacle = calculateFirstPinnacle(day, month);
        const SecondPinnacle = calculateSecondPinnacle(day, year);
    
        setResults({
          LifePath,
          WesternZodiac,
          ChineseZodiac,
          PersonalityNumber,
          DestinyNumber,
          UniversalYear,
          PersonalYear,
          FirstPinnacle,
          SecondPinnacle,
        });
    };

    
    return (
        <div id='wrapper'>
          <Row className='know-you-container'>
            <h2 className='my-4 text-center text-white  display-4'>Results</h2>
            <Col  className=" ">

                <Form formData={formData} setFormData={setFormData} onCalculate={calculateAll} results={results} />
                          {/* Display results */}
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