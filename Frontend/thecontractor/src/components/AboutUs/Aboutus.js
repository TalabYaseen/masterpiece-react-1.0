import { redirect  } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
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
import "./aboutus.css";
import OfferService from "../../apis/OfferService";
import BidService from "../../apis/BidService";

const Aboutus = () => {
return(

    <>
        <Navbar></Navbar>

<body>
    <div class="about">
        <div class="inner-section">
            <p class="text">
<h2>About Our Company</h2>
Welcome to The Contractor! We are a dedicated platform that aims to connect homeowners, contractors, and material providers in the realm of small construction and maintenance projects. Our goal is to streamline the bidding process, making it easier and more efficient for both project owners and service providers.

<h2>Our Mission</h2>
At The Contractor, our mission is to simplify the process of finding reliable contractors and material providers for small construction and maintenance work. We understand the challenges faced by homeowners when it comes to finding trustworthy professionals, and we aim to bridge that gap by providing a convenient platform for bidding and collaboration.

How It Works
Submit Your Bid: Homeowners can submit their project details, including project scope, timelines, and specific requirements, through our user-friendly interface.

Get Competitive Quotes: Contractors and material providers registered on our platform can review the project details and submit competitive quotes, ensuring that homeowners have a range of options to choose from.

Choose the Right Partner: Homeowners can evaluate the quotes, review the profiles of service providers, and select the contractor or material provider that best meets their needs.

Collaborate and Complete the Project: Once the project is awarded, homeowners can collaborate directly with the selected contractor or material provider to finalize the details and successfully complete the construction or maintenance work.

            </p>
        </div>
    </div>
</body>
</>
)
}


export default Aboutus;

