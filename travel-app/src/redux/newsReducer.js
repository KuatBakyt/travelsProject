let SET_NEWS = "SET_NEWS";
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER"


let initialState = {
    news_Data: [],
    isLoad: true
 }
 
 const newsReducer = (state = initialState, action) => {
    switch (action.type) {
     case SET_NEWS: {
        return {
          ...state,
          news_Data: action.news_Data
        }
     }

     case TOGGLE_PRELOADER: {
         return {...state, isLoad: action.status}
      }

        default:
            return state;
    }
   
 }

export const setNewsActionCreator = (news_Data) => {
    return { type: SET_NEWS, news_Data: news_Data }
}

export const togglePreloaderActionCreater = (status) => ({type: TOGGLE_PRELOADER, status: status})

 export default newsReducer;