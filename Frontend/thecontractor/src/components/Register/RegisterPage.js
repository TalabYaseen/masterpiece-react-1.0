import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Navbar from "../Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const RegisterPage = () => {
    
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
    <h1 className="mb-5">Regisration Form</h1>
    <form>
    <Row className="mb-3">
        <Col>
            <FloatingLabel controlId="floatingSelect" label="Occupation" className="mb-3">
                <Form.Select aria-label="Floating label select example">
                    <option>Select your occupation</option>
                    <option value="Owner">Owner</option>
                    <option value="Contractor">Contractor</option>
                    <option value="Materials Provider">Materials Provider</option>
                </Form.Select>
            </FloatingLabel>
        </Col>
    </Row>
    <Row className="mb-3">
        <Col>
        <InputGroup className="mb-3">
            <InputGroup.Text>Your name</InputGroup.Text>
            <FloatingLabel controlId="floatingPassword" label="First name">
            <Form.Control aria-label="First name" placeholder="First name"/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Second name">
            <Form.Control aria-label="Second name" placeholder="Second name"/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Last name">
            <Form.Control aria-label="Last name" placeholder="Last name"/> 
            </FloatingLabel>
        </InputGroup>
        </Col>
    </Row>
    <Row className="mb-3">
        <Col>
        <InputGroup className="mb-3">
            <InputGroup.Text>Contacts</InputGroup.Text>
            <FloatingLabel controlId="floatingPassword" label="Phone number">
            <Form.Control aria-label="First name" placeholder="Phone number"/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Email">
            <Form.Control aria-label="Second name" placeholder="Email"/>
            </FloatingLabel>

        </InputGroup>
        </Col>
    </Row>
    <Row className="mb-3">
        <Col>
        <InputGroup className="mb-3">
            <InputGroup.Text>Account</InputGroup.Text>
            <FloatingLabel controlId="floatingPassword" label="Username">
            <Form.Control aria-label="Username" placeholder="Username"/>
            </FloatingLabel>
            <FloatingLabel controlId="Password" label="Password">
            <Form.Control aria-label="Second name" placeholder="Password" type="password"/>
            </FloatingLabel>
            <FloatingLabel controlId="Repassword" label="Repassword">
            <Form.Control aria-label="Last name" placeholder="Repassword" type="password"/> 
            </FloatingLabel>
        </InputGroup>
        </Col>
    </Row>
    <Row>
    <Col>
    <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Upload your photo :</Form.Label>
        <Form.Control id="test" type="file" size="lg" />
      </Form.Group>
    </Col>
    </Row>
    <Col xs="auto" className="my-1 ">
          <Button type="submit"  variant="outline-warning" size="lg">Submit</Button>
    </Col>
    </form>
    </Container>
    </>
  )};


export default RegisterPage;