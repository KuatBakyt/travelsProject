import React, { useState } from 'react'
import { useEffect } from 'react';

import { connect } from 'react-redux';
import Reviews from './Reviews';
import { setCommentAcAcr } from '../../redux/commentsReducer';

const ReviewsContainer = (props) => {
  let dataArr = props.commentsPage.comments
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = dataArr.slice(firstIndex, lastIndex)
  const npage = Math.ceil(dataArr.length / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)

  let prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  
  let changeCPage = (id) => {
    setCurrentPage(id)
  }
  
  let nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    fetch("http://localhost:8080/comments")
      .then((response) => {
        if (!response.ok) {
          throw new Error('error HTTP, status' + response.status)
        }
        return response.json();
      })
      .then((data) => {
        props.setComment(data);
      })
      .catch((error) => {
        console.log(error('Error:', error));
      })
  }, []);

  return <Reviews {...props} prePage={prePage} changeCPage={changeCPage} nextPage={nextPage} numbers={numbers} records={records} currentPage={currentPage}/>
}

let mapStateToProps = (state) => {
  return {
    commentsPage: state.commentsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setComment: (comments) => {
      dispatch(setCommentAcAcr(comments));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)