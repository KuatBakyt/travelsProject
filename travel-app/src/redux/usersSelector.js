import { createSelector } from "reselect";


export const getUsersSuper = createSelector(
    (state) => state.usersPage,
    (usersPage) => {
        console.log("222");
        return usersPage
    }
)

export const getNewUsers = (state) => {
    return state.usersPage.newUser
}


