import React, { useEffect } from "react";
import { add } from "../../../redux/postReducer/postRace";
import Moment from 'moment';
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
import swal from "sweetalert";
import {AiOutlinePlus} from "react-icons/ai"
import Racecourse from "../../GetTable/RaceCourse";


const RaceKinds = [
  { id: "1", value: "Flat", label: "Flat" },
  { id: "2", value: "Turf", label: "Turf" }

];
const Weathers = [
  { id: "1", value: "Sunny", label: "Sunny" },
  { id: "1", value: "Cloudy", label: "Cloudy" }

];
const RaceStatuss = [
  { id: "1", value: "Cancel", label: "Cancel" },
  { id: "1", value: "Due", label: "Due" }

];
const GroundTypes = [
  { id: "1", value: "Green", label: "Green" },
  { id: "1", value: "Flat", label: "Flat" }

];


const RaceForm = () => {
  const { data: racecourse } = useSelector((state) => state.racecourse);
  const { data: horse } = useSelector((state) => state.horse);
  const history = useNavigate();

  const [data, setData] = useState(true);

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
  const [RaceKind, setRaceKind] = useState("");
  const [raceName, setraceName] = useState("");
  const [Description, setDescription] = useState("");
  const [DayNTime, setDayNTime] = useState("");
  const [Weather, setWeather] = useState("");
  const [RaceStatus, setRaceStatus] = useState("");
  const [RaceCourse, setRaceCourse] = useState("");
  const [Horses, setHorses] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption6, setSelectedOption6] = useState("");


  // const addTodo = id => {
  //   const newTodos = [...todos, { id }];
  //   setTodos(newTodos);

  // };

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
      formData.append("Horses", selectedOption1.id);
      formData.append("Horses", selectedOption2.id);
      formData.append("Horses", selectedOption3.id);
      formData.append("Horses", selectedOption4.id);
      formData.append("Horses", selectedOption5.id);
      formData.append("Horses", selectedOption6.id);
      dispatch(add(formData));
      history("/races");
      swal({
        title: "Success!",
        text: "Data has been added successfully ",
        icon: "success",
        button: "OK",
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
  console.log(racecourses)

  const isSubmitData =
    RaceKind === "" ||
    raceName === "" ||
    Description === "" ||
    DayNTime === "" ||
    Weather === "" ||
    RaceStatus === "" ||
    RaceCourse === "";

  function handleRace() {
    setData(false);
  }

  const formatDate = Moment().format('YYYY-MM-DD')

  console.log(formatDate)
  return (
    <>
 
      {data ? (
        <div className="page">
 
          <div className="rightsidedata">
            <div
              style={{
                marginTop: "30px",
              }}
            >
              <div className="Headers">Add Race</div>
              <div className="form">
                <form>
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
                  />  <span className="spanForm"> |</span>
                    </div>

                    <div className="col-sm">
                    <Select
                    
                    placeholder={<div>نوع السباق</div>}
                    defaultValue={RaceKind}
                    className='selectdir'
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
                    
                    placeholder={<div>Weather</div>}
                    defaultValue={Weather}
                    onChange={setWeather}
                    
                    options={Weathers}
                    isClearable={true}
                    isSearchable={true}
                  />  <span className="spanForm"> |</span>
                    </div>

                    <div className="col-sm">
                    <Select
                    
                    placeholder={<div>طقس</div>}
                  
                    className='selectdir'
                    options={Weathers}
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
                  />  <span className="spanForm"> |</span>
                    </div>

                    <div className="col-sm">
                    <Select
                    
                    placeholder={<div>دورة السباق</div>}
             
                    className='selectdir'
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
                  />  <span className="spanForm"> |</span>
                    </div>

                    <div className="col-sm">
                    <Select
                    
                    placeholder={<div>حالة السباق</div>}
                 
                    className='selectdir'
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
                  />  <span className="spanForm"> |</span>
                    </div>

                    <div className="col-sm">
                    <Select
                    
                    placeholder={<div>نوع الأرض</div>}
                 
            
                    className='selectdir'
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
                        
                        name="Name"
                      
                        required
                      ></input>

<span className="spanForm"> |</span>                    </div>

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
                        
                        name="Name"
                      
                        required
                      ></input>    <span className="spanForm"> |</span>
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
                      ></input>    <span className="spanForm"> |</span>
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
                      onClick={handleRace}
                      disabled={isSubmitData}
                    >
                     Save & Add Horses
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="page">
  
          <div className="rightsidedata">
            <div
              style={{
                marginTop: "30px",
              }}
            >
              <div className="Header ">
                <h4>Add Horse</h4>
              </div>
              <div className="myselecthorse">
                <div className="myselecthorsedata">
                  <span>Gate #</span>
                  <span>Horse Name</span>
                  <span>Jockey Name</span>
                </div>
              </div>
              <div className="myselectdata">
                <div className="myselectiondata">
                  <span>#1</span>
                  <span>
                    <Select
                      defaultValue={selectedOption1}
                      onChange={setSelectedOption1}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </span>
                  <span>
                    {selectedOption1 === "" ? (
                      <p>N/A</p>
                    ) : (
                      <p>{selectedOption1.jockeyvalue[0]}</p>
                    )}
                  </span>
                </div>
                <div className="myselectiondata">
                  <span>#2</span>
                  <span>
                    <Select
                      defaultValue={selectedOption2}
                      onChange={setSelectedOption2}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </span>
                  <span >
                    {selectedOption2 === "" ? (
                      <p>N/A</p>
                    ) : (
                      <p>{selectedOption2.jockeyvalue[0]}</p>
                    )}
                  </span>
                </div>
                <div className="myselectiondata">
                  <span>#3</span>
                  <span>
                    <Select
                      defaultValue={selectedOption3}
                      onChange={setSelectedOption3}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </span>
                  <span>
                    {selectedOption3 === "" ? (
                      <p>N/A</p>
                    ) : (
                      <p>{selectedOption3.jockeyvalue[0]}</p>
                    )}
                  </span>
                </div>
                <div className="myselectiondata">
                  <span>#4</span>
                  <span>
                    <Select
                      defaultValue={selectedOption4}
                      onChange={setSelectedOption4}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </span>
                  <span>
                    {selectedOption4 === "" ? (
                      <p>N/A</p>
                    ) : (
                      <p>{selectedOption4.jockeyvalue[0]}</p>
                    )}
                  </span>
                </div>
                <div className="myselectiondata">
                  <span>#5</span>
                  <span>
                    <Select
                      defaultValue={selectedOption5}
                      onChange={setSelectedOption5}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </span>
                  <span>
                    {selectedOption5 === "" ? (
                      <p>N/A</p>
                    ) : (
                      <p>{selectedOption5.jockeyvalue[0]}</p>
                    )}
                  </span>
                </div>
                <div className="myselectiondata">
                  <span>#6</span>
                  <span>
                    <Select
                      defaultValue={selectedOption6}
                      onChange={setSelectedOption6}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </span>
                  <span>
                    {selectedOption6 === "" ? (
                      <p>N/A</p>
                    ) : (
                      <p>{selectedOption6.jockeyvalue[0]}</p>
                    )}
                  </span>
                 
                </div>
                <div className="addbtn">
                <button className="AddAnother"> <AiOutlinePlus/> Add Another </button>

                </div>
                <div className="sbmtbtndiv">
                 
                <div className="RaceButtonDiv">
                    <button className="updateButton">Update</button>

                    <button
                      className="SubmitButton"
                     type="submit"
                     onClick={submit}
              
                    >
                     Save & Add Horses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RaceForm;
