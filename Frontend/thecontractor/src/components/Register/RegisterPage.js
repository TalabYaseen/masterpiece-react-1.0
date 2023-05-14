import { redirect  } from "react-router-dom";
import React, { useState } from "react";
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

// ----------------------------------------- error start ---------------------------------------------
const RegisterPage = () => {
    const navigate = useNavigate();
    const [first_nameError, setfirst_nameError] = useState(false);
    const [second_nameError, setsecond_nameError] = useState(false);
    const [last_nameError, setlast_nameError] = useState(false);
    const [OccupationError, setOccupationError] = useState(false);
    const [phoneError, setphoneError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [repasswordError, setrepasswordError] = useState(false);
    const [emailError, setemailError] = useState(false);
// ----------------------------------------- error end ----------------------------------------------

//--------------------------------------------------------- Bid info state start----------------------------------------------------------------------
const [data , setdata] = useState({
    First_Name : "",
    Second_Name : "" ,
    Last_Name : "" ,
    Occupation : "" ,
    Phone_Number : "" ,
    Email : "" ,
    password : "" ,
});
//----------------------------------------------------------- Bid info state end------------------------------------------------------------------------







    const handleSubmit = (event) =>{
        event.preventDefault(); 
                
    if (!( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(event.target.Email.value))) {
        setemailError (true)
    }
    if (!(/^\d{10}$/.test(event.target.Phone_Number.value))) {
        setphoneError (true)
    }
    if (!(/^[a-zA-Z ]+$/.test(event.target.First_Name.value))) {
        setfirst_nameError (true)
    }
    if (!(/^[a-zA-Z ]+$/.test(event.target.Second_Name.value))) {
        setsecond_nameError (true)
    }
    if (!(/^[a-zA-Z ]+$/.test(event.target.Last_Name.value))) {
        setlast_nameError (true)
    }
    if (!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(event.target.password.value))) {
        setpasswordError (true)
    }
    if (((event.target.repassword.value != event.target.password.value))) {
        setrepasswordError (true)
    }
    if ((event.target.Occupation.value == "Select your occupation")) {
        setOccupationError (true)
    }
    if (first_nameError || second_nameError || last_nameError || OccupationError || phoneError || passwordError || repasswordError || emailError){
        }else {
            UserService.createUser(JSON.stringify(data)).then(function(res){
                if (res.data == "email used") {
                    toast.error('this email is used with another account');
                }
                else if (res.data) {
                    toast.success('Account Successfully created!');
                    sessionStorage.setItem("user", JSON.stringify(res.data[0]));
                    navigate('/');
                }else{
              }
              });
        }

    }
    const handlechange = (e) => {
        setdata(prev=>({...prev,[e.target.name]:e.target.value}))
          const name=e.target.name;
          const value=e.target.value;
          switch (name) {
            case 'First_Name':
                if (!(/^[a-zA-Z ]+$/.test(value))) {
                    setfirst_nameError (true)
                }else {setfirst_nameError (false)}
            break;
            case 'Second_Name':
                if (!(/^[a-zA-Z ]+$/.test(value))) {
                    setsecond_nameError (true)
                }else {setsecond_nameError (false)}
                setsecond_nameError (false)
            break;
            case 'Last_Name':
                if (!(/^[a-zA-Z ]+$/.test(value))) {
                    setlast_nameError (true)
                }else {setlast_nameError (false)}
            break;
            case 'Occupation':
                if ((value == "Select your occupation")) {
                    setOccupationError (true)
                }else {
                    setOccupationError (false)
                }
                
            break;
            case 'Phone_Number':
                if (!(/^\d{10}$/.test(value))) {
                    setphoneError (true)
                }else {
                    setphoneError (false)
                }
                
            break;
            case 'Email':
                if ( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(value)) {setemailError (false)}else {
                    setemailError (true)
                }
            break;
            case 'password':
                if (!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value))) {
                    setpasswordError (true)
                }else {setpasswordError (false)}
                
            break;
            case 'repassword':
                if (((value != document.getElementById("password").value))) {
                    setrepasswordError (true)
                }else {setrepasswordError (false)}
                
            break;
    
    }}






  return (
    
    <>
    <Navbar></Navbar>
    <Container>
    <h1 className="mb-5">Regisration Form</h1>
    <form onSubmit={handleSubmit}>
    <Row className="mb-3">
        <Col>
            <FloatingLabel controlId="floatingSelect" label="Occupation" className="mb-3">
                <Form.Select aria-label="Floating label select example" name="Occupation" onChange={handlechange}>
                    <option>Select your occupation</option>
                    <option value="Owner">Owner</option>
                    <option value="Contractor">Contractor</option>
                    <option value="Materials Provider">Materials Provider</option>
                </Form.Select>
            </FloatingLabel>

{OccupationError &&
<div className="errormsg">
Occupation is Required
</div>
}


        </Col>
    </Row>

    <Row className="mb-3">
        <Col>
        <InputGroup className="mb-3">
            <InputGroup.Text>Your name</InputGroup.Text>
            <FloatingLabel controlId="floatingPassword" label="First name">
            <Form.Control aria-label="First name" placeholder="First name" name="First_Name" onChange={handlechange}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Second name">
            <Form.Control aria-label="Second name" placeholder="Second name" name="Second_Name" onChange={handlechange}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Last name">
            <Form.Control aria-label="Last name" placeholder="Last name" name="Last_Name" onChange={handlechange}/> 
            </FloatingLabel>
        </InputGroup>
{(first_nameError || second_nameError || last_nameError) &&
<div className="errormsg">
Name must contain just letters
</div>
}
        </Col>
    </Row>
    <Row className="mb-3">
        <Col>
        <InputGroup className="mb-3">
            <InputGroup.Text>Contacts</InputGroup.Text>
            <FloatingLabel controlId="floatingPassword" label="Phone number">
            <Form.Control aria-label="First name" placeholder="Phone number" name="Phone_Number" onChange={handlechange}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Email">
            <Form.Control aria-label="Second name" placeholder="Email" name="Email" onChange={handlechange}/>
            </FloatingLabel>
        </InputGroup>
{(phoneError) &&
<div className="errormsg">
Phone Number must be 10 digits
</div>
}
{(emailError) &&
<div className="errormsg">
This is not a vaild email
</div>
}
        </Col>
    </Row>
    <Row className="mb-3">
        <Col>
        <InputGroup className="mb-3">
            <InputGroup.Text>Account</InputGroup.Text>
            <FloatingLabel controlId="Password" label="Password">
            <Form.Control aria-label="Second name" placeholder="Password" type="password" name="password" id="password" onChange={handlechange}/>
            </FloatingLabel>
            <FloatingLabel controlId="Repassword" label="Repassword">
            <Form.Control aria-label="Last name" placeholder="Repassword" type="password" name="repassword" onChange={handlechange}/> 
            </FloatingLabel>
        </InputGroup>
{(passwordError) &&
<div className="errormsg">
Password must have:
8 or more characters
1 Special character
1 Lowercase
1 Uppercase
</div>
}
{(repasswordError) &&
<div className="errormsg">
password dose not match
</div>
}
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