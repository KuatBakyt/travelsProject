const SET_TOURS = "SET_TOURS"
const CHOOSE_CATEGORY = "CHOOSE_CATEGORY"
let ADD_ORDER = "ADD_ORDER"
let DELETE_ORDER = "DELETE_ORDER"
// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    toursData: [],
    currentTourse: [],
    orders: []
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
        // case FOLLOW:
        //     return {
        //         ...state,
        //         toursData: state.toursData.map(u => {
        //             if (u.id === action.id) {
        //                 return { likes: state.toursData.length + 1,}
        //             }
        //             return u
        //         })
        //     }
        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         toursData: state.toursData.map(u => {
        //             if (u.id === action.id) {
        //                 return {...u.likes - 1}
        //             }
        //             return u
        //         })
        //     }
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

// export const followAcCr = (id) => ({ type: FOLLOW, id })
// export const unfollowAcCr = (id) => ({ type: UNFOLLOW, id })

export default toursReducer;