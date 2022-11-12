import React from 'react'
import {Container, Row, Col, Image, Card} from 'react-bootstrap'
import TutorCard from './TutorCard';
import teacher from '../image/teach.png'
import student from '../image/beSmart.png'

function Home({tutorData}) {
    console.log(tutorData);
  return (
    <Container>
        <Row xs={1} xl={2} >
          <Col bsPrefix='col' className='col'>
            <Image fluid  src={teacher} alt="teaching_img"/>
          </Col>
          <Col bsPrefix='col' className='col'>
            <div>
                <h1>Tutor Finder</h1> 
                <p>
                A good tutor is patient, knowledgeable, and able to adapt to different learning styles. They will be able to answer questions and provide feedback in a way that is helpful to the student. A good tutor will also be able to keep the student engaged in the material by making it interesting and relevant.
                </p>
            </div>
          </Col>
        </Row>
        <Row xs={1} xl={2}>
            <Col bsPrefix='col' xs={{ order: 'last' }} ls={{ order: 'first' }} >
                <div>
                    <h2>A good student</h2>
                    <p>
                        A good student is someone who is able to balance their academic and personal life. They are able to set aside time to study, but also know how to have fun. Good students are also able to manage their time wisely and prioritize their tasks.
                    </p>
                </div>
            </Col>
            <Col bsPrefix='col' ls={{ order: 'first' }} xs={{ order: 'last' }} >
                <Image fluid src={student}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Home