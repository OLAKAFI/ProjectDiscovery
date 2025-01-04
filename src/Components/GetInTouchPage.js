import React from 'react';
import { Row, Col } from "react-bootstrap";
import GetInTouch from './GetInTouch';
import './knowyou.css';

function GetInTouchPage() {
    return (
        <div id="know-you-wrapper ">
          <section id="know_you" className="know-you-container " >
              <Row className=''>
                <Col>
                  <GetInTouch/>
                </Col>
              </Row>
            </section>
        </div>
    );
}

export default GetInTouchPage