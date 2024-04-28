const SET_COMMENTS = "SET_COMMENTS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

let initialState = {
    comments: [],
    newCommentMessage: ''
}

let commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS: {
            return {
                ...state,
                comments: action.comments
                // totalComments: action.comments.length,
            }
        }
        // case SET_CURRENT_PAGE: {
        //     return {
        //         ...state,
        //         currentPage: action.currentPage
        //         // totalComments: action.comments.length,
        //     }
        // }
        // case SET_TOTAL_COUNT:
        //     return { ...state, totalUsersCount: action.count }

        default:
            return state;
    }
}
export const setCommentAcAcr = (comments) => {
    return { type: SET_COMMENTS, comments: comments }
}

export const setCurrentPageAcCr = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })

export const setTotalUsersCountAcCr = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, count: totalUsersCount })

export default commentsReducer;