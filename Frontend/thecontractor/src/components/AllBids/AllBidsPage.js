import Navbar from '../Navbar';
import React , { useState ,useEffect } from 'react';
import BidService from '../../apis/BidService';
import { Link } from 'react-router-dom';


const AllBidsPage = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
      BidService.getallbids().then(function(res){
        setData(res.data)
      });
    }, []);

    const handelseach = (event) =>{
        event.preventDefault(); 
        let search_param = {"filter":"","sort":"","keyword":""} ;
        if (event.target.filter.value) {
            search_param["filter"] = event.target.filter.value
        }
        if (event.target.sort.value) {
            search_param["sort"] = event.target.sort.value
        }
        if (event.target.keyword.value) {
            search_param["keyword"] = event.target.keyword.value
        }

        BidService.searchbids(search_param).then(function(res){
            setData(res.data)
          });
        
    }
    
    return (
    <>
    <Navbar></Navbar>
    <div className="search">
<div className="search-container">
    <h1 style={{color: "white"}}>filter the to suite you more</h1>
    <form action="" onSubmit={handelseach}>
        <label htmlFor=""></label>
        <select name="filter" id="" className="drop-down">
            <option value="">filter</option>
            <option value="painting">Painting</option>
            <option value="tails">Tails</option>
            <option value="doors">Doors</option>
        </select>
        <br/>
        <select name="sort" id="" className="drop-down">
            <option value="">Sort By</option>
            <option value="first_name">Publisher Name</option>
            <option value="created_at">Publish Date</option>
            <option value="subject">Subject</option>
        </select>
        <br/>
        <input className="drop-down" type="text" name="keyword" id="" placeholder="looking for"/>
        <br/>
        <button className="search-btn" type="submit">Go</button>
    </form>
</div>
</div>
{data.map(bid => {
    return(
      <div class="bid">
      <div class="bid-sec1">
        <div class="sec-title">Publisher Name </div>
        <div class="sec-content">: {bid.first_name} {bid.last_name}</div>
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
        <a href=""><div class="sec-title">Make offer</div></a>
      </div>
    </div>
    )

  })}
  {data ==[]?<h2 style={{textAlign:"center",color:"orange",padding:"1rem 0px"}}>No Matches found</h2>:<></>}
    </>
    )
}

export default AllBidsPage;