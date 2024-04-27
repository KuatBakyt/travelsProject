const CREATE_USER = "CREATE_USER"

let initialState = {
    users: [],
    newCountry: '',
    newEmail: '',
    newName: '',
    newSurname: '',
    newPhone: '',
    newPassword: '',
    newUrlImg: ''
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER: {
            return {
                ...state,
                users: [...state.users, action.newUser]
            }
        }

        default:
            return state;
    }
}

export const createUser = (newUser) => ({ type: CREATE_USER, newUser: newUser })

export default usersReducer;