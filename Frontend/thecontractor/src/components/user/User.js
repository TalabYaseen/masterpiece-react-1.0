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

const User = () => {
    const [userdata,setuserdata] = useState({});
    const {id} = useParams();
    var userid = id;
    useEffect(() => {
        UserService.getuserbyid(userid).then(function(res){
            setuserdata(res.data)
        })
        
      }, []);
    
return(

    <>
        <Navbar></Navbar>
        <body>
        <section id="about-section">
            <div class="about-left">
                <img src={(userdata)["user_photo"] ?require("../../../public/profilephotos/"+userdata)["user_photo"]:require("../images/profile_pics/avatarphotoplaceholder.png")} alt="About Img"/>
            </div>

            <div class="about-right">
                <h1>{userdata["first_name"]} {userdata["second_name"]} {userdata["last_name"]}</h1>
                <div class="address">
                    <ul>
                        <li>
                            <span class="address-logo">
                            <MdWork></MdWork>
                            </span>
                            <p>Occupation</p>
                            <span class="saprater"></span>
                            <p>{userdata["occupation"]}</p>
                        </li>
                        <li>
                            <span class="address-logo">
                            <AiFillPhone></AiFillPhone>
                            </span>
                            <p>Phone No</p>
                            <span class="saprater"></span>
                            <p>{userdata["phone_number"]}</p>
                        </li>
                        <li>
                            <span class="address-logo">
                                <AiOutlineMail></AiOutlineMail>
                            </span>
                            <p>Email</p>
                            <span class="saprater"></span>
                            <p>{userdata["email"]} </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
      
    </body>

</>
)
}


export default User;
