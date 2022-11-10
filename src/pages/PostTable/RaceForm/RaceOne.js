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
import { fetchHorse, setHorse } from "../../../redux/getReducer/getHorseSlice";
import { fetchracecourse } from "../../../redux/getReducer/getRaceCourseSlice";
import Select from "react-select";
import swal from "sweetalert";
import { AiOutlinePlus } from "react-icons/ai";


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
      jockeyvalue:
        item.JockeyData === undefined ? (
          <>N/A</>
        ) : (
          item.JockeyData.map((item) => item.Name)
        ),
    };
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption6, setSelectedOption6] = useState("");

  useEffect(() => {
    dispatch(fetchHorse());
    dispatch(fetchracecourse());
  }, [dispatch]);

  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
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
  console.log(racecourses);
  const formatDate = Moment().format("YYYY-MM-DD");

  console.log(formatDate);
  return (
    <>
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
                <span>
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
                <button className="AddAnother">
                  {" "}
                  <AiOutlinePlus /> Add Another{" "}
                </button>
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
    </>
  );
};

export default RaceForm;
