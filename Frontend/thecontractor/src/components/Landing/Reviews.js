import React from 'react';
import { Carousel,Highlight } from '@trendyol-js/react-carousel';
import  SingleReview  from './SingleReview';

const Reviews = () => {
return(
  <div class="website-review">
  <h2 class="title">
    Don't take our word for it 
  </h2>
  <div class="reviews-container swiper">
    <div class="slide-content">
      <div class="card-wrapper swiper-wrapper"></div>
<Carousel show={1} slide={2} swiping={true}>
  <SingleReview></SingleReview>
  <SingleReview></SingleReview>
  <SingleReview></SingleReview>
  <SingleReview></SingleReview>
  <SingleReview></SingleReview>
  <SingleReview></SingleReview>
  <SingleReview></SingleReview>
</Carousel>

</div>
</div>
<div class="user-review">
    <h2 class="title1">
      What do you think of us ?
    </h2>
    <form action="" method="post">
      <textarea name="" id="" cols="30" rows="10" placeholder=""></textarea>
      <br/>
      <button type="submit">Send</button>
    </form>
  </div>
</div>
)
  };
export default Reviews;
