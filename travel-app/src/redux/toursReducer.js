const SET_TOURS = "SET_TOURS"
const CHOOSE_CATEGORY = "CHOOSE_CATEGORY"
let ADD_ORDER = "ADD_ORDER"
let DELETE_ORDER = "DELETE_ORDER"
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER"

let initialState = {
    toursData: [],
    currentTourse: [],
    orders: [],
    arr: [],
    isLoad: true
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
                        }
                        return c;
                        
                    })
                    
                }
            }
        }
        case DELETE_ORDER: {
            return {
                ...state,
                orders: state.orders.filter(e =>
                    e.id !== action.id
                )
            }
        }
        case TOGGLE_PRELOADER: {
            return { ...state, isLoad: action.status }
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

export const togglePreloaderActionCreater = (status) => ({type: TOGGLE_PRELOADER, status: status})

export default toursReducer;