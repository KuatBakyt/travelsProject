const SET_TOURS = "SET_TOURS"
const CHOOSE_CATEGORY = "CHOOSE_CATEGORY"
let ADD_ORDER = "ADD_ORDER"
let DELETE_ORDER = "DELETE_ORDER"
let LIKE = "LIKE"
let DISLIKE = "DISLIKE"
// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    toursData: [],
    currentTourse: [],
    orders: [],
    arr: [],
    delel: [],
    likes: 0,
    dislike: 0
}

const toursReducer = (state = initialState, action) => {
    state.currentTourse = state.toursData
    switch (action.type) {
        case CHOOSE_CATEGORY: {
            if (action.category === "all") {
                return {
                    ...state,
                    currentTourse: state.toursData
                }
            }
            state.currentTourse = state.toursData.filter(c => c.category === action.category);
            console.log(state.currentTourse);

            return {
                ...state,
                currentTourse: state.currentTourse
            }
        }
        case SET_TOURS: {
            return {
                ...state,
                toursData: action.toursData
            }
        }
        case ADD_ORDER: {
            let isArray = false;
            state.orders.forEach(el => {
                if (el.id === action.id) {
                    isArray = true
                }
            })
            if (!isArray) {
                return {
                    ...state,
                    toursData: state.toursData.map(c => {
                        if (c.id === action.id) {
                            state.orders.push(c)
                            console.log(state.orders);
                        }
                        return c;
                    })
                }
            }
        }
        case DELETE_ORDER: {
            console.log(action.id);
            return {
                ...state,
                orders: state.orders.filter(e =>
                    e.id !== action.id
                )
            }
        }
        case LIKE: {
            state.arr.push(action.authUser)
            let addLike = {
                ...action.tour,
                name: action.tour.name,
                city: action.tour.city,
                kind: action.tour.kind,
                time: action.tour.time,
                price: action.tour.price,
                discount: action.tour.discount,
                img: action.tour.img,
                category: action.tour.category,
                description: action.tour.description,
                likespeople: state.arr,
                likes: action.tour.likes + 1

            }
            fetch(`http://localhost:8080/toursData/${action.id}`, {
                method: "PUT",
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(addLike)
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
                });
            return {
                ...state,
                toursData: state.toursData.map(tour => {
                    if (tour.id === action.id) {
                        return {
                            ...tour,
                            name: action.tour.name,
                            city: action.tour.city,
                            kind: action.tour.kind,
                            time: action.tour.time,
                            price: action.tour.price,
                            discount: action.tour.discount,
                            img: action.tour.img,
                            category: action.tour.category,
                            description: action.tour.description,
                            likespeople: state.arr,
                            likes: action.tour.likes + 1
                        }
                    }
                    return tour;
                })
            }
        }
        case DISLIKE: {
            state.arr = action.tour.likespeople.filter(c => c !== action.authUser)
            let deleteLike = {
                ...action.tour,
                name: action.tour.name,
                city: action.tour.city,
                kind: action.tour.kind,
                time: action.tour.time,
                price: action.tour.price,
                discount: action.tour.discount,
                img: action.tour.img,
                category: action.tour.category,
                description: action.tour.description,
                likespeople: state.arr,
                likes: action.tour.likes - 1

            }
            fetch(`http://localhost:8080/toursData/${action.id}`, {
                method: "PUT",
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(deleteLike)
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('error HTTP, status' + response.status)
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log('Данные удалены', data);
                })
                .catch((error) => {
                    console.log("Произошла ошибка", error);
                });
            return {
                ...state,
                toursData: state.toursData.map(tour => {
                    if (tour.id === action.id) {
                        return {
                            ...tour,
                            name: action.tour.name,
                            city: action.tour.city,
                            kind: action.tour.kind,
                            time: action.tour.time,
                            price: action.tour.price,
                            discount: action.tour.discount,
                            img: action.tour.img,
                            category: action.tour.category,
                            description: action.tour.description,
                            likespeople: state.arr,
                            likes: action.tour.likes - 1
                        }
                    }
                    return tour;
                })
            }
        }
        default:
            return state;
    }
}

export const chooseCategoryAcCr = (category) => {
    return { type: CHOOSE_CATEGORY, category: category }
}

export const setToursAcCr = (toursData) => {
    return { type: SET_TOURS, toursData: toursData }
}

export const addToOrdersAcCr = (id) => {
    return { type: ADD_ORDER, id: id }
}

export const deleteOrderAcCr = (id) => {
    return { type: DELETE_ORDER, id: id }
}

export const likeAcCr = (id, authUser, tour) => {
    return { type: LIKE, id: id, authUser: authUser, tour: tour }
}

export const diselikeAcCr = (id, authUser, tour) => {
    return { type: DISLIKE, id: id, authUser: authUser, tour: tour }
}
// export const followAcCr = (id) => ({ type: FOLLOW, id })
// export const unfollowAcCr = (id) => ({ type: UNFOLLOW, id })

export default toursReducer;