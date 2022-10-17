import React, { useEffect } from "react";
import { add } from "../../../redux/postReducer/postRace";
import Header from "../../../Components/Common/Header";
import Sidebar from "../../../Components/Common/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import { fetchTrainer } from "../../../redux/getReducer/getTrainerSlice";
import { fetchjockey } from "../../../redux/getReducer/getJockeySlice";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchHorse, setHorse } from "../../../redux/getReducer/getHorseSlice";
import { fetchracecourse } from "../../../redux/getReducer/getRaceCourseSlice";
import { Link } from "react-router-dom";
import Select from "react-select";


const RaceTesting = ({ formData, setFormData,page }) => {

  const { data: racecourse } = useSelector((state) => state.racecourse);
  const { data: horse } = useSelector((state) => state.horse);
  const history = useNavigate();


  let horseoptions = horse.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
      jockeyvalue: item.JockeyData.map((item) => item.Name),
    };
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(fetchHorse());
    dispatch(fetchracecourse());
  }, [dispatch]);




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
          
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Race Name"
                      onChange={(e) => setFormData({ ...formData, raceName: e.target.value })}

                      name="Name"
                      value={formData.raceName}
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
                      onChange={(e) => setFormData({ ...formData, Description: e.target.value })}
                      name="Name"
                      value={formData.Description}
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
                      onChange={(e) => setFormData({ ...formData, RaceKind: e.target.value })}
                      value={formData.RaceKind}
                    >
                      <option value="0">Race Kind</option>
                      <option value="Flat">Flat</option>
                      <option value="Turf">Truf</option>
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
                      onChange={(e) => setFormData({ ...formData, Weather: e.target.value })}
                      value={formData.Weather}
                    >
                      <option value="0">Weather</option>
                      <option value="Sunny">Sunny</option>
                      <option value="Cloudy">Cloudy</option>
                    </select>
                  </div>

                  <div className="col-sm">
                    <select style={{ direction: "rtl" }}>
                      <option value="0">Weather</option>
                      <option value="RaceKind">Weather</option>
                      <option value="RaceKind">weather</option>
                      <option value="RaceKind">weather</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <select
                      onChange={(e) => setFormData({ ...formData, RaceCourse: e.target.value })}
                      value={formData.RaceCourse}
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
                 
                      onChange={(e) => setFormData({ ...formData, Horses: e.target.value })}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                      value={formData.Horses}
                      isMulti
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>

                  <div className="col-sm">
                    <Select placeholder={<div>Type to Add Horses</div>}
                
        
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <select
            onChange={(e) => setFormData({ ...formData, RaceStatus: e.target.value })}
                      value={formData.RaceStatus}
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
                      onChange={(e) => setFormData({ ...formData, DayNTime  : e.target.value })}
                      value={  formData.DayNTime}
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


                  <button className="SubmitButton" onClick={() => navigate('/racehorse')}>
                    Add Horse
                  </button>

                </div>
     
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RaceTesting;