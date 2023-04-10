import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Navbar from "../Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const Signin = () => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(event.target.inlineRadio.value);
        const user = {first_name :event.target.First_Name.value, 
                second_name :event.target.Second_Name.value, 
                last_name :event.target.Last_Name.value, 
                Occupation :event.target.inlineRadio.value, 
                phone :event.target.Phone_Number.value, 
                password :event.target.password.value, 
                photo :event.target.photo.value, 
                email :event.target.Email.value}
                console.log(user)
                // UserService.createUser(JSON.stringify(user) );
    }
  return (
    <>
    <Navbar></Navbar>
    <Container>
    <h1 className="mb-5">Login Form</h1>
    <form>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
            <Form.Control type="email" placeholder="name@example.com" />
             </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Col xs="auto" className="my-1 ">
          <Button type="submit"  variant="outline-warning" size="lg">Submit</Button>
        </Col>
    </form>
    </Container>
    </>
  )};


export default Signin;