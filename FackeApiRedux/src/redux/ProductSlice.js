import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    lodding: false,
    list: []
}

export const fetchProduectList = createAsyncThunk(
    'users/getData',
    async (apiUrl) => {
        const response = await fetch(apiUrl).then(res => res.json())
        
        return  response
    },  
)

export const deleteProduect = createAsyncThunk(
    'users/deleteProduct',
    
    async ({ apiUrl,id }) => {
        alert(`${apiUrl}${id}`)
      let response =  await fetch(`${apiUrl}${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
       
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

    },
)


export const setNewUser = createAsyncThunk(
    'users/setNewUser',
    
    async ({ apiUrl,input }) => {
      
      let response =  await fetch(`${apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:input,
                email:`nkjs${Math.floor(Math.random()*10)}@gmail.com`,
                password:Math.floor(Math.random()*20),

            })
        }).then(res => res.json())
       
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

    },
)


export const upadetUser = createAsyncThunk(
    'users/upadetUser',
    
    async ({ apiUrl,input }) => {
      
      let response =  await fetch(`${apiUrl}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:input,
                email:`nkjs${Math.floor(Math.random()*10)}@gmail.com`,
                password:Math.floor(Math.random()*20),
                
            })
        }).then(res => res.json())
       
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

    },
)


export const productSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduectList.pending, (state) => {
            state.lodding = true
        })
        builder.addCase(fetchProduectList.fulfilled, (state, action) => {
            state.list = action.payload
            state.lodding = false
        })
        builder.addCase(fetchProduectList.rejected, (state) => {
            state.lodding = false
            state.list = []
        })
    }
})

export default productSlice.reducer