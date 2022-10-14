import axios from 'axios'
const {createSlice} = require('@reduxjs/toolkit');

const PostAds = createSlice({
    name: 'PostAds',
    initialState : [],
    reducers:{ 
        add(state,action){
          const response = axios.post(`${window.env.API_URL}/uploadAds`,action.payload)
          return response;
        },

        remove(state, action){
            const response = axios.delete(`${window.env.API_URL}/deleteAds/${action.payload}`)
           return response;
        
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
        },
       edit(state, action){
        //https://mksbackend.herokuapp.com/api/v1/updateAds/:id
            const response = axios.put(`${window.env.API_URL}/updateAds/${action.payload}`)
           return response;
        
<<<<<<< HEAD
=======
=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
        }
    }
})

export const {add , remove,edit} = PostAds.actions;
export default PostAds.reducer;