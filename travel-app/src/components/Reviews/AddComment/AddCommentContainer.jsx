import { useEffect } from 'react';
import withAuthRedirect from '../../HOC/withAuthTedirect';
import { addCommentActionCreator, updateNewCommentTextAC } from '../../../redux/commentsReducer';
import { connect } from 'react-redux';
import AddComment from './AddComment';

const AddCommentsContainer = (props) => {
      return <AddComment {...props}/>
}

let mapStateToProps = (state) => {
    return {
        commentsPage: state.commentsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addComment: () => {
            dispatch(addCommentActionCreator());
        },
        updateNewComments: (newCommentMessage) => {
            dispatch(updateNewCommentTextAC(
                newCommentMessage))
        }
        // deleteComment: (id) => {
        //     dispatch(deleteCommentAcCr(id));
        //   },
    }
}

let AuthRedirect = withAuthRedirect(AddCommentsContainer)

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirect)