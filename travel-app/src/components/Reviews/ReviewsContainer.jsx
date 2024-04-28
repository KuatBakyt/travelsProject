import React, { useState } from 'react'
import { useEffect } from 'react';

import { connect } from 'react-redux';
import Reviews from './Reviews';
import { setCommentAcAcr } from '../../redux/commentsReducer';

const ReviewsContainer = (props) => {

  useEffect(() => {
    fetch("http://localhost:8080/comments")
      .then((response) => {
        if (!response.ok) {
          throw new Error('error HTTP, status' + response.status)
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        props.setComment(data);

      })
      .catch((error) => {
        console.log(error('Error:', error));
      })
  }, []);

  return <Reviews {...props} />
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
  //   setCurrentPage: (pageNumber) => {
  //     dispatch(setCurrentPageAcCr(pageNumber))
  // },
  // setTotalUsersCount: (totalCount) => {
  //     dispatch(setTotalUsersCountAcCr(totalCount))
  // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)