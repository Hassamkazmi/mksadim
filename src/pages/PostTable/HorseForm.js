import React, { Fragment, useState, useEffect } from "react";
import Header from "../../Components/Common/Header";
import Sidebar from "../../Components/Common/Sidebar";
import { fetchTrainer } from "../../redux/getReducer/getTrainerSlice";
import { add } from "../../redux/postReducer/PostHorse";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchjockey } from "../../redux/getReducer/getJockeySlice";
import Select from "react-select";
import { fetchOwner } from "../../redux/getReducer/getOwnerSlice";
import { fetchHorse } from "../../redux/getReducer/getHorseSlice";
import swal from "sweetalert";

const Gender = [
  { id: "1", value: "Male", label: "Male" },
  { id: "1", value: "Female", label: "Female" },
  { id: "1", value: "Cross Gender", label: "Cross Gender" },
];

const HorseForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data: trainer } = useSelector((state) => state.trainer);
  const { data: jockey } = useSelector((state) => state.jockey);
  const { data: owner } = useSelector((state) => state.owner);
  const { data: horse } = useSelector((state) => state.horse);

  useEffect(() => {
    dispatch(fetchOwner());
    dispatch(fetchTrainer());
    dispatch(fetchjockey());
    dispatch(fetchHorse());
  }, [dispatch]);

  let horseoptions = horse.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
    };
  });

  let traineroption = trainer.map(function (item) {
    return {
      id: item._id,
      value: item.Name,
      label: item.Name,
    };
  });

  let owneroption = owner.map(function (item) {
    return {
      id: item._id,
      value: item.Name,
      label: item.Name,
    };
  });

  let jockeyoption = jockey.map(function (item) {
    return {
      id: item._id,
      value: item.Name,
      label: item.Name,
    };
  });

  const [ActiveOwner, setActiveOwner] = useState("");
  const [Jockey, setJockey] = useState("");
  const [Age, setAge] = useState("");
  const [NameEn, setNameEn] = useState("");
  const [NameAr, setNameAr] = useState("");
  const [Owner, setOwner] = useState("");
  const [ActiveTrainer, setActiveTrainer] = useState("");
  const [ActiveJockey, setActiveJockey] = useState("");
  const [Breeder, setBreeder] = useState("");
  const [Trainer, setTrainer] = useState("");
  const [Remarks, setRemarks] = useState("");
  const [HorseRating, setHorseRating] = useState("");
  const [Sex, setSex] = useState("");
  const [Color, setColor] = useState("");
  const [KindOfHorse, setKindOfHorse] = useState("");
  const [Dam, setDam] = useState("");
  const [Sire, setSire] = useState("");
  const [GSire, setGSire] = useState("");
  const [Earning, setEarning] = useState("");
  const [OverAllRating, setOverAllRating] = useState("");
  const [HorseImage, setHorseImage] = useState();
  const fileSelected = (event) => {
    const image = event.target.files[0];
    setHorseImage(image);
  };
  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("HorseImage", HorseImage);
      formData.append("NameEn", NameEn);
      formData.append("Age", Age);
      formData.append("NameAr", "هريلو");
      formData.append("Remarks", Remarks);
      formData.append("ActiveOwner", ActiveOwner.id);
      formData.append("ActiveJockey", ActiveJockey.id);
      formData.append("Owner", Owner.id);
      formData.append("HorseRating", HorseRating);
      formData.append("Jockey", Jockey.id);
      formData.append("Trainer", Trainer.id);
      formData.append("ActiveTrainer", ActiveTrainer.id);
      formData.append("Sex", Sex.value);
      formData.append("Breeder", Breeder);
      formData.append("Color", Color);
      formData.append("KindOfHorse", KindOfHorse);
      formData.append("Dam", Dam.id);
      formData.append("Sire", Sire.id);
      formData.append("GSire", GSire.id);
      formData.append("Earning", Earning);
      formData.append("OverAllRating", OverAllRating);
      dispatch(add(formData));
      history("/horse");
      // swal({
      //   title: "Success!",
      //   text: "Data has been added successfully ",
      //   icon: "success",
      //   button: "OK",
      // });
     
    } catch (error) {
      alert(error.message);
    }
  };
  const isSubmitData =
  ActiveOwner === "" ||
  Jockey === "" ||
  Age === "" ||
  NameEn === "" ||
  NameAr === "" ||
  Owner === "" ||
  ActiveTrainer === "" ||
  ActiveJockey === "" ||
  Trainer === "" ||
  Remarks === "" ||
  HorseRating === "" ||
  Sex === "" ||
  Color === "" ||
  KindOfHorse === "" ||
  Dam === "" ||
  Sire === "" ||
  GSire === "" ||
  Earning === "" ||
  OverAllRating === "" ||
  HorseImage === null ||
  HorseImage === undefined
  return (
    <Fragment>
      <Header />
      <div className="page">
        <Sidebar />
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className="Headers">Add Horse</div>
            <div className="form">
              <form onSubmit={submit}>
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Horse Name"
                      onChange={(e) => setNameEn(e.target.value)}
                      name="Name"
                      value={NameEn}
                      required
                    ></input>
                  </div>
                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                      onChange={(e) => setNameAr(e.target.value)}
                      name="Name"
                      value={NameAr}
                    ></input>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Age"
                      onChange={(e) => setAge(e.target.value)}
                      name="Name"
                      value={Age}
                      required
                      type="number"
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      onChange={(e) => setAge(e.target.value)}
                      name="Name"
                      value={Age}
                      style={{ direction: "rtl" }}
                      type="number"
                      placeholder="Age"
                      required
                    ></input>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Select Gender</div>}
                      defaultValue={Sex}
                      onChange={setSex}
                      options={Gender}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                  <div className="col-sm">
                    <Select
                      required
                      placeholder={<div>Select Gender</div>}
                      style={{ direction: "rtl" }}
                      defaultValue={Sex}
                      onChange={setSex}
                      options={Gender}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Color"
                      onChange={(e) => setColor(e.target.value)}
                      value={Color}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Color"
                      style={{ direction: "rtl" }}
                    ></input>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Sire</div>}
                      defaultValue={Sire}
                      onChange={setSire}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Sire</div>}
                      defaultValue={Sire}
                      onChange={setSire}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Dam</div>}
                      defaultValue={Dam}
                      onChange={setDam}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Dam</div>}
                      defaultValue={Dam}
                      onChange={setDam}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search GSire</div>}
                      defaultValue={GSire}
                      onChange={setGSire}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search GSire</div>}
                      defaultValue={GSire}
                      onChange={setGSire}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder=" Horse Kind"
                      onChange={(e) => setKindOfHorse(e.target.value)}
                      value={KindOfHorse}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Horse Kind"
                      style={{ direction: "rtl" }}
                    ></input>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Owner</div>}
                      defaultValue={Owner}
                      onChange={setOwner}
                      options={owneroption}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={
                        <div style={{ direction: "rtl" }}>
                          Type to search Owner
                        </div>
                      }
                      defaultValue={Owner}
                      onChange={setOwner}
                      options={owneroption}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Active Owner</div>}
                      defaultValue={ActiveOwner}
                      onChange={setActiveOwner}
                      options={owneroption}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={
                        <div style={{ direction: "rtl" }}>
                          Type to search Active Owner
                        </div>
                      }
                      defaultValue={ActiveOwner}
                      onChange={setActiveOwner}
                      options={owneroption}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Breeder"
                      onChange={(e) => setBreeder(e.target.value)}
                      value={Breeder}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Breeder"
                      style={{ direction: "rtl" }}
                    ></input>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search trainer</div>}
                      defaultValue={Trainer}
                      onChange={setTrainer}
                      options={traineroption}
                      isClearable={true}
                      isSearchable={true}
                      
                    />
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={
                        <div style={{ direction: "rtl" }}>
                          Type to search trainer
                        </div>
                      }
                      defaultValue={Trainer}
                      onChange={setTrainer}
                      options={traineroption}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Active trainer</div>}
                      defaultValue={ActiveTrainer}
                      onChange={setActiveTrainer}
                      options={traineroption}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={
                        <div style={{ direction: "rtl" }}>
                          Type to search Active trainer
                        </div>
                      }
                      defaultValue={ActiveTrainer}
                      onChange={setActiveTrainer}
                      options={traineroption}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Jockey</div>}
                      defaultValue={Jockey}
                      onChange={setJockey}
                      options={jockeyoption}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={
                        <div style={{ direction: "rtl" }}>
                          Type to search Jockey
                        </div>
                      }
                      defaultValue={Jockey}
                      onChange={setJockey}
                      options={jockeyoption}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Active Jockey</div>}
                      defaultValue={ActiveJockey}
                      onChange={setActiveJockey}
                      options={jockeyoption}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={
                        <div style={{ direction: "rtl" }}>
                          Type to search Active Jockey
                        </div>
                      }
                      defaultValue={ActiveJockey}
                      onChange={setActiveJockey}
                      options={jockeyoption}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Earning"
                      type="number"
                      onChange={(e) => setEarning(e.target.value)}
                      value={Earning}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder=" Earning"
                      style={{ direction: "rtl" }}
                      type="number"
                    ></input>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Horse Rating"
                      type="number"
                      onChange={(e) => setHorseRating(e.target.value)}
                      value={HorseRating}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Horse Rating "
                      style={{ direction: "rtl" }}
                      type="number"
                    ></input>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Over All Rating"
                      type="number"
                      onChange={(e) => setOverAllRating(e.target.value)}
                      value={OverAllRating}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Over All Rating"
                      style={{ direction: "rtl" }}
                      type="number"
                    ></input>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Remarks"
                      onChange={(e) => setRemarks(e.target.value)}
                      name="Remarks"
                      value={Remarks}
                      required
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="طول المسار"
                    ></input>
                  </div>
                </div>

                <div className="ButtonSection">
                  <input type="file" size="60" onChange={fileSelected} />
                  <button type="submit" disabled={isSubmitData} className="SubmitButton">
                    Add Horse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HorseForm;
