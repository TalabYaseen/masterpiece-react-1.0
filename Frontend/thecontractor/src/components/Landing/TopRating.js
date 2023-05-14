import UserService from '../../apis/UserService';
import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';

const TopRating = () => {
    const [topcontractors, settopcontractors] = useState([]);
    const [topproviders, settopproviders] = useState([]);
    useEffect(() => {
      UserService.gettopcontractors().then(function(res){
        if (res.data) {settopcontractors(res.data)}
      });
      UserService.getproviders().then(function(res){
        if (res.data) {settopproviders(res.data)}
      });
    }, []);
    return (
        <>
<div className="top-rating">
  <h2 className="title">
    Top Rating
  </h2>
  <div className="top-rating-container">

  {topcontractors.map(con => {
    return(
      <div className="top-rating-card">
      <div className="top-rating-img">
        <src src={con.user_photo ?require("../../../public/profilephotos/"+con.user_photo):require("../images/profile_pics/avatarphotoplaceholder.png")}></src>
      </div>
      <div className="top-rating-name">{con.first_name} {con.second_name} {con.last_name}</div>
      <div className="top-rating-bio"> Contracting for All house finishes, water and electrical installations.
      </div>
      <div>
        <span>Rating :</span>
        <span>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </span>
      </div>
      <div>
        <a href="">
          <Link to={`/user/${con.user_id}`}><button>View Profile</button></Link>
        </a>
      </div>
    </div>
    )})}


  {topproviders.map(con => {
    return(
      <div className="top-rating-card">
      <div className="top-rating-img">
        <src src={con.user_photo ?require("../../../public/profilephotos/"+con.user_photo):require("../images/profile_pics/avatarphotoplaceholder.png")}></src>
      </div>
      <div className="top-rating-name">{con.first_name} {con.second_name} {con.last_name}</div>
      <div className="top-rating-bio"> Contracting for All house finishes, water and electrical installations.
      </div>
      <div>
        <span>Rating :</span>
        <span>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </span>
      </div>
      <div>
        <a href="">
          <Link to={`/user/${con.user_id}`}><button>View Profile</button></Link>
        </a>
      </div>
    </div>
    )})}

  </div>
  </div>
  </>
      );
      };

export default TopRating;


