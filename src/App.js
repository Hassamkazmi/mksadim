import "./App.css";
import '.././src/Components/CSS/mediaquery.css'
import "./Components/CSS/home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./pages/Dashboard";
import Races from "./pages/GetTable/Races";
import Competition from "./pages/GetTable/Competation";
import Statistic from "./pages/GetTable/Statistic";
import Horse from "./pages/GetTable/Horse";
import Jockey from "./pages/GetTable/Jockey";
import News from "./pages/GetTable/News";
import Ads from "./pages/GetTable/Ads";
import Sponsor from "./pages/GetTable/Sponsor";
import FormData from "./pages/PostTable/NewsForm";
import AdsForm from "./pages/PostTable/AdsForm";
import SponsorForm from "./pages/PostTable/SponsorForm";
import PostTrainer from "./pages/PostTable/PostTrainer";
import PostHorse from "./pages/PostTable/HorseForm";
import Trainer from "./pages/GetTable/Trainer";
import Login from "./Components/Login";
import Test from "./pages/GetTable/Test";
import RaceCourse from "./pages/GetTable/RaceCourse";
import RaceCourseForm from "./pages/PostTable/RaceCourseForm";
import JockeyForm from "./pages/PostTable/JockeyForm";
import RaceForm from "./pages/PostTable/RaceForm/RaceForm";
import ProtectedRoute from "./Components/Common/ProtectedRoute";
import SelectHorse from "./pages/PostTable/SelectHorse";
import Owner from "./pages/GetTable/Owner";
import OwnerForm from "./pages/PostTable/OwnerForm";
import SliderForm from "./pages/PostTable/SliderForm";
import Slider from "./pages/GetTable/Slider";
import Header from "./Components/Common/Header";
import Sidebar from "./Components/Common/Sidebar";
import EditJockey from './pages/UpdateTable/EditJockey'
import EditRacecourse from "./pages/UpdateTable/EditRacecourse";
import EditOwner from "./pages/UpdateTable/EditOwner"
import EditSlider from "./pages/UpdateTable/EditSlider"
import EditSponsor from "./pages/UpdateTable/EditSponsor"
import Result from "./pages/PostTable/Result";
import Color from "./pages/PostTable/Color";
import Nationality from "./pages/PostTable/Nationality";
import Currency from "./pages/PostTable/Currency";
import Breeder from "./pages/PostTable/Breeder";




function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          
          <BrowserRouter>
            <Header />
            <div style={{display: "flex"}}>
            <Sidebar />
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/racecourse" element={<RaceCourse />} />
                <Route path="/races" element={<Races />} />
                <Route path="/competition" element={<Competition />} />
                <Route path="/statistics" element={<Statistic />} />
                <Route path="/horse" element={<Horse />} />
                <Route path="/jockey" element={<Jockey />} />
                <Route path="/trainer" element={<Trainer />} />
                <Route path="/news" element={<News />} />
                <Route path="/ads" element={<Ads />} />
                <Route path="/sponsor" element={<Sponsor />} />
                <Route path="/newsform" element={<FormData />} />
                <Route path="/adsform" element={<AdsForm />} />
                <Route path="/sponsorform" element={<SponsorForm />} />
                <Route path="/trainerform" element={<PostTrainer />} />
                <Route path="/horseform" element={<PostHorse />} />
                {/* <Route path="/test" element={<Test />} /> */}
                <Route path="/racecourseform" element={<RaceCourseForm />} />
                <Route path="/jockeyform" element={<JockeyForm />} />
                <Route path="/raceform" element={<RaceForm />} />
                <Route path="/addhorse" element={<SelectHorse />} />
                <Route path="/owner" element={<Owner />} />
                <Route path="/ownerform" element={<OwnerForm />} />
                <Route path="/sliderform" element={<SliderForm />} />
                <Route path="/result" element={<Result/>}/>
                <Route path="/color" element={<Color/>}/>
                <Route path="/nationality" element={<Nationality/>}/>
                <Route path="/currency" element={<Currency/>}/>
                <Route path="/breeder" element={<Breeder/>}/>
              
                <Route path="/slider" element={<Slider />} />
                <Route path="/editjockey/:id" element={<EditJockey />} />
                <Route path="/editracecourse/:id" element={<EditRacecourse/>}/>
                <Route path="/editowner/:id" element={<EditOwner/>}/>
                <Route path="/editslider/:id" element={<EditSlider/>}/>
                <Route path="/editsponsor/:id" element={<EditSponsor/>}/>
                
              </Route>
            </Routes>
            </div>
           
          </BrowserRouter>
        </div>
      </Provider>
    </>
  );
}

export default App;
