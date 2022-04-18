const initialState = {
    auth: true,
    userName: "Vladislav",
    email: "redin323@gmail.com",
    name: "Vladislav",
    lastName: "Redin",
    dateOfBurth: "15.09.1999"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export { profileReducer }