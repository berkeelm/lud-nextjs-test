import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserModel {
    id: string
    username: string
    email: string
    phone: string
}

export interface authSlice {
    user: UserObject,
    activityIndicator: boolean
}

interface UserObject {
    user: UserModel | undefined,
    isLoading: boolean
}

const initialUserObject: UserObject = {
    isLoading: true,
    user: undefined,
}

const initialState: authSlice = {
    user: initialUserObject,
    activityIndicator: false,
}

export const authSlice1 = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        storeUser: (state, action: PayloadAction<UserObject>) => {
            state.user = action.payload
        },
        storeActivityIndicator: (state, action: PayloadAction<boolean>) => {
            state.activityIndicator = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { storeUser, storeActivityIndicator } = authSlice1.actions

export default authSlice1.reducer;