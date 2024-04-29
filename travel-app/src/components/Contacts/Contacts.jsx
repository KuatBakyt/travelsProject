import React, { useState } from 'react'
import { BiSolidLike } from "react-icons/bi";
import { FaThumbsDown } from "react-icons/fa";

function Contacts() {
  const [likeCount, setLikeCount] = useState(50)
  const [disLikeCount, setDisLikeCount] = useState(25)
  const [activeBtn, setActiveBtn] = useState("none")

  const handleReaction = (reaction) => {
    if (activeBtn === "none") {
      if (reaction === "like") {
        setLikeCount(likeCount + 1)
        setActiveBtn("like")
      } else if (reaction === "dislike") {
        setDisLikeCount(disLikeCount + 1)
        setActiveBtn("dislike")
      }
    }
    else if (activeBtn === reaction) {
      if (reaction === "like") {
        setLikeCount(likeCount - 1);
      } else if (reaction === "dislike") {
        setDisLikeCount(disLikeCount - 1);
      }
      setActiveBtn("none")
    }

    else if (activeBtn !== reaction) {
      if (reaction === "like") {
        setLikeCount(likeCount + 1);
        setDisLikeCount(disLikeCount - 1);
        setActiveBtn("Like")
      } else if (reaction === "dislike") {
        setDisLikeCount(disLikeCount + 1);
        setLikeCount(likeCount - 1);
        setActiveBtn("dislike")
      }
      setActiveBtn("none")
    }
  }
    return (
    <>
     <div className='btn-container'>
          <button className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
            onClick={() => handleReaction('like')}>
            <span><BiSolidLike size={25} /></span>
            Like {likeCount}
          </button>
          <button className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
            onClick={() => handleReaction('dislike')}>
            <span><FaThumbsDown size={25} /></span>
            Like {disLikeCount}
          </button>
        </div>
    </>
    )
  }

export default Contacts