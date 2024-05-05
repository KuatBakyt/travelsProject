import withAuthRedirect from '../../HOC/withAuthTedirect';
import { addCommentActionCreator, rateAcAcr, updateNewCommentTextAC } from '../../../redux/commentsReducer';
import { connect } from 'react-redux';
import AddComment from './AddComment';
import { getCommentsSuper } from '../../../redux/Selectors/commentsSelector';

const AddCommentsContainer = (props) => {
      return <AddComment {...props}/>
}

let mapStateToProps = (state) => {
    return {
        commentsPage: getCommentsSuper(state)
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
        },
        rate: (value) => {
            dispatch(rateAcAcr(value));
          }
    }
}

let AuthRedirect = withAuthRedirect(AddCommentsContainer)

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirect)