import React from 'react'
import { IoTrashBinSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

function PostReview({authUser, ...props}) {

  let deleteComment = () => { props.deleteComment(props.id) }

  return (
    <>
      <div className="review-block" >
         {
          (authUser.email == props.user.email)
            ?
            <div className='delete-comment' onClick={() => deleteComment(props.id)}>
              <IoTrashBinSharp className='delete-icon' />
            </div>
            :
            <span></span>
        }
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
            <IoIosStar size={25} class={props.rate>= 1 ? 'star-fill' : 'star-none'}/>
            <IoIosStar size={25} class={props.rate >= 2 ? 'star-fill' : 'star-none'}/>
            <IoIosStar size={25} class={props.rate >= 3 ? 'star-fill' : 'star-none'}/>
            <IoIosStar size={25} class={props.rate >= 4 ? 'star-fill' : 'star-none'}/>
            <IoIosStar size={25} class={props.rate >= 5 ? 'star-fill' : 'star-none'}/>
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