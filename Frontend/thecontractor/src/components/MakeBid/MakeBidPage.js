import React, { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Navbar from "../Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import PricingTableModal from "./PricingTableModal";
import BidService from '../../apis/BidService';
import { toast,ToastContainer } from 'react-toastify';


const MakeBidPage = () => {

//--------------------------------------------------------- Bid info state start----------------------------------------------------------------------
const [data , setdata] = useState({
            userid : JSON.parse(sessionStorage.getItem("user")).user_id,
            Subject : "" ,
            Phone : "" ,
            Location : "" ,
            Description : "" ,
            Details : "" ,
  });
//----------------------------------------------------------- Bid info state end------------------------------------------------------------------------




//-------------------------------------------------------- files state --------------------------------------------------------------------
    const [selectedFiles, setSelectedFiles] = useState([]);
    const handleFileInputChange = (event) => {
        console.log(event.target.files)
        setSelectedFiles(Array.from(event.target.files));
      };




// --------------------------------------------------------error msg start-------------------------------------------------------------------------------

    const [SubjectError, setSubjectError] = useState(true);
    const [PhoneError, setPhoneError] = useState(true);
    const [LocationError, setLocationError] = useState(true);
    const [DiscriptionError, setDiscriptionError] = useState(true);
    const [PricingtableError, setPricingtableError] = useState(true);
    const [hassubmit, sethassubmit] = useState(false);


// ---------------------------------------------------------error msg end  -------------------------------------------------------------------------------





// ------------------------------------------pricing table data in main page start --------------------------------------------------------

    const [Pricingtable, setPricingtable] = useState([]);

// ------------------------------------------pricing table data in main page end  ---------------------------------------------------------





// ---------------------------------------  function to get data from the modal start -----------------------------------------------------
    
    const handlePricingTableChange = (PricingtableUpdate) => {
            setPricingtable (PricingtableUpdate)
            setPricingtableError(false)
        }

// ---------------------------------------  function to get data from the modal end -------------------------------------------------------






//---------------------------------------- function to save bid data start------------------------------------------------------------------
const handlechange = (e) => {
    setdata(prev=>({...prev,[e.target.name]:e.target.value}))
      const name=e.target.name;
      const value=e.target.value;
      switch (name) {
        case 'Subject':
            if (value == "") {
                setSubjectError (true)
            }else{setSubjectError (false)}
           
        break;
        case 'Phone':
            if (!(/^\d{10}$/.test(value))) {setPhoneError (true)}
            else {setPhoneError (false)} 
        break;
        case 'Location':
            if(value == "") {setLocationError (true)}
            else {setLocationError (false)} 
        break;
        case 'Description':
            if(value == "") {setDiscriptionError (true)}
            else {setDiscriptionError (false)} 
        break;

}}
//---------------------------------------- function to save bid data ends------------------------------------------------------------------







//------------------------------------------------ function to save the bid start -------------------------------------------------------
    const savebid =(event)=> {
        sethassubmit (true);
        event.preventDefault();

        if ( event.target.Subject.value == "") {
            setSubjectError (true)
        }
        if ( Pricingtable.length == 0) {
            setPricingtableError (true)
        }
        if (!(/^\d{10}$/.test(event.target.Phone.value))) {
            setPhoneError (true)
        }
        if (event.target.Location.value == "") {
             setLocationError (true)
        }
        if (event.target.Description.value == "") {
            setDiscriptionError(true)
        }

        const formData = new FormData();
            for (let i = 0; i < selectedFiles.length; i++) {
            formData.append("files[]", selectedFiles[i]);
            }

if (SubjectError || PhoneError || LocationError || DiscriptionError || PricingtableError){
}else {
    BidService.createBid(JSON.stringify(data)).then(function(res){
        if (res.data == "Bid created") {
            BidService.additems(JSON.stringify(Pricingtable)).then(function(res){
              });
            toast.success('Bid Successfully created!');

        }else{
            toast.error('failed to create bid');
      }
      });
      selectedFiles.forEach(element => {
        const formData = new FormData();
        formData.append('file', element);
        BidService.addfiles((formData)).then(function(res){

        })
      });

}
        

    }

//------------------------------------------------ function to save the bid end -------------------------------------------------------

















  return (
    
    <>
    <Navbar></Navbar>
    <Container>
    <h1 className="mb-5">New Bid</h1>
    <form onSubmit={savebid}>
{/*------------------------------------------- required data  Subject Phone Number Location  start -----------------------------------*/}
    <Row className="mb-3">
        <Col>
        <InputGroup className="mb-3">
            <InputGroup.Text>General information</InputGroup.Text>
            <FloatingLabel controlId="Subject" label="Subject">
            <Form.Control aria-label="Subject" placeholder="Subject" name="Subject" onChange={handlechange}/>
            </FloatingLabel>
            <FloatingLabel controlId="Phone" label="Phone Number">
            <Form.Control aria-label="Subject" placeholder="Phone Number" name="Phone" onChange={handlechange}/>
            </FloatingLabel>
            <FloatingLabel controlId="Location" label="Location">
            <Form.Control aria-label="Location" placeholder="Location" onChange={handlechange} name="Location"/>
            </FloatingLabel>
        </InputGroup>
        </Col>
    </Row>

{/*------------------------------------------- error messege container --------------------------------------------------------------*/}

    <Col>
    <Row className="mb-3">
    {(SubjectError && hassubmit) &&
        <span className="mb-3 errormsg">
        Subject is Required
        </span>
    }
    {(PhoneError && hassubmit) &&
        <span className="mb-3 errormsg">
        Phone must be 10 digits
        </span>
    }
    {(LocationError && hassubmit) &&
        <span className="mb-3 errormsg">
        Location is Required
        </span>
    }
    </Row>
    </Col>

{/*------------------------------------------- required data  Subject Phone Number Location  end --------------------------------------*/}
{/*------------------------------------------------------ Discription start -----------------------------------------------------------*/}
    <Row>
        <Col>
            <Form.Group className="mb-3" controlId="Description">
            <Form.Label>Description (maximum 100 letter)</Form.Label>
            <Form.Control as="textarea" rows={2} name="Description" onChange={handlechange}/>
            </Form.Group>
        </Col>
    </Row>
    {/* error messege container*/}
{(DiscriptionError && hassubmit) &&
    <Col>
    <Row className="mb-3">
        <div className="mb-3 errormsg">
        This Information is Required
        </div>
    </Row>
    </Col>
}
{/*------------------------------------------------------ Discription ends ------------------------------------------------------------*/}

    <Row>
        <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Details</Form.Label>
            <Form.Control as="textarea" rows={4} name="Details" onChange={handlechange}/>
            </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col>
            <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Upload Files (if necessary)</Form.Label>
            <Form.Control name="bidfiles" type="file" size="lg" multiple onChange={handleFileInputChange}/>
            </Form.Group>
        </Col>
    </Row>
    <PricingTableModal PricingTableChange={handlePricingTableChange}></PricingTableModal>
    <br></br>
    {(PricingtableError && hassubmit) &&

        <div className="mb-3 errormsg">
        Add at least 1 item
        </div>}
    <Button variant="outline-success" size="lg" type="submit">
      Submit
      </Button>
      
    </form>
    </Container>
    </>
  )};


export default MakeBidPage;