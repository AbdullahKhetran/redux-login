import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    isAuth: boolean,
    username: string,
    uid: string,
    isModerator: boolean,
}

type InitialState = {
    value: AuthState
}

const initialState: InitialState = {
    value: {
        isAuth: false,
        username: "",
        uid: "",
        isModerator: false,
    }
}

export const auth = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        logout: () => {
            return initialState
        },

        login: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: "randomly-generated",
                    isModerator: false,
                }
            }
        },
        toggleModerator: (state) => {
            state.value.isModerator = !state.value.isModerator
            // Do not mutate the state outside of createSlice(). Behind the scene redux is using immer to create copy instead of mutating
        }
    }

})

export const { login, logout, toggleModerator } = auth.actions
export default auth.reducer