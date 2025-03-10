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
  calculateFourthPinnacle,
  calculatePinnacleAges

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
            {/* <h2>{calculatePinnacleAges(LifePath)}</h2> */}
            <h3>
              Our self-discovery platform is designed to provide insights into personality and life purpose using fundamental principles of astrology and numerology. 
              The primary goal of this website is to foster self-awareness and a deeper understanding of yourself and those around you. 
              While many individuals find these insights to be highly relatable, it is important to remember that they represent broad tendencies
               rather than definitive conclusions. Personal experiences, beliefs, and life choices all play a significant role in shaping one’s journey,
                and variations from person to person are natural. This platform is intended for self-exploration and personal growth. It should not be considered a rigid
                 or absolute guide, nor a substitute for professional advice in any area of life. We encourage an open mind, curiosity, and a balanced perspective while 
                 engaging with the information provided.
            </h3>
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