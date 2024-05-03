const SET_COMMENTS = "SET_COMMENTS";
const ADD_COMMENT = "ADD_COMMENT";
const UPDATE_NEW_COMMENT = "UPDATE_NEW_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const RATE = "RATE";
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER";

let initialState = {
    comments: [],
    allCommentsCount: [],
    arrcount: [],
    rating: 5,
    isLoad: true
}

let authUser = JSON.parse(localStorage.getItem("user"))

let commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS: {
            return {
                ...state,
                comments: action.comments,
                arrcount: action.comments.filter(c => c.user.email == authUser.email),
                allCommentsCount: state.arrcount.length
            }
        }
        case ADD_COMMENT: {

            let postnewComment = {
                message: state.newCommentMessage,
                id: state.comments.length + 1,
                rate: state.rating,
                user: JSON.parse(localStorage.getItem("user")),
                
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
        case DELETE_COMMENT: {
            fetch(`http://localhost:8080/comments/${action.id}`, {
                method: "DELETE",
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('error HTTP, status' + response.status)
                    }
                    console.log("Успешно удален");
                })
                .catch((error) => {
                    console.log("Произошла ошибка", error);
                })
            const filteredComment = state.comments.filter(c => c.id != action.id);
            return {
                ...state,
                comments: filteredComment
            };
        }
        case RATE: {
          return {
            ...state,
            rating:  action.value
          }
        }
        case TOGGLE_PRELOADER: {
            return {...state, isLoad: action.status}
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

export const deleteCommentAcAcr = (id) => {
    return { type: DELETE_COMMENT, id: id }
}

export const rateAcAcr = (value) => {
    return { type: RATE, value: value }
}

export const togglePreloaderActionCreater = (status) => ({type: TOGGLE_PRELOADER, status: status})

export default commentsReducer;