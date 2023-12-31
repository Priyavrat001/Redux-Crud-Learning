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
// delete action
export const deleteUser = createAsyncThunk("deleteUser", async(id,{rejectWithValue})=>{
    const response = await fetch(`https://654cc92a77200d6ba8596cb8.mockapi.io/crud/${id}`, {
        method:"DELETE"
    })
    try {
        const result = response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
});

// updateusers action
export const updateUser = createAsyncThunk("updateUser", async(data,{rejectWithValue})=>{
    console.log("update data", data)
    const response = await fetch(`https://654cc92a77200d6ba8596cb8.mockapi.io/crud/${data.id}`, {
        method:"PUT",
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
export const userDatial = createSlice({
    name: "userDatail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: [],
    },
 
    reducers: {
        searchUser: (state, action) => {
          console.log(action.payload);
          state.searchData = action.payload;
        },
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
                const {id } = action.payload;
                if(id){
                    state.users = state.users.filter((e)=> e.id !== id)
                }
                console.log("delete action", action.payload)
            },
            [deleteUser.rejected]: (state, action)=>{
                state.loading = false;
                state.users = action.payload.message;
            },
            [updateUser.pending]: (state)=>{
                state.loading = true;
            },
            [updateUser.fulfilled]: (state, action)=>{
                state.loading = false;
                state.users = state.users.map((e)=> (
                    e.id === action.payload.id ? action.payload : e
                ))
            },
            [updateUser.rejected]: (state, action)=>{
                state.loading = false;
                state.users = action.payload.message;
            },
        },


    

})

export default userDatial.reducer;

export const {searchUser} = userDatial.actions;