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
import { useEffect } from "react";





const Editprofile = () => {


    // edit profile
const [data , setdata] = useState({
    user_id : JSON.parse(sessionStorage.getItem("user")).user_id ,
    first_name : JSON.parse(sessionStorage.getItem("user")).first_name,
    second_name : JSON.parse(sessionStorage.getItem("user")).second_name ,
    last_name : JSON.parse(sessionStorage.getItem("user")).last_name ,
    occupation : JSON.parse(sessionStorage.getItem("user")).occupation ,
    phone_number : JSON.parse(sessionStorage.getItem("user")).phone_number ,
    email : JSON.parse(sessionStorage.getItem("user")).email ,
    user_photo : "" ,
    password : JSON.parse(sessionStorage.getItem("user")).password ,
});


// photo start
const [selectedFile, setSelectedFile] = useState(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type.includes('image')) {
    setSelectedFile(file);
  } else {
    setSelectedFile(null);
    document.getElementById("photo").value = "";
    toast.error('Please select photo file');

  }
};





// ----------------------------------------- error start ---------------------------------------------

    const [first_nameError, setfirst_nameError] = useState(false);
    const [second_nameError, setsecond_nameError] = useState(false);
    const [last_nameError, setlast_nameError] = useState(false);
    const [occupationError, setoccupationError] = useState(false);
    const [phoneError, setphoneError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [repasswordError, setrepasswordError] = useState(false);
    const [emailError, setemailError] = useState(false);
// ----------------------------------------- error end ----------------------------------------------

    const handleSubmit = (event) =>{
        event.preventDefault(); 
    // check changes start
     var   tempdata = JSON.parse(sessionStorage.getItem("user"))
    if ((tempdata.first_name == event.target.first_name.value) && (tempdata.second_name == event.target.second_name.value) && (tempdata.last_name == event.target.last_name.value) && (tempdata.occupation == event.target.occupation.value) && (tempdata.phone_number == event.target.phone_number.value) && (tempdata.email == event.target.email.value) && (tempdata.password == event.target.password.value) && (event.target.photo.value == "" ))
    {
        toast.error('You did not change any thing');
    }
    // check changes end

    else {
    if (!( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(event.target.email.value))) {
        setemailError (true)
    }
    if (!(/^\d{10}$/.test(event.target.phone_number.value))) {
        setphoneError (true)
    }
    if (!(/^[a-zA-Z ]+$/.test(event.target.first_name.value))) {
        setfirst_nameError (true)
    }
    if (!(/^[a-zA-Z ]+$/.test(event.target.second_name.value))) {
        setsecond_nameError (true)
    }
    if (!(/^[a-zA-Z ]+$/.test(event.target.last_name.value))) {
        setlast_nameError (true)
    }
    if (!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(event.target.password.value))) {
        setpasswordError (true)
    }
    if (((event.target.repassword.value != event.target.password.value))) {
        setrepasswordError (true)
    }
    if ((event.target.occupation.value == "Select your occupation")) {
        setoccupationError (true)
    }
    if (first_nameError || second_nameError || last_nameError || occupationError || phoneError || passwordError || repasswordError || emailError){
    }else {
        console.log(data,"data");
        UserService.updateuser((data)).then(function(res){
                toast.success('Account Updated successfully!');
                sessionStorage.setItem("user", JSON.stringify(data));
                if(document.getElementById("photo").value){
                    const formData = new FormData();
                    formData.append('file', selectedFile);
                    formData.append('id', (JSON.parse(sessionStorage.getItem("user"))).user_id);
                    UserService.updatephoto(formData ,).then(function(res){
                        let user = JSON.parse(sessionStorage.getItem("user")) ;
                        user.user_photo = res.data;
                        console.log(res.data,"res.data")
                        sessionStorage.setItem("user", JSON.stringify(user));
                    })
                }
                setTimeout(() => {
                    // window.location.href = "/"
          });
    })
    }

}}
    const handlechange = (e) => {
        setdata(prev=>({...prev,[e.target.name]:e.target.value}))
          const name=e.target.name;
          const value=e.target.value;
          switch (name) {
            case 'first_name':
                if (!(/^[a-zA-Z ]+$/.test(value))) {
                    setfirst_nameError (true)
                }else {setfirst_nameError (false)}
            break;
            case 'second_name':
                if (!(/^[a-zA-Z ]+$/.test(value))) {
                    setsecond_nameError (true)
                }else {setsecond_nameError (false)}
                setsecond_nameError (false)
            break;
            case 'last_name':
                if (!(/^[a-zA-Z ]+$/.test(value))) {
                    setlast_nameError (true)
                }else {setlast_nameError (false)}
            break;
            case 'occupation':
                if ((value == "Select your occupation")) {
                    setoccupationError (true)
                }else {
                    setoccupationError (false)
                }
                
            break;
            case 'phone_number':
                if (!(/^\d{10}$/.test(value))) {
                    setphoneError (true)
                }else {
                    setphoneError (false)
                }
                
            break;
            case 'email':
                if ( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(value)) {setemailError (false)}else {
                    setemailError (true)
                }
            break;
            case 'password':
                if (!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value))) {
                    setpasswordError (true)
                }else {setpasswordError (false)}
                if (((value != document.getElementById("repassword").value))) {
                    setrepasswordError (true)
                }else {setrepasswordError (false)}
                
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
            <FloatingLabel controlId="floatingSelect" label="occupation" className="mb-3">
                <Form.Select aria-label="Floating label select example" name="occupation" onChange={handlechange} defaultValue={data.occupation}>
                    <option>Select your occupation</option>
                    <option value="Owner">Owner</option>
                    <option value="Contractor">Contractor</option>
                    <option value="Materials Provider">Materials Provider</option>
                </Form.Select>
            </FloatingLabel>

{occupationError &&
<div className="errormsg">
occupation is Required
</div>
}


        </Col>
    </Row>

    <Row className="mb-3">
        <Col>
        <InputGroup className="mb-3">
            <InputGroup.Text>Your name</InputGroup.Text>
            <FloatingLabel controlId="floatingPassword" label="First name">
            <Form.Control aria-label="First name" placeholder="First name" name="first_name" onChange={handlechange} defaultValue={data.first_name}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Second name">
            <Form.Control aria-label="Second name" placeholder="Second name" name="second_name" onChange={handlechange} defaultValue={data.second_name}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Last name">
            <Form.Control aria-label="Last name" placeholder="Last name" name="last_name" onChange={handlechange} defaultValue={data.last_name}/> 
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
            <Form.Control aria-label="First name" placeholder="Phone number" name="phone_number" onChange={handlechange} defaultValue={data.phone_number}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="email">
            <Form.Control aria-label="Second name" placeholder="email" name="email" onChange={handlechange}  defaultValue={data.email}/>
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
            <Form.Control aria-label="Second name" placeholder="New Password" type="password" name="password" id="password" onChange={handlechange} defaultValue={data.password}/>
            </FloatingLabel>
            <FloatingLabel controlId="Repassword" label="Confirm New password">
            <Form.Control aria-label="Last name" placeholder="Repassword" type="password" name="repassword" onChange={handlechange} defaultValue={data.password} id="repassword"/> 
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
    <Row>
        <Col>
            <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Upload profile photo</Form.Label>
            <Form.Control name="photo" type="file" size="lg" onChange={handleFileChange} id="photo"/>
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


export default Editprofile;