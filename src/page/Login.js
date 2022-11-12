import React , {useState} from 'react'
import { Container , Button, Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function  Login(props) {
  let navigate = useNavigate()
  const [validated, setValidated] = useState(false);

    const productInitialize = {
      email:'',
      password:''
    }
    const [userForm, setUserForm] = useState(productInitialize)

    const handleChange = (event) =>
    {
      const name =event.target.name;
      const value =event.target.value;
      setUserForm({...userForm,[name]:value})
    }

    const handleSubmit = (event) => {

      const form = event.currentTarget;
      console.log(form);
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else{
        console.log(userForm);
        navigate('/tutor')

      }
      setValidated(true);

    };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={(e)=>{handleSubmit(e)}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{handleChange(e)}} name='email' required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>{handleChange(e)}} name='password' required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Container className='d-flex flex-row'>
            <Form.Check className='p-2' type="checkbox" label="Remember me"  />
            <Button className='p-2' variant="link">Forget password</Button> 
          </Container>          
        </Form.Group>
        <Button variant="secondary" type="submit" >
          Submit
        </Button>
      </Form>
      <br/>
      <div className=' ' >
        <p>Creat an new account <a href='/student/register' className='Alink'>Go to sign</a></p>
      </div>
    </Container>
  );
}
