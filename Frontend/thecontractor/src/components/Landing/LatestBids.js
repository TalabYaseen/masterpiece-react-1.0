import React , { useState ,useEffect } from 'react';
import BidService from '../../apis/BidService';
import { Link } from 'react-router-dom';
const LatestBids = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    BidService.getlatestbids().then(function(res){
      setData(res.data)
      console.log(data)
    });
  }, []);

    return (
        <>
 {/* <!-- latest bids section start--> */}
<div class="latestbids">
  <h2 class="title">
    Latest Bids
  </h2>
  {/* <!-- single bid view --> */}
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
</div>
{/* <!-- latest bids section ends--> */}
        </>
      );
    };

    export default LatestBids;


