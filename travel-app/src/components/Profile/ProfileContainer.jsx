import React, { useEffect } from 'react'
import withAuthRedirect from '../HOC/withAuthTedirect';
import { connect } from 'react-redux';
import Profile from './Profile';
import { deleteProfile, handleChangeInfo, updateUserInfoText } from '../../redux/usersReducer';

let ProfileContainer = ({ authUser, allComments, ...props }) => {

    return <Profile {...props} authUser={authUser} allComments={allComments} />
}

let mapStateToProps = (state) => {
    let authUser = localStorage.getItem("user")
    return {
        allComments: state.commentsPage.allComments,
        authUser,
        ...state
    }
}

let AuthRedirect = withAuthRedirect(ProfileContainer)

export default connect(mapStateToProps, {
    deleteProfile,
    updateUserInfoText,
    handleChangeInfo
})(AuthRedirect)
