import React from 'react'
import { Card } from 'react-bootstrap'
function TutorCard({tutorData}) {
    console.log(tutorData);

    console.log("From card",Array.isArray(tutorData));
    const Cards = () =>{
        return(
            tutorData?.map((val, index)=> {
                return(
                    <div key={index} className="mb-3">
                        <br/>
                        <Card  className="bg">
                            <Card.Header as="h5">
                                {val.name}
                            </Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    {val.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })
        )
    }
  return (
    <Cards/>
    // <></>
  )
}

export default TutorCard