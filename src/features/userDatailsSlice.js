import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


//  create user

export const createUser = createAsyncThunk("createUser", async (data) => {
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
        console.log(error)
    }
})

export const userDatial = createSlice({
    name: "userDatail",
    initialState: {
        user: [],
        loading: false,
        error: null,
    },
        extraReducers:{
            [createUser.pending]: (state)=>{
                state.loading = true;
            },
            [createUser.fulfilled]: (state, action)=>{
                state.loading = false;
                state.users = action.payload
            }
        }
    

})

export default userDatial.reducer;