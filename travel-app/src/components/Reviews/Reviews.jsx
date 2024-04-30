import '../../allcss/reviews.css';
import React from "react";
import PostReview from './PostReview/PostReview';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

let Reviews = ({ authUser, ...props }) => {
 let navigate = useNavigate()

 function redirectAddComment() {
  navigate(`/addcomment`)
}

let allComments =  props.records.map(c => <PostReview email={c.email} user={c.user} message={c.message} id={c.id} key={c.id} deleteComment={props.deleteComment} authUser={authUser}/>)

  return (
    <div className="Reviews">
      <div className="formReview">
        <h2>Отзывы наших клиентов</h2>
      </div>
      <div className="container" >
        <div className="mini-review" >
          {
           allComments
          }
        </div>

        <div className='review-actions'>
          <ul className='pagination'>
            <li className='page-item'>
              <Link className='page-link' onClick={props.prePage}>Prev</Link>
            </li>
            {
              props.numbers.map((n, i) => (
                <li className={`page-item${props.currentPage === n ? 'active' : ''}`} key={i}>
                  <Link  className='page-link'
                    onClick={() => props.changeCPage(n)}>{n}</Link>
                </li>
              ))
            }
            <li className='page-item'>
              <Link className='page-link' onClick={props.nextPage}>Next</Link>
            </li>
          </ul>
          <Button variant="info" className='btn-add-comment'>Мои отзывы</Button>{' '}
          <Button variant="outline-success" className='btn-add-comment' onClick={redirectAddComment}>Оставить отзыв</Button>{' '}
        </div>
      </div>
      
    </div>
  );


}

export default Reviews;