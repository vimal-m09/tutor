import React from 'react'
import { Container } from 'react-bootstrap'
import TutorCard from '../component/TutorCard'
function Tutor({tutorData}) {
  return (
    <Container>
        <TutorCard tutorData={tutorData}/>
    </Container>
  )
}

export default Tutor