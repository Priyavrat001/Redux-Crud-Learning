import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"


//  create user

export const createUser = createAsyncThunk("createUser", async (data, rejectWithValue) => {
    const response = await fetch("https://654cc92a77200d6ba8596cb8.mockapi.io/crud", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    });
    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

// read action
export const showUser = createAsyncThunk("showUser", async(rejectWithValue)=>{
    const response = await fetch('https://654cc92a77200d6ba8596cb8.mockapi.io/crud')
    try {
        const result = response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})
// read action
export const deleteUser = createAsyncThunk("deleteUser", async(id,{rejectWithValue})=>{
    const response = await fetch(`https://654cc92a77200d6ba8596cb8.mockapi.io/crud${id}`, {
        method:"DELETE"
    })
    try {
        const result = response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})
export const userDatial = createSlice({
    name: "userDatail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
        extraReducers:{
            [createUser.pending]: (state)=>{
                state.loading = true;
            },
            [createUser.fulfilled]: (state, action)=>{
                state.loading = false;
                state.users.push(action.payload);
            },
            [createUser.rejected]: (state, action)=>{
                state.loading = false;
                state.users = action.payload.message;
            },
            [showUser.pending]: (state)=>{
                state.loading = true;
            },
            [showUser.fulfilled]: (state, action)=>{
                state.loading = false;
                state.users = action.payload;
            },
            [showUser.rejected]: (state, action)=>{
                state.loading = false;
                state.users = action.payload.message;
            },
            [deleteUser.pending]: (state)=>{
                state.loading = true;
            },
            [deleteUser.fulfilled]: (state, action)=>{
                state.loading = false;
                console.log("delete action", action.payload)
            },
            [deleteUser.rejected]: (state, action)=>{
                state.loading = false;
                state.users = action.payload.message;
            },
        },


    

})

export default userDatial.reducer;