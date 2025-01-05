
import React, { useState } from 'react';
import Form from './Form';
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
  calculateFirstPinnacleCycle,
  calculateSecondPinnacleCycle,
  calculateThirdPinnacleCycle,
  calculateFourthPinnacleCycle,
} from './utils';
import FullReport from './FullReport';

function DetailsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    day: '',
    month: '',
    year: '',
  });

  const [results, setResults] = useState({});

  // Calculation functions (same as before)

  

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
    const FirstPinnacleCycle = calculateFirstPinnacleCycle(day, month);
    const SecondPinnacleCycle = calculateSecondPinnacleCycle(day, year);
    const ThirdPinnacleCycle = calculateThirdPinnacleCycle(day,month, year);
    const FourthPinnacleCycle = calculateFourthPinnacleCycle(month, year);

    setResults({
      LifePath,
      WesternZodiac,
      ChineseZodiac,
      PersonalityNumber,
      DestinyNumber,
      UniversalYear,
      PersonalYear,
      FirstPinnacleCycle,
      SecondPinnacleCycle,
      ThirdPinnacleCycle,
      FourthPinnacleCycle,
    });
  };

  return (
    <div id="know-you-wrapper ">
      <section id="know_you" className="know-you-container" >
          <Row className=''>
            <Col  className=" ">
              <Form formData={formData} setFormData={setFormData} onCalculate={calculateAll} />
              <FullReport results={results}/>
            </Col>
          </Row>
        </section>
    </div>
  );
}

export default DetailsPage;
