export {createSlice} from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name:'Authslice',
  initialState:{
    user:null
  },
  reducers:{
    SetUser(state,action){
      state.user = action.payload
    },
    removeUser(state){
      state.user = null
    }
  }
})

export const {SetUser,removeUser} = AuthSlice.action

export const AuthSlicePath = (store) =>store.AuthSlice.user