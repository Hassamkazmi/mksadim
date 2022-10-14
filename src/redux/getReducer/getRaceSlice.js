import axios from "axios";
import env from "react-dotenv";
const {createSlice,createAsyncThunk} = require('@reduxjs/toolkit');

const API = `${env.API_URL}`
export const STATUSES = Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})

const getRaceSlice = createSlice({
    name:'race',
    initialState:{
        data:[],
        status:STATUSES.IDLE
    },
     extraReducers:(builder) => {
        builder
        .addCase(fetchrace.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchrace.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE;
        })
        .addCase(fetchrace.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
        })
     },
});

export const {setRace, setStatus} = getRaceSlice.actions;
export default getRaceSlice.reducer;
<<<<<<< HEAD
export const fetchrace = createAsyncThunk('getrace/fetch', async () => {
    const res = await axios.get(`${API}/getrace?keyword=&limit=&page=`);
    const data = res.data;
    return data.RenderData;
=======
//https://mksbackend.herokuapp.com/api/v1/getrace
export const fetchrace = createAsyncThunk('getrace/fetch', async () => {
<<<<<<< HEAD
    const res = await axios.get(`${API}/getrace?keyword=&page=1`);
    const data = res.data;

    return data.RenderData;
=======
    const res = await axios.get(`${API}/getrace`);
    const data = res.data;
    return data.data;
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
})