import { configureStore } from '@reduxjs/toolkit';
import getAdsSlice from './getReducer/getAdsSlice';
import getHorseSlice from './getReducer/getHorseSlice';
import getNewsSlice from './getReducer/getNewsSlice';
import getSponsorSlice from './getReducer/getSponsorSlice';
import getTrainerSlice from './getReducer/getTrainerSlice';
import getRaceCourseSlice from './getReducer/getRaceCourseSlice';
import getJockeySlice from './getReducer/getJockeySlice';
import getRaceSlice from './getReducer/getRaceSlice'
import PostAds from './postReducer/PostAds';
import PostNewsSlice from './postReducer/PostNewsSlice';
import PostSponsor from './postReducer/PostSponsor';
import PostTrainer from './postReducer/PostTrainer';
import PostRaceCourse from './postReducer/PostRaceCourse';
import PostJockey from './postReducer/PostJockey';
import PostHorse from './postReducer/PostHorse';
import postRace from './postReducer/postRace';
<<<<<<< HEAD
import userReducer from './getReducer/UserSlice'
import { getUserDetails } from './postReducer/UserPost';
import PostOwner from './postReducer/PostOwner';
import getOwnerSlice from './getReducer/getOwnerSlice';
import PostSlider from './postReducer/PostSlider';
import getSliderSlice from './getReducer/getSliderSlice';

=======
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd

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
        race:getRaceSlice,
        postTrainer: PostTrainer,
        racecourse: getRaceCourseSlice,
        postracecourse:PostRaceCourse,
        jockey:getJockeySlice,
        postjockey:PostJockey,
        postHorse:PostHorse,
<<<<<<< HEAD
        postrace:postRace,
        user:userReducer,
        owner:getOwnerSlice,
        postowner: PostOwner,
        slider:getSliderSlice,
        postslider:PostSlider,
        userProfile: getUserDetails,
=======
        postrace:postRace
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd


    },
});

export default store;