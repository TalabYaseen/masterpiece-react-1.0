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


const MakeBidPage = () => {

    const [pricingtable,setpricingtable] = useState(false)

  return (
    
    <>
    <Navbar></Navbar>
    <Container>
    <h1 className="mb-5">New Bid</h1>
    <form>
    {/* <Row className="mb-3">
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
  </Row> */}
    <Row className="mb-3">
        <Col>
        <InputGroup className="mb-3">
            <InputGroup.Text>General information</InputGroup.Text>
            <FloatingLabel controlId="Subject" label="Subject">
            <Form.Control aria-label="Subject" placeholder="Subject" name="Subject"/>
            </FloatingLabel>
            <FloatingLabel controlId="Phone" label="Phone Number">
            <Form.Control aria-label="Subject" placeholder="Phone Number" name="Phone"/>
            </FloatingLabel>
            <FloatingLabel controlId="Location" label="Location">
            <Form.Control aria-label="Location" placeholder="Location"/>
            </FloatingLabel>
        </InputGroup>
        </Col>
    </Row>
    <Row>
        <Col>
            <Form.Group className="mb-3" controlId="Description">
            <Form.Label>Description (maximum 100 letter)</Form.Label>
            <Form.Control as="textarea" rows={2} name="Description"/>
            </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Details</Form.Label>
            <Form.Control as="textarea" rows={4} />
            </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col>
            <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Upload Files (if necessary)</Form.Label>
            <Form.Control name="bidfiles" type="file" size="lg" multiple/>
            </Form.Group>
        </Col>
    </Row>
    <PricingTableModal></PricingTableModal>
    </form>
    </Container>
    </>
  )};


export default MakeBidPage;