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
import "./singlebid.css";
import PricingBidModal from "./PricingBidModal";
import OfferService from "../../apis/OfferService";
import BidService from "../../apis/BidService";

const Singelbid = () => {
    const changeprice =(id,value)=>{
        let sum = 0
    let tempdata = [...biditems].map(e=>{
        if (e.item_id ==id) {
            e.item_price_per_unit = value;
            e.item_price_total = e.item_price_per_unit * e.item_quantity
        }
        sum =sum + e.item_price_total
        settotal(sum)
        return e
    })
    setbiditems(tempdata)

    }
    const [bidinfo,setbidinfo] = useState({});
    const [bidsnum,setbidsnum] = useState (0);
    const [biditems,setbiditems]= useState ([]);
    const [bidfiles,setbidfiles] = useState ([]);
    const[total,settotal]=useState(0)
    const {id} = useParams();
    var bidid = id;
    useEffect(() => {
        BidService.getbiddata(bidid).then(function(res){
          setbidinfo(res.data)
          BidService.getnumofbidsbyuser(res.data.userid_bidid).then(function(res){
            setbidsnum(res.data)
        })
        BidService.getbiditems(bidid).then(function(res){
            // console.log(res.data)
            var itemsdata = (res.data).map(item => {
                    return({
                    item_id :item.item_id,
                    item_description : item.item_description,
                    item_quantity : item.item_quantity,
                    item_unit : item.item_unit,
                    item_price_per_unit : 0,
                    item_price_total : 0
                })
            });
            setbiditems(itemsdata)
        })

        });
        BidService.getbidfiles(bidid).then(function(res){
            setbidfiles(res.data)
        })

      }, []);

      const sendoffer =()=> {
        var allow_offer = true ;
        var allready_submit = false ;
        let bid_user = {
            user_id : JSON.parse(sessionStorage.getItem("user")).user_id,
            bid_id : bidid,
        }
        OfferService.checksubmit(JSON.stringify(bid_user)).then(function(res){
            if((res.data).length>0){
                console.log("allready_submit",allready_submit)
                allready_submit = true
            }
        
        biditems.forEach(item => {
            if (item.item_price_per_unit == 0 || item.item_price_per_unit == ""){
                allow_offer = false ;
            }
        });
        if (JSON.parse(sessionStorage.getItem("user")).user_id == bidinfo.userid_bidid) {
            toast.error("you can't make offer on your own bid");
        }else {
        if (allready_submit){
            toast.error('You submitted an offer previously. You can submit only one offer per bid.');
        }else {
            console.log(allready_submit,"allready_submit")
            if (allow_offer){
                let data_to_send = {
                    user_id : JSON.parse(sessionStorage.getItem("user")).user_id,
                    bid_id : bidid,
                    offerdata : biditems
                }
                OfferService.createoffer(JSON.stringify(data_to_send)).then(function(res){
                    if (res.data =="offer created") {
                        toast.success('Your offer sent successfully');
                    }
                })
            }else {
                toast.error('there is item/items without price');
            }
        }
      }})
    }
  return (
    
    <>
    <Navbar></Navbar>
    <Container className="container">
    <h3 className="mb-2">Publisher Information :</h3>
    <Row>

        <Col>
                 <h6>
                 Publisher Name : {bidinfo.first_name} {bidinfo.last_name}
                 </h6>
                 <h6>
                 Occupation : {bidinfo.occupation}
                 </h6>
                 <h6>
                 Number of bids by User : {bidsnum}
                 </h6>
        </Col>
        <Col className="publisherphotocon">
                 <img className='navbarphoto publisherphoto' src={bidinfo.user_photo ?require("../../../public/profilephotos/"+bidinfo.user_photo):require("../images/profile_pics/avatarphotoplaceholder.png")}></img>
        </Col>
    </Row>
    </Container>
    <Container className="container">
    <h3 className="mb-2">Bid Information :</h3>
    <Row>

        <Col>
                 <h6>
                 subject : {bidinfo.subject}
                 </h6>
                 <h6>
                 location : {bidinfo.location}
                 </h6>
                 <h6>
                 phone number : {bidinfo.phone}
                 </h6>
                 <h6>
                 description : {bidinfo.description}
                 </h6>
                 <h6>
                 details : {bidinfo.details}
                 </h6>
                 <h6>
                 Attached files: {bidfiles.length === 0 ? "No Attached files" : 
                 bidfiles.map(ele => (
                   <p key={ele}>
                   <a href={`/bidsfiles/${ele}`} download={ele}>{ele}</a>
                 </p>
                ))}
                 </h6>

        </Col>
    </Row>
    <PricingBidModal data={biditems} setprice={changeprice}>

    </PricingBidModal>
    <h3 style={{paddingTop:"1rem"}}>
    Your total : {total}
    </h3>
    <Button variant="outline-success" size="lg" onClick={()=>sendoffer()}>Submit offer</Button>
    </Container>
    
    </>
  )};


export default Singelbid;