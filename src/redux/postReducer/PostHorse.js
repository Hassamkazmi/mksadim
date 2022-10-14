import axios from 'axios'
<<<<<<< HEAD
const {createSlice} = require('@reduxjs/toolkit');

const postHorse = createSlice({
    name: 'postHorse',
    initialState : [],
    reducers:{
        add(state,action){
<<<<<<< HEAD
          const response = axios.post(`${window.env.API_URL}createhorse`,action.payload)
=======
          const response = axios.post(`${window.env.API_URL}/createhorse`,action.payload)
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
          return response;
        },

        remove(state, action){
            const response = axios.delete(`${window.env.API_URL}/deletehorse/${action.payload}`)
           return response;
=======
const { createSlice } = require('@reduxjs/toolkit');

const postHorse = createSlice({
    name: 'postHorse',
    initialState: [],
    reducers: {
        add(state, action) {
            //   const response = axios.post(`${window.env.API_URL}/createhorse`,action.payload)
            console.log(action.payload)
        },

        remove(state, action) {
            const response = axios.delete(`${window.env.API_URL}/deletehorse/${action.payload}`)
            return response;
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
        }
    }
})

<<<<<<< HEAD
export const {add , remove} = postHorse.actions;
=======
export const { add, remove } = postHorse.actions;
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
export default postHorse.reducer;