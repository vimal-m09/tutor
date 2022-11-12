import React,{useState} from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';


export const Register = () => {
  let navigate = useNavigate()
  const [validated, setValidated] = useState(false);

  const productInitialize = {
    username:'',
    zip:null,
    city:'',
    email:'',
    password:'',
    street:'',
    area:'',
    state:''
  }
  const [userForm, setUserForm] = useState(productInitialize)

  const handleChange = (event) =>
  {
    const name =event.target.name;
    const value =event.target.value;
    setUserForm({...userForm,[name]:value})
  }

  const handleSubmit = (event) => {
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    }
    else
    {
      console.log(userForm);
      navigate('/tutor')
    }
    setValidated(true);
  };

  return (
    <Container>
      <Form noValidate validated={validated}  method='post'>
        <Row xs={1} md={2} lg={3} className="mb-3" >
          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" onChange={(e)=>{handleChange(e)}} name='username'  required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{handleChange(e)}} name='email' required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>{handleChange(e)}} name='password' required />
          </Form.Group>
        </Row>
        <Button variant="secondary" type="button" onClick={(e)=>{handleSubmit(e)}}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
