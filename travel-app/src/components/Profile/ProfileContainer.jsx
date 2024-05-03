import React from 'react'
import withAuthRedirect from '../HOC/withAuthTedirect';
import { connect } from 'react-redux';
import Profile from './Profile';
import { deleteProfile, handleChangeInfo, updateUserInfoText } from '../../redux/usersReducer';

let ProfileContainer = ({ authUser, allCommentsCount, ...props }) => {

    return <Profile {...props} authUser={authUser} allCommentsCount={allCommentsCount} />
}

let mapStateToProps = (state) => {
    let authUser = localStorage.getItem("user")
    return {
        allCommentsCount: state.commentsPage.allCommentsCount,
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
