const SET_COMMENTS = "SET_COMMENTS";
const ADD_COMMENT = "ADD_COMMENT";
const UPDATE_NEW_COMMENT = "UPDATE_NEW_COMMENT";

let initialState = {
    comments: [],
    newCommentMessage: '',
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
        case ADD_COMMENT: {

            let postnewComment = {
                message: state.newCommentMessage,
                id: state.comments.length + 1,
                user: JSON.parse(localStorage.getItem("user"))
            }
            fetch("http://localhost:8080/comments", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postnewComment)
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('error HTTP, status' + response.status)
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log('Данные отправлены', data);
                })
                .catch((error) => {
                    console.log("Произошла ошибка", error);
                })

            return {
                ...state,
                comments: [...state.comments, postnewComment],
                newCommentMessage: '',
            }
        }
        case UPDATE_NEW_COMMENT: {
            return {
                ...state,
                newCommentMessage: action.newCommentMessageText,
            }
        }
        default:
            return state;
    }
}

export const setCommentAcAcr = (comments) => {
    return { type: SET_COMMENTS, comments: comments }
}

export const addCommentActionCreator = () => {
    return { type: ADD_COMMENT }
}

export const updateNewCommentTextAC = (newCommentMessage) => {
    return {
        type: UPDATE_NEW_COMMENT,
        newCommentMessageText: newCommentMessage
    }
}


export default commentsReducer;