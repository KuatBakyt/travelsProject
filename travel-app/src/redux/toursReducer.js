const SET_TOURS = "SET_TOURS"
const CHOOSE_CATEGORY = "CHOOSE_CATEGORY"

let initialState = {
    tours_Data: [
        // {
        //     name: "Экскурсия по городу Алматы и урочищу Медео",
        //     city: "Алматы",
        //     kind: "Частный тур",
        //     time: "12 часов",
        //     price: 7000,
        //     discount: -15,
        //     img: "https://morena.kz/foto/allfoto/tshan/tsh37.jpg",
        //     id: 1
        // },
        // {
        //     name: "Озеро Иссык и водопад Медвежий",
        //     city: "Алматы",
        //     kind: "Частный тур",
        //     time: "12 часов",
        //     price: 5000,
        //     discount: -20,
        //     img: "https://www.advantour.com/img/kazakhstan/tours/almaty-medeo-tour.jpg",
        //     id: 2
        // },
        // {
        //     name: "Медеу-Чимбулак-Талгар: знакомимся с горами Алма-Аты в мини-группе",
        //     city: "Алматы",
        //     kind: "Частный тур",
        //     time: "12 часов",
        //     price: 6000,
        //     discount: -10,
        //     img: "https://ticketon.kz/media/upload/42873u54364_photo_341626.jpeg",
        //     id: 3
        // },
        // {
        //     name: "Озеро Иссык с горами Алма-Аты в мини-группе",
        //     city: "Алматы",
        //     kind: "Частный тур",
        //     time: "12 часов",
        //     price: 6000,
        //     discount: -15,
        //     img: "https://www.advantour.com/img/kazakhstan/tours/lake-issyk-tour.jpg",
        //     id: 4
        // },
        // {
        //     name: "Экскурсия по городу Алматы и урочищу Медео",
        //     city: "Алматы",
        //     kind: "Частный тур",
        //     time: "12 часов",
        //     price: 7000,
        //     discount: -15,
        //     img: "https://morena.kz/foto/allfoto/tshan/tsh37.jpg",
        //     id: 5
        // },
        // {
        //     name: "Озеро Иссык и водопад Медвежий",
        //     city: "Алматы",
        //     kind: "Частный тур",
        //     time: "12 часов",
        //     price: 5000,
        //     discount: -20,
        //     img: "https://www.advantour.com/img/kazakhstan/tours/almaty-medeo-tour.jpg",
        //     id: 6
        // },
        // {
        //     name: "Медеу-Чимбулак-Талгар: знакомимся с горами Алма-Аты в мини-группе",
        //     city: "Алматы",
        //     kind: "Частный тур",
        //     time: "12 часов",
        //     price: 6000,
        //     discount: -10,
        //     img: "https://ticketon.kz/media/upload/42873u54364_photo_341626.jpeg",
        //     id: 7
        // },
        // {
        //     name: "Озеро Иссык с горами Алма-Аты в мини-группе",
        //     city: "Алматы",
        //     kind: "Частный тур",
        //     time: "12 часов",
        //     price: 6000,
        //     discount: -15,
        //     img: "https://www.advantour.com/img/kazakhstan/tours/lake-issyk-tour.jpg",
        //     id: 8
        // }
    ],
    currentTourse: [],
}

const toursReducer = (state = initialState, action) => {
    state.currentTourse = state.tours_Data
    switch (action.type) {
        case CHOOSE_CATEGORY: {
            console.log(state.currentTourse);
            if(action.category === "all"){
                return{
                    ...state,
                    currentTourse: state.tours_Data
                }
            }
            state.currentTourse = state.tours_Data.filter(c => c.category === action.category);
            console.log(state.currentTourse);
         }
         return {
            ...state,
            currentTourse: state.currentTourse
         }
        case SET_TOURS: {
            return {
                ...state,
                tours_Data: action.tours_Data
            }
        }
        default:
            return state;
    }
}

export const setToursAcCr = (tours_Data) => {
    return { type: SET_TOURS, tours_Data: tours_Data }
}

export const chooseCategoryAcCr = (category) => {
    return { type: CHOOSE_CATEGORY, category: category }
}

export default toursReducer;