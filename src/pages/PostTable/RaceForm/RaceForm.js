import React, { useEffect } from "react";
import { add } from "../../../redux/postReducer/postRace";
import Moment from "moment";
import "react-toastify/dist/ReactToastify.css";
import { fetchTrainer } from "../../../redux/getReducer/getTrainerSlice";
import { fetchjockey } from "../../../redux/getReducer/getJockeySlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchracecourse } from "../../../redux/getReducer/getRaceCourseSlice";
import Select from "react-select";
import swal from "sweetalert";
import { AiOutlinePlus } from "react-icons/ai";

const RaceKinds = [
  { id: "1", value: "Flat", label: "Flat" },
  { id: "2", value: "Turf", label: "Turf" },
];
const WeatherTypes = [
  { id: "1", value: "Sunny", label: "Sunny" },
  { id: "1", value: "Cloudy", label: "Cloudy" },
];
const RaceStatuss = [
  { id: "1", value: "Cancel", label: "Cancel" },
  { id: "1", value: "Due", label: "Due" },
];
const GroundTypes = [
  { id: "1", value: "Green", label: "Green" },
  { id: "1", value: "Flat", label: "Flat" },
];

const RaceForm = () => {
  const { data: racecourse } = useSelector((state) => state.racecourse);
  const history = useNavigate();
  const [data, setData] = useState(true);

  const dispatch = useDispatch();
  
  const [raceName, setraceName] = useState("");
  const [RaceKind, setRaceKind] = useState("");
  const [TrackLength, setTrackLength] = useState("");
  const [Description, setDescription] = useState("");
  const [DayNTime, setDayNTime] = useState("");
  const [WeatherType, setWeatherType] = useState("");
  const [RaceStatus, setRaceStatus] = useState("");
  const [RaceCourse, setRaceCourse] = useState("");
  

  useEffect(() => {
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
      formData.append("WeatherType", WeatherType);
      formData.append("RaceStatus", RaceStatus);
      formData.append("RaceCourse", RaceCourse);
      history("/publishrace", {
        state: {
          RaceKind: RaceKind,
          raceName: raceName,
          Description: Description,
          DayNTime,
          DayNTime,
          WeatherType: WeatherType,
          RaceStatus: RaceStatus,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };
  let racecourses = racecourse.map(function (item) {
    return {
      id: item._id,
      value: item.TrackName,
      label: item.TrackName,
    };
  });

  const isSubmitData =
    RaceKind === "" ||
    raceName === "" ||
    Description === "" ||
    DayNTime === "" ||
    WeatherType === "" ||
    RaceStatus === "" ||
    RaceCourse === "";

  function handleRace() {
    setData(false);
  }

  const formatDate = Moment().format("YYYY-MM-DD");

  return (
    <>
      <div className="page">
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className="Headers">Add Race</div>
            <div className="form">
              <form onSubmit={submit}>
                <div className="row  mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Race Name"
                      onChange={(e) => setraceName(e.target.value)}
                      name="Name"
                      value={raceName}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم العرق "
                      name="Name"
                    ></input>
                  </div>
                </div>
                <div className="row  mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Description"
                      onChange={(e) => setDescription(e.target.value)}
                      name="Name"
                      value={Description}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="وصف "
                      name="Name"
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>RaceKind</div>}
                      defaultValue={RaceKind}
                      onChange={setRaceKind}
                      options={RaceKinds}
                      isClearable={true}
                      isSearchable={true}
                    />{" "}
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>نوع السباق</div>}
                      defaultValue={RaceKind}
                      className="selectdir"
                      onChange={setRaceKind}
                      options={RaceKinds}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>WeatherType</div>}
                      defaultValue={WeatherType}
                      onChange={setWeatherType}
                      options={WeatherTypes}
                      isClearable={true}
                      isSearchable={true}
                    />{" "}
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>طقس</div>}
                      className="selectdir"
                      options={WeatherTypes}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Racecource</div>}
                      defaultValue={RaceCourse}
                      onChange={setRaceCourse}
                      options={racecourses}
                      isClearable={true}
                      isSearchable={true}
                    />{" "}
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>دورة السباق</div>}
                      className="selectdir"
                      options={racecourses}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                {/* <div className="row ">
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
                </div> */}
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Race Status</div>}
                      defaultValue={RaceStatus}
                      onChange={setRaceStatus}
                      options={RaceStatuss}
                      isClearable={true}
                      isSearchable={true}
                    />{" "}
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>حالة السباق</div>}
                      className="selectdir"
                      options={RaceStatuss}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>

                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Ground Type</div>}
                      options={GroundTypes}
                      isClearable={true}
                      isSearchable={true}
                    />{" "}
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>نوع الأرض</div>}
                      className="selectdir"
                      options={GroundTypes}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>

                {/* <div className="row ">
                    <div className="col-sm">
                      <input
                        placeholder="Sponsor Logo"
                        type="file"
                        
                        
                      
                      ></input>
                    </div>

                    <div className="col-sm">
                      <input
                        placeholder="Sponsor Logo"
                        type="file"
                        style={{ direction: "rtl" }}
                      ></input>
                    </div>
                  </div> */}

                <div className="row  mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="1st Prize"
                      type="number"
                      name="Name"
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="الجائزة الأولى"
                      name="Name"
                    ></input>
                  </div>
                </div>

                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="2nd Prize"
                      type="number"
                      name="Name"
                      required
                    ></input>
                    <span className="spanForm"> |</span>{" "}
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="الجائزة الثانية"
                      name="Name"
                    ></input>
                  </div>
                </div>

                <div className="row  mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="3rd Prize"
                      type="number"
                      name="Name"
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="الجائزة الثالثة "
                      name="Name"
                    ></input>
                  </div>
                </div>

                <div className="row  mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="4th Prize"
                      type="number"
                      name="Name"
                      required
                    ></input>{" "}
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="الجائزة الرابعة"
                      name="Name"
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Day N Time"
                      type="date"
                      min={formatDate}
                      max="2025-08-31"
                      onChange={(e) => setDayNTime(e.target.value)}
                      value={DayNTime}
                    ></input>{" "}
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Day N Time"
                      type="date"
                      style={{ direction: "rtl" }}
                      min={formatDate}
                      max="2025-08-31"
                      onChange={(e) => setDayNTime(e.target.value)}
                      value={DayNTime}
                    ></input>
                  </div>
                </div>
                <div className="RaceButtonDiv">
                  <button className="updateButton">Update</button>
                  <button
                    className="SubmitButton"
                    // disabled={isSubmitData}
                  >
                    Save & Add Horses
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
