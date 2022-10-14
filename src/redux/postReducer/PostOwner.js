import axios from 'axios'
const {createSlice} = require('@reduxjs/toolkit');

const postowner = createSlice({
    name: 'postowner',
    initialState : [],
//https://mksbackend.herokuapp.com/api/v1/CreateOwner
    reducers:{
        add(state,action){
          const response = axios.post(`${window.env.API_URL}/CreateOwner`,action.payload)
          return response;
        },

        // remove(state, action){
        //     const response = axios.delete(`${window.env.API_URL}/deleteJockey/${action.payload}`)
        //    return response; 
        // }
    }
})

export const {add , remove} = postowner.actions;
export default postowner.reducer;