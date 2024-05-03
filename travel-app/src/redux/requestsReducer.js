const ADD_REQUESTS = "ADD_COMMENT";
const UPDATE_REQUESTS = "UPDATE_NEW_COMMENT";

let initialState = {
    requests: [],
    newEmail: '',
    newName: '',
    newPhone: '',
    newExplain: '',
    newPlace: ''
}

let requestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REQUESTS: {
            let postnewRequest = {
                email: state.newEmail,
                name: state.newName,
                phone: state.newPhone,
                place: state.newPlace,
                explain: state.newExplain
            }
            fetch("http://localhost:8080/requests", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postnewRequest)
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
                requests: [...state.requests, postnewRequest],
                newEmail: '',
                newName: '',
                newPhone: '',
                newPlace: '',
                newExplain: ''
                
            }
        }
        case UPDATE_REQUESTS: {
            return {
                ...state,
                newEmail: action.newEmailText,
                newName: action.newNameText,
                newPhone: action.newPhoneText,
                newPlace: action.newPlaceText,
                newExplain: action.newExplainText
            }
        }
        default:
            return state;
    }
}

export const addRequestAcCr = () => {
    return { type: ADD_REQUESTS }
}

export const updateNewRequestTextAcCr = (newEmail, newName, newPhone, newPlace, newExplain) => {
    return {
        type: UPDATE_REQUESTS,
        newEmailText: newEmail,
        newNameText: newName,
        newPhoneText: newPhone,
        newPlaceText: newPlace,
        newExplainText: newExplain
    }
}

export default requestsReducer;