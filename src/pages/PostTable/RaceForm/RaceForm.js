<<<<<<< HEAD
import React, { useEffect } from "react";
import { add } from "../../../redux/postReducer/postRace";
import Header from "../../../Components/Common/Header";
import Sidebar from "../../../Components/Common/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import { fetchTrainer } from "../../../redux/getReducer/getTrainerSlice";
import { fetchjockey } from "../../../redux/getReducer/getJockeySlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchHorse, setHorse } from "../../../redux/getReducer/getHorseSlice";
import { fetchracecourse } from "../../../redux/getReducer/getRaceCourseSlice";
import { Link } from "react-router-dom";
import Select from "react-select";


const RaceForm = () => {
  
  const { data: racecourse } = useSelector((state) => state.racecourse);
  const { data: horse } = useSelector((state) => state.horse);
  const history = useNavigate();


    let horseoptions = horse.map(function (item) {
    return {
      id:item._id,
      value: item.NameEn,
      label: item.NameEn,
      jockeyvalue: item.JockeyData.map((item) => item.Name),
    };
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [RaceKind, setRaceKind] = useState("");
  const [raceName, setraceName] = useState("");
  const [Description, setDescription] = useState("");
  const [DayNTime, setDayNTime] = useState("");
  const [Weather, setWeather] = useState("");
  const [RaceStatus, setRaceStatus] = useState("");
  const [RaceCourse, setRaceCourse] = useState("");
  const [Horses, setHorses] = useState("");

  useEffect(() => {
    dispatch(fetchHorse());
    dispatch(fetchracecourse());
  }, [dispatch]); 
  

  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("RaceKind", RaceKind);
      formData.append("raceName", raceName);
      formData.append("Description", Description);
      formData.append("DayNTime", DayNTime);
      formData.append("Weather", Weather);
      formData.append("RaceStatus", RaceStatus);
      formData.append("RaceCourse", RaceCourse);
      formData.append("Horses", Horses);
      dispatch(add(formData));
      history("/races");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="page">
        <Sidebar />
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className="Headers">Add Race</div>
            <div className="form">
              <form >
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Race Name"
                      onChange={(e) => setraceName(e.target.value)}
                      name="Name"
                      value={raceName}
                      required
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="Race Name "
                      name="Name"
                    ></input>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Description"
                      onChange={(e) => setDescription(e.target.value)}
                      name="Name"
                      value={Description}
                      required
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="Description "
                      name="Name"
                    ></input>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <select
                      onChange={(e) => setRaceKind(e.target.value)}
                      value={RaceKind}
                    >
                      <option value="0">Race Kind</option>
                      <option value="Flat">Flat</option>
                      <option value="Truf">Truf</option>
                    </select>
                  </div>

                  <div className="col-sm">
                    <select style={{ direction: "rtl" }}>
                      <option value="0">Race Type</option>
                      <option value="Live">Live</option>
                      <option value="Going">Due</option>
                    </select>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <select
                      onChange={(e) => setWeather(e.target.value)}
                      value={Weather}
                    >
                      <option value="0">Wheather</option>
                      <option value="Sunny">Sunny</option>
                      <option value="Cloudy">Cloudy</option>
                    </select>
                  </div>

                  <div className="col-sm">
                    <select style={{ direction: "rtl" }}>
                      <option value="0">Wheather</option>
                      <option value="RaceKind">Weather</option>
                      <option value="RaceKind">weather</option>
                      <option value="RaceKind">wEATHER</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <select
                      onChange={(e) => setRaceCourse(e.target.value)}
                      value={RaceCourse}
                    >
                       <option >Select RaceCourse </option>
                      {racecourse.map((course) => (
                        <option value={course._id}>{course.TrackName}</option>
                      ))}
                      
                    </select>
                  </div>

                  <div className="col-sm">
                    <select style={{ direction: "rtl" }}>
                      <option value="0">RaceCourse</option>
                    </select>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <Select placeholder={<div>Type to Add Horses</div>}
                        defaultValue={Horses}
                        onChange={setHorses}
                        options={horseoptions}
                        isClearable={true}
                        isSearchable={true}
                        isMulti
                        className="basic-multi-select"
                        classNamePrefix="select"
                      />
                  </div>

                  <div className="col-sm">
                  <Select placeholder={<div>Type to Add Horses</div>}
                        defaultValue={Horses}
                        onChange={setHorses}
                        options={horseoptions}
                        isClearable={true}
                        isSearchable={true}
                      />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <select
                      onChange={(e) => setRaceStatus(e.target.value)}
                      value={RaceStatus}
                    >
                      <option value="0">Race status</option>
                      <option value="can">Cancel</option>
                      <option value="going">Going</option>
                    </select>
                  </div>

                  <div className="col-sm">
                    <select style={{ direction: "rtl" }}>
                      <option value="0">Race status</option>
                    </select>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Day N Time"
                      type="date"
                      onChange={(e) => setDayNTime(e.target.value)}
                      value={DayNTime}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Day N Time"
                      type="date"
                      style={{ direction: "rtl" }}
                    ></input>
                  </div>
                </div>

                <div className="RaceButtonDiv">
                  <button className="updateButton">updated</button>

              
                  <button className="SubmitButton" onClick={() => navigate('/addhorse')}>
                    Add Horse
                  </button>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RaceForm;
=======
import React from 'react'
import RaceOne from '../RaceForm/RaceOne'
import RaceTwo from '../RaceForm/RaceTwo'
import RaceThree from '../RaceForm/RaceThree'
import Header from '../../../Components/Common/Header'
import Sidebar from '../../../Components/Common/Sidebar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useState } from "react";


const RaceForm = () => {
  const [page, setPage] = useState(0);

  const [x, setX] = useState(0);

  const [formData, setFormData] = useState({
    RaceKind: "",
    raceName: "",
    Description: "",
    Weather:'',
    RaceStatus: "",
    DayNTime:'',
    RaceCourse:'',
<<<<<<< HEAD
    Horses: ''
=======
    Horses: '',
    RaceStatus:''
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
  
  });
 

  const componentList = [
  <RaceOne
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    x={x}
      setX={setX}
  />,
    <RaceTwo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <RaceThree
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,


  ];
  return (
    <>
    <Header />
    <div className="page">
    <Sidebar />
    <div className="rightsidedata">
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <h2>Race Form</h2>
        <div>
      <div className="progress-bar">    
      <div
            style={{
              width:
                page === 0
                  ? "33%"
                  : page === 1
                  ? "66%"
                  : page === 2
                  ? "100%"
                  : "100%",
            }}
          ></div>
        
      </div>
      <div className="body">{componentList[page]}</div>
      <ToastContainer /> 
  </div>
      </div>
    </div>
    
  </div>
    </>

  )
}

export default RaceForm
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
