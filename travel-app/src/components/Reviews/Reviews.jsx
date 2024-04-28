import '../../allcss/reviews.css';
import React from "react";
import PostReview from './PostReview/PostReview';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

let Reviews = (props) => {
 let navigate = useNavigate()

 function redirectAddComment() {
  navigate(`/addcomment`)
}

  return (
    <div className="Reviews">
      <div className="formReview">
        <h2>Отзывы наших клиентов</h2>
      </div>
      <div className="container" >
        <div className="mini-review" >
          {
            props.records.map(c => <PostReview email={c.email} user={c.user} message={c.message} id={c.id} key={c.id} time={c.time} />)
          }
        </div>

        <div className='review-actions'>
          <ul className='pagination'>
            <li className='page-item'>
              <a href="#" className='page-link' onClick={props.prePage}>Prev</a>
            </li>
            {
              props.numbers.map((n, i) => (
                <li className={`page-item${props.currentPage === n ? 'active' : ''}`} key={i}>
                  <a href="#" className='page-link'
                    onClick={() => props.changeCPage(n)}>{n}</a>
                </li>
              ))
            }
            <li className='page-item'>
              <a href="#" className='page-link' onClick={props.nextPage}>Next</a>
            </li>
          </ul>
          <Button variant="outline-success" className='btn-add-comment' onClick={redirectAddComment}>Оставить отзыв</Button>{' '}
        </div>
      </div>
      
    </div>
  );


}

export default Reviews;