const CREATE_USER = "CREATE_USER";
const DELETE_USER = "DELETE_USER";
const PUT_USER = "CHANGE_INFO";
const UPDATE_USER_INFO = "UPDATE_USER_INFO";

let initialState = {
    users: [],
    newCountry: '',
    newEmail: '',
    newName: '',
    newSurname: '',
    newPhone: '',
    newPassword: '',
    newUrlImg: '',
    userscomments: []
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER: {
            return {
                ...state,
                users: [...state.users, action.newUser]
            }
        }
        case DELETE_USER: {
            fetch(`http://localhost:8080/users/${action.id}`, {
                method: 'DELETE',
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
            const filteredUser = state.users.filter(c => c.id != action.id);
            return {
                ...state,
                users: filteredUser
            };
        }
        case UPDATE_USER_INFO: {
            return {
                ...state,
                newCountry: action.newCountry,
                newEmail: action.newEmailText,
                newName: action.newNameText,
                newSurname: action.newSurnameText,
                newPhone: action.newPhoneText,
                newUrlImg: action.newUrlImgText,
                newPassword: action.newPasswordText
            }
        }
        case PUT_USER: {
            let updateUser = {
                ...action.authUser,
                country: state.newCountry,
                email: state.newEmail,
                name: state.newName,
                surname: state.newSurname,
                phonenumber: state.newPhone,
                urlImg: state.newUrlImg,
                password: state.newPassword
            }
            fetch(`http://localhost:8080/users/${action.id}`, {
                method: "PUT",
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(updateUser)
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('error HTTP, status' + response.status)
                    }
                    return response.json();
                })
                .then((data) => {
                    localStorage.setItem('user', JSON.stringify(data))
                    console.log("Данные успешно обновлены:", data);
                })
                .catch((error) => {
                    console.log("Произошла ошибка", error);
                });
            return {
                ...state,
                users: state.users.map(c => {
                    if (c.id === action.id) {
                        return {
                            ...c,
                            country: state.newCountry,
                            email: state.newEmail,
                            name: state.newName,
                            surname: state.newSurname,
                            phonenumber: state.newPhone,
                            urlImg: state.newUrlImg,
                            password: state.newPassword
                        }
                    }
                    return c;
                })
            }
        }
        default:
            return state;
    }
}

export const createUser = (newUser) => ({ type: CREATE_USER, newUser: newUser })

export const deleteProfile = (id) => ({ type: DELETE_USER, id: id })

export const updateUserInfoText = (newCountry, newEmail, newName, newSurname, newPhone, newUrlImg, newPassword) => ({
    type: UPDATE_USER_INFO,
    newCountry: newCountry,
    newEmailText: newEmail,
    newNameText: newName,
    newSurnameText: newSurname,
    newPhoneText: newPhone,
    newUrlImgText: newUrlImg,
    newPasswordText: newPassword
})

export const handleChangeInfo = (id, authUser) => ({ type: PUT_USER, id: id, authUser: authUser })


export default usersReducer;