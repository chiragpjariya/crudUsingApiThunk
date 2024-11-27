import { createSlice, nanoid } from '@reduxjs/toolkit'


const initialState = {
    list: []
}

export const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setData: (state, action) => {
            const data = {
                id: nanoid(),
                userName: action.payload.userName,
                userPassword: action.payload.userPassword
            }
            state.list.push(data)
        }
    }
   
    
})

export const { setData } = userSlice.actions
export default userSlice.reducer

