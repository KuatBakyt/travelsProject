import React from 'react'
import { IoStar } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function PostReview(props) {
  return (
    <>
      <div className="review-block" >
        <div className="review-top">
          <div className="review-profile">
            <div className="review-img">
              <img src={props.user.urlImg == "" ? "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
                :
                (props.user.urlImg)
              } />
            </div>
            <div className="review-username">
              <strong>{props.user.name}</strong>
            </div>
          </div>

          <div className="review-reviews">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>

        </div>

        <div className="review-comment">
          <p>{props.message}</p>
        </div>

      </div>
    </>
  )
}

export default PostReview