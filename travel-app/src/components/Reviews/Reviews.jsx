import '../../allcss/reviews.css';
import React, { useEffect, useState } from "react";
import PostReview from './PostReview/PostReview';
import Pagination from 'react-bootstrap/Pagination';

let Reviews = (props) => {
  let dataArr = props.commentsPage.comments

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = dataArr.slice(firstIndex, lastIndex)
  const npage = Math.ceil(dataArr.length / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)



  // let commentsElements = props.commentsPage.comments.map(c => <PostReview email={c.email} user={c.user} message={c.message} key={c.id} id={c.id} urlImg={c.urlImg} />)

  return (
    <div className="Reviews">
      <div className="formReview">
        <h2>Отзывы наших клиентов</h2>
      </div>
      <div className="container" >
        <div className="mini-review" >
          {
            records.map(c => <PostReview email={c.email} user={c.user} message={c.message} id={c.id} />)
          }
        </div>

        <ul className='pagination'>
          <li className='page-item'>
            <a href="#" className='page-link' onClick={prePage}>Prev</a>
          </li>
          {
            numbers.map((n, i) => (
              <li className={`page-item${currentPage === n ? 'active' : ''}`} key={i}>
                <a href="#" className='page-link'
                  onClick={() => changeCPage(n)}>{n}</a>
              </li>
            ))
          }
          <li className='page-item'>
            <a href="#" className='page-link' onClick={nextPage}>Next</a>
          </li>
        </ul>
      </div>
    </div>

  );

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }
}

export default Reviews;