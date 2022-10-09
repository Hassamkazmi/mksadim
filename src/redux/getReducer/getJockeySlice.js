import axios from "axios";
import env from "react-dotenv";
const {createSlice,createAsyncThunk} = require('@reduxjs/toolkit');

const API = `${env.API_URL}`
export const STATUSES = Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})

const getjockeyslice = createSlice({
    name:'jockey',
    initialState:{
        data:[],
        status:STATUSES.IDLE
    },
     extraReducers:(builder) => {
        builder
        .addCase(fetchjockey.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchjockey.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE;
        })
        .addCase(fetchjockey.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
        })
     },
});

export const {setjockey, setStatus} = getjockeyslice.actions;
export default getjockeyslice.reducer;
//https://mksbackend.herokuapp.com/api/v1/Jockeyget
export const fetchjockey = createAsyncThunk('getjockey/fetch', async () => {
<<<<<<< HEAD
    const res = await axios.get(`${API}/Jockeyget?keyword=&page=1`);
=======
    const res = await axios.get(`${API}/Jockeyget`);
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
    const data = res.data;
    return data.data;
})