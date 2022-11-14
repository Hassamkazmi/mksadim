import React, { useEffect } from "react";
import { add } from "../../../redux/postReducer/postRace";
import Moment from "moment";
import "react-toastify/dist/ReactToastify.css";
import { fetchjockey } from "../../../redux/getReducer/getJockeySlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchracecourse } from "../../../redux/getReducer/getRaceCourseSlice";
import { fetchSponsor } from '../../../redux/getReducer/getSponsorSlice'
import Select from "react-select";
import swal from "sweetalert";
import { AiOutlinePlus } from "react-icons/ai";
import DateTimePicker from 'react-datetime-picker';
import axios from "axios";

const RaceKinds = [
  { id: "1", value: "Flat", label: "Flat" },
  { id: "2", value: "Turf", label: "Turf" },
];
const WeatherTypes = [
  { id: "1", value: "Sunny", label: "Sunny" },
  { id: "2", value: "Cloudy", label: "Cloudy" },
];
const RaceStatuss = [
  { id: "1", value: "Cancel", label: "Cancel" },
  { id: "2", value: "Due", label: "Due" },
];
const GroundTypes = [
  { id: "1", value: "Green", label: "Green" },
  { id: "2", value: "Flat", label: "Flat" },
];

const RaceForm = () => {
  const { data: racecourse } = useSelector((state) => state.racecourse);
  const { data: jockey } = useSelector((state) => state.jockey);
  const { data: sponsor } = useSelector((state) => state.sponsor);

  const history = useNavigate();
  const dispatch = useDispatch();
  let racecourses = racecourse === undefined ? <></> : racecourse.map(function (item) {
    return {
      id: item._id,
      value: item.TrackNameEn,
      label: item.TrackNameEn,
    };
  });

  let JockeyForTheRace = jockey === undefined ? <></> : jockey.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
    };
  });

  let SponsorForTheRace = sponsor === undefined ? <></> : sponsor.map(function (item) {
    return {
      id: item._id,
      value: item.TitleEn,
      label: item.TitleEn,
    };
  });

  let SponsorForTheRaceAr = sponsor === undefined ? <></> : sponsor.map(function (item) {
    return {
      id: item._id,
      value: item.TitleAr,
      label: item.TitleAr,
    };
  });

  console.log(SponsorForTheRace,'SponsorForTheRace')
  const [RaceNameEn, setRaceNameEn] = useState("");
  const [RaceNameAr, setRaceNameAr] = useState("");
  const [RaceKind, setRaceKind] = useState("");
  const [DescriptionEn, setDescriptionEn] = useState("");
  const [DescriptionAr, setDescriptionAr] = useState("");
  const [DayNTime, setDayNTime] = useState("");
  const [WeatherType, setWeatherType] = useState("");
  const [RaceStatus, setRaceStatus] = useState("");
  const [RaceCourse, setRaceCourse] = useState("");
  const [WeatherIcon, setWeatherIcon] = useState("");
  const [WeatherDegree, setWeatherDegree] = useState("");
  const [RaceType, setRaceType] = useState("");
  const [TrackLength, setTrackLength] = useState("");
  const [ActiveJockeyForTheRace, setActiveJockeyForTheRace] = useState("");
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();


  useEffect(() => {
    dispatch(fetchracecourse());
    dispatch(fetchjockey());
    dispatch(fetchSponsor());
    if (!image) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [image,dispatch]);

  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("RaceNameEn", RaceNameEn);
      formData.append("RaceNameAr", RaceNameAr);
      formData.append("RaceType", RaceType);
      formData.append("RaceKind", RaceKind.value)
      formData.append("DescriptionEn", DescriptionEn);
      formData.append("DescriptionAr", DescriptionAr);
      formData.append("DayNTime", DayNTime);
      formData.append("WeatherType", WeatherType.value);
      formData.append("RaceStatus", RaceStatus.value);
      formData.append("RaceCourse", RaceCourse.id);
      formData.append("WeatherIcon", WeatherIcon);
      formData.append("WeatherDegree", WeatherDegree);
      formData.append("TrackLength", TrackLength);
      formData.append("ActiveJockeyForTheRace", ActiveJockeyForTheRace.id);
      formData.append("image", image);
      const response = await axios.post(`${window.env.API_URL}/createrace`, formData);
      swal({
        title: "success!",
        text: "Data Submitted !",
        icon: "success",
        button: "OK",
      });
      const RaceId = response.data.data._id
      history("/publishrace", {
        state: {
          RaceId: RaceId
        },
      });
    } catch (error) {
      const err = error.response.data.message;
      swal({
        title: "Error!",
        text: err,
        icon: "error",
        button: "OK",
      });
    }
  };
  

  const isSubmitData =
    RaceKind === "" ||
    RaceNameEn === "" ||
    DescriptionEn === "" ||
    DayNTime === "" ||
    WeatherType === "" ||
    RaceStatus === "" ||
    RaceCourse === "";

  const onSelectFile = (e) => {
    setImage(e.target.files[0]);
    console.log(image, "image");
  };

  console.log(jockey,'jockey')
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
              <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Meeting Type</div>}
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
                      placeholder={<div>Meeting Code</div>}
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
                <div className="row  mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Race Name"
                      onChange={(e) => setRaceNameEn(e.target.value)}
                      name="Name"
                      value={RaceNameEn}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم العرق "
                      onChange={(e) => setRaceNameAr(e.target.value)}
                      value={RaceNameAr}
                      name="Name"
                    ></input>
                  </div>
                </div>
                <div className="row  mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Description"
                      onChange={(e) => setDescriptionEn(e.target.value)}
                      name="Name"
                      value={DescriptionEn}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="وصف "
                      onChange={(e) => setDescriptionAr(e.target.value)}
                      name="Name"
                      value={DescriptionAr}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row  mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Weather Icon"
                      onChange={(e) => setWeatherIcon(e.target.value)}
                      name="Name"
                      value={WeatherIcon}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="وصف "
                      onChange={(e) => setWeatherIcon(e.target.value)}
                      name="Name"
                      value={WeatherIcon}
                      required
                      
                    ></input>
                  </div>
                </div>
                <div className="row  mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Weather Degree"
                      onChange={(e) => setWeatherDegree(e.target.value)}
                      name="Name"
                      value={WeatherDegree}
                      required
                      type='number'
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="وصف "
                      onChange={(e) => setWeatherDegree(e.target.value)}
                      name="Name"
                      value={WeatherDegree}
                      type='number'
                      required
                      
                    ></input>
                  </div>
                </div>
                <div className="row  mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Race Type"
                      onChange={(e) => setRaceType(e.target.value)}
                      name="Name"
                      value={RaceType}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="وصف "
                      onChange={(e) => setRaceType(e.target.value)}
                      name="Name"
                      value={RaceType}
                      required
                      
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Select Track Length</div>}
                      defaultValue={TrackLength}
                      onChange={setTrackLength}
                      options={GroundTypes}
                      isClearable={true}
                      isSearchable={true}
                    />
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select
                      className="selectdir"
                      placeholder={
                        <div style={{ direction: "rtl" }}>
                          اكتب للبحث عن الجنسية
                        </div>
                      }
                      defaultValue={TrackLength}
                      onChange={setTrackLength}
                      options={GroundTypes}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Ground type</div>}
                      defaultValue={WeatherType}
                      onChange={setWeatherType}
                      options={GroundTypes}
                      isClearable={true}
                      isSearchable={true}
                    />{" "}
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>طقس</div>}
                      className="selectdir"
                      options={GroundTypes}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                {/* <div className="row  mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Track Length"
                      onChange={(e) => setTrackLength(e.target.value)}
                      name="Name"
                      value={TrackLength}
                      required
                      type='number'
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="وصف "
                      onChange={(e) => setTrackLength(e.target.value)}
                      name="Name"
                      value={TrackLength}
                      type='number'
                      required
                      
                    ></input>
                  </div>
                </div> */}
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
                      placeholder={<div>Race Course</div>}
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
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Active Jockey For The Race</div>}
                      defaultValue={ActiveJockeyForTheRace}
                      onChange={setActiveJockeyForTheRace}
                      options={JockeyForTheRace}
                      isClearable={true}
                      isSearchable={true}
                    />{" "}
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>دورة السباق</div>}
                      className="selectdir"
                      defaultValue={ActiveJockeyForTheRace}
                      onChange={ActiveJockeyForTheRace}
                      options={JockeyForTheRace}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
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
                      placeholder={<div>Sponsor Image</div>}
                      defaultValue={RaceKind}
                      onChange={setRaceKind}
                      options={SponsorForTheRace}
                      isClearable={true}
                      isSearchable={true}
                    />{" "}
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>نوع السباق</div>}
                      defaultValue={RaceKind}
                      onChange={setRaceKind}
                      options={SponsorForTheRaceAr}
                      className="selectdir"
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Enter Cap"
                      // onChange={(e) => setCap(e.target.value)}
                      name="Name"
                      // value={Cap}
                      required
                    ></input><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                      // onChange={(e) => setCap(e.target.value)}
                      name="Name"
                      // value={Cap}
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <DateTimePicker
                      onChange={setDayNTime}
                      value={DayNTime}
                      monthPlaceholder="Date "
                      dayPlaceholder="&"
                      yearPlaceholder="Time"
                    />
                    <span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                  <DateTimePicker
                      onChange={setDayNTime}
                      value={DayNTime}
                      monthPlaceholder="Date "
                      dayPlaceholder="&"
                      yearPlaceholder="Time"
                      style={{ direction: "rtl" }}
                    />
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Enter 1st Prize"
                      // onChange={(e) => setCap(e.target.value)}
                      name="Name"
                      // value={Cap}
                      required
                    ></input><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                      // onChange={(e) => setCap(e.target.value)}
                      name="Name"
                      // value={Cap}
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Enter 2nd Prize"
                      // onChange={(e) => setCap(e.target.value)}
                      name="Name"
                      // value={Cap}
                      required
                    ></input><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                      // onChange={(e) => setCap(e.target.value)}
                      name="Name"
                      // value={Cap}
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Enter 3rd Prize"
                      // onChange={(e) => setCap(e.target.value)}
                      name="Name"
                      // value={Cap}
                      required
                    ></input><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                      // onChange={(e) => setCap(e.target.value)}
                      name="Name"
                      // value={Cap}
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Enter 4th Prize"
                      // onChange={(e) => setCap(e.target.value)}
                      name="Name"
                      // value={Cap}
                      required
                    ></input><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                      // onChange={(e) => setCap(e.target.value)}
                      name="Name"
                      // value={Cap}
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Enter 5th Prize"
                      // onChange={(e) => setCap(e.target.value)}
                      name="Name"
                      // value={Cap}
                      required
                    ></input><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                      // onChange={(e) => setCap(e.target.value)}
                      name="Name"
                      // value={Cap}
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Enter 6th Prize"
                      // onChange={(e) => setCap(e.target.value)}
                      name="Name"
                      // value={Cap}
                      required
                    ></input><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                      // onChange={(e) => setCap(e.target.value)}
                      name="Name"
                      // value={Cap}
                    ></input>
                  </div>
                </div>
                <div className="ButtonSection">
                  <div>
                    <input
                      type="file"
                      onChange={onSelectFile}
                      className="formInput"
                    />
                    {image && (
                      <img src={preview} alt="" className="PreviewImage" />
                    )}
                  </div>

                  <button type="submit" className="SubmitButton">
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
