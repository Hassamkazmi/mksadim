import React, { useEffect } from "react";
import Moment from "moment";
import "react-toastify/dist/ReactToastify.css";
import { fetchjockey } from "../../../redux/getReducer/getJockeySlice";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchHorse } from "../../../redux/getReducer/getHorseSlice";
import Select from "react-select";
import swal from "sweetalert";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

const RaceForm = () => {
  const { data: jockey } = useSelector((state) => state.jockey);
  const { data: horse } = useSelector((state) => state.horse);


  const history = useNavigate();
  const { state } = useLocation();

  const { RaceId } = state;

  let horseoptions = horse.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
      
    };
  });
  let jockeyoptions = jockey.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
      weight: item.MaximumJockeyWeight
    };
  });


  const dispatch = useDispatch();
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const HorseEntry = [`1,${selectedOption1.id},${selectedOption2.id},${selectedOption2.weight}`];

  useEffect(() => {
    dispatch(fetchHorse());
    dispatch(fetchjockey());
  }, [dispatch]);

  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("HorseEntry", HorseEntry);
      formData.append("HorseEntry", HorseEntry);
      formData.append("HorseEntry", HorseEntry);
      console.log(formData);
      const response = await axios.post(`${window.env.API_URL}addracehorses/${RaceId}`, formData);
      const response1 = await axios.put(`${window.env.API_URL}/publishrace/${RaceId}`);

      history("/races");
      swal({
        title: "Success",
        text: "Data has been added successfully ",
        icon: "success",
        button: "OK",
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
  const [items, setitems] = useState('');

  const addItem = () => {
    const formData = new FormData();
    formData.append("HorseEntry", HorseEntry);
    formData.append("HorseEntry", HorseEntry);
    formData.append("HorseEntry", HorseEntry);
    setitems(items, formData);
    console.log(formData, 'MyData');
  };
  console.log(selectedOption2.weight, '33224');
  return (
    <>
      <div className="page">
        <div className="rightsidedata">
          <h3>Data :{items}</h3>
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
                <span>Jockey Weight</span>
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
                    name="color"
                    
                  />
                </span>
                <span>
                  <Select
                    defaultValue={selectedOption2}
                    onChange={setSelectedOption2}
                    options={jockeyoptions}
                    isClearable={true}
                    isSearchable={true}
                  />
                </span>
                <span>{selectedOption2.weight === undefined ? <></> : <>{selectedOption2.weight} KG</>} </span>
              </div>

              <div className="addbtn">
                <button className="AddAnother" onClick={addItem}>
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
