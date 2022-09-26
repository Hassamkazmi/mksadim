import { configureStore } from '@reduxjs/toolkit';
import getAdsSlice from './getReducer/getAdsSlice';
import getHorseSlice from './getReducer/getHorseSlice';
import getNewsSlice from './getReducer/getNewsSlice';
import getSponsorSlice from './getReducer/getSponsorSlice';
import getTrainerSlice from './getReducer/getTrainerSlice';
import getRaceCourseSlice from './getReducer/getRaceCourseSlice';
import PostAds from './postReducer/PostAds';
import PostNewsSlice from './postReducer/PostNewsSlice';
import PostSponsor from './postReducer/PostSponsor';
import PostTrainer from './postReducer/PostTrainer';
import PostRaceCourse from './postReducer/PostRaceCourse';

const store = configureStore({
    reducer: {
        news: getNewsSlice,
        ads: getAdsSlice,
        sponsor: getSponsorSlice,
        PostNews: PostNewsSlice,
        PostSponsor: PostSponsor,
        PostAds: PostAds,
        horse: getHorseSlice,
        trainer: getTrainerSlice,
        postTrainer: PostTrainer,
        racecourse: getRaceCourseSlice,
        postracecourse:PostRaceCourse
    },
});

export default store;
