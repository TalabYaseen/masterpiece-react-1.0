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
import "./Profile.css";
import OfferService from "../../apis/OfferService";
import BidService from "../../apis/BidService";
import { Link } from 'react-router-dom';
import { AiFillPhone } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import OffersModal from "./offersmodal";
// import OfferService from '../../apis/OfferService';

const Profile = () => {
    const [mybids,setmybids] = useState([]);
    useEffect(() => {
        console.log(((JSON.parse(sessionStorage.getItem("user"))).user_id))
        BidService.getmybids((JSON.parse(sessionStorage.getItem("user"))).user_id).then(function(res){
            setmybids(res.data)
        //   console.log(data)
        });
        
      }

      , []);
    
return(

    <>
        <Navbar></Navbar>
        <body>
        <section id="about-section">
            <div class="about-left">
                <img src={JSON.parse(sessionStorage.getItem("user"))["user_photo"] ?require("../../../public/profilephotos/"+JSON.parse(sessionStorage.getItem("user"))["user_photo"]):require("../images/profile_pics/avatarphotoplaceholder.png")} alt="About Img"/>
            </div>

            <div class="about-right">
                <h1>{JSON.parse(sessionStorage.getItem("user"))["first_name"]} {JSON.parse(sessionStorage.getItem("user"))["second_name"]} {JSON.parse(sessionStorage.getItem("user"))["last_name"]}</h1>
                <div class="address">
                    <ul>
                        <li>
                            <span class="address-logo">
                            <MdWork></MdWork>
                            </span>
                            <p>Occupation</p>
                            <span class="saprater"></span>
                            <p>{JSON.parse(sessionStorage.getItem("user"))["occupation"]}</p>
                        </li>
                        <li>
                            <span class="address-logo">
                            <AiFillPhone></AiFillPhone>
                            </span>
                            <p>Phone No</p>
                            <span class="saprater"></span>
                            <p>{JSON.parse(sessionStorage.getItem("user"))["phone_number"]}</p>
                        </li>
                        <li>
                            <span class="address-logo">
                                <AiOutlineMail></AiOutlineMail>
                            </span>
                            <p>Email</p>
                            <span class="saprater"></span>
                            <p>{JSON.parse(sessionStorage.getItem("user"))["email"]} </p>
                        </li>
                        <li>
                        <Link className="editbut" to="/editprofile"><Button variant="outline-warning" size="md">Edit info</Button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <div className="My_Bids">
            <h2 >My Bids</h2>
            {!(mybids)? <p>You did not post any bid</p>: mybids.map(bid => {
    return(
      <div class="bid">
      <div class="bid-sec1">
        <div class="sec-title">Publisher Name </div>
        <div class="sec-content">: {JSON.parse(sessionStorage.getItem("user"))["first_name"]} {JSON.parse(sessionStorage.getItem("user"))["last_name"]}</div>
        <div class="sec-title">Publish Date</div>
        <div class="sec-content">: {bid.created_at.split(' ')[0]}</div>
        <div class="sec-title">Subject</div>
        <div class="sec-content">: {bid.subject}</div>
      </div>
      <div class="bid-sec2">
        <span class="sec-title">Description</span>
        <span class="sec-content">: {bid.description}</span>
      </div>
      <div class="bid-sec3">
        <Link to={`/singlebid/${bid.bid_id}`}><div class="sec-title">Show more</div></Link>
        <OffersModal data={bid.bid_id}>
        </OffersModal>
      </div>
    </div>
    )

  })}<>
            
            </>
        </div>
    </body>

</>
)
}


export default Profile;
