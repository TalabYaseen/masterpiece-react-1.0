import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Navbar from "../Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import UserService from '../../apis/UserService';
import { toast,ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Signin = () => {
  const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(event.target.inlineRadio.value);
        const user = {
                password :event.target.password.value, 
                email :event.target.email.value}

                UserService.finduser(JSON.stringify(user)).then(function(res){
                  console.log(res.data)
                  if (res.data == "user not found") {
                      toast.error('wrong email or password');
                  }
                  else if (res.data) {
                      // toast.success('Account Successfully created!');
                      sessionStorage.setItem("user", JSON.stringify(res.data));
                      navigate('/');
                  }else{
                }
                });
    }
  return (
    <>
    <Navbar></Navbar>
    <Container>
    <h1 className="mb-5">Login Form</h1>
    <form onSubmit={handleSubmit}>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
            <Form.Control type="email" placeholder="name@example.com" name="email"/>
             </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" name="password"/>
        </FloatingLabel>
        <Col xs="auto" className="my-1 ">
          <Button type="submit"  variant="outline-warning" size="lg">Submit</Button>
        </Col>
    </form>
    </Container>
    </>
  )};


export default Signin;