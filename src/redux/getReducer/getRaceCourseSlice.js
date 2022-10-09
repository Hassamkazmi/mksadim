import axios from "axios";
import env from "react-dotenv";
const {createSlice,createAsyncThunk} = require('@reduxjs/toolkit');

const API = `${env.API_URL}`
export const STATUSES = Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})

const getRaceCourseSlice = createSlice({
    name:'racecourse',
    initialState:{
        data:[],
        status:STATUSES.IDLE
    },
     extraReducers:(builder) => {
        builder
        .addCase(fetchracecourse.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchracecourse.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE;
        })
        .addCase(fetchracecourse.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
        })
     },
});

export const {setRacecourse, setStatus} = getRaceCourseSlice.actions;
export default getRaceCourseSlice.reducer;
//https://mksbackend.herokuapp.com/api/v1//getracecourse
export const fetchracecourse = createAsyncThunk('getracecourse/fetch', async () => {
<<<<<<< HEAD
    const res = await axios.get(`${API}/getracecourse?keyword=&page=1`);
=======
    const res = await axios.get(`${API}/getracecourse`);
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
    const data = res.data;
    return data.data;
})