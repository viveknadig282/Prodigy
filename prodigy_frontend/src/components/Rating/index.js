import React from 'react'
import ReactStars from "react-rating-stars-component";
import './rating.css'

const Rate = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <>
        <div class="star">
            <ReactStars
        count={5}
        onChange={ratingChanged}
        size={50}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
    />
  </div>
  <textarea name="rateDesc" cols="50" rows="10" id="rateDesc" class="rateDesc"></textarea>
        </>
    )
}

export default Rate;
