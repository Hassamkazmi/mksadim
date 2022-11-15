import React, { Fragment, useState, useEffect } from "react";
import { fetchTrainer } from "../../redux/getReducer/getTrainerSlice";
import { add } from "../../redux/postReducer/PostHorse";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Select from "react-select";
import { fetchOwner } from "../../redux/getReducer/getOwnerSlice";
import { fetchHorse } from "../../redux/getReducer/getHorseSlice";
import { fetchcolor } from "../../redux/getReducer/getColor";
import { fetchbreeder } from "../../redux/getReducer/getBreeder";
import { fetchnationality } from "../../redux/getReducer/getNationality";
import { fetchgender } from "../../redux/getReducer/getGenderSlice";
import DatePicker from "react-date-picker";
import Moment from "react-moment";
import swal from "sweetalert";
import axios from "axios";
import Rating from "react-rating";

const Gender = [
  { id: "1", value: "Male", label: "Male" },
  { id: "2", value: "Female", label: "Female" },
  { id: "3", value: "Cross Gender", label: "Cross Gender" },
];
const Gelted = [
  { id: "0", value: "false", label: "false" },
  { id: "1", value: "true", label: "true" },
];

const Foals = [
  { id: "0", value: "1", label: "1" },
  { id: "1", value: "2", label: "2" },
  { id: "2", value: "3", label: "3" },
  { id: "3", value: "4", label: "4" },
  { id: "4", value: "5", label: "5" },
  { id: "5", value: "6", label: "6" },
  { id: "6", value: "7", label: "7" },
  { id: "7", value: "8", label: "8" },
  { id: "8", value: "9", label: "9" },
  { id: "9", value: "10", label: "10" },
  
];

const HorseForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
    const [isClearable, setIsClearable] = useState(true);

  const { data: trainer } = useSelector((state) => state.trainer);
  const { data: owner } = useSelector((state) => state.owner);
  const { data: horse } = useSelector((state) => state.horse);
  const {data: color} = useSelector((state) => state.color);
  const {data: breeder} = useSelector((state) => state.breeder);
  const {data: nationality} = useSelector((state) => state.nationality);
  const {data: gender} = useSelector((state) => state.gender);

  useEffect(() => {
    dispatch(fetchOwner());
    dispatch(fetchTrainer());
    dispatch(fetchHorse());
    dispatch(fetchcolor());
    dispatch(fetchbreeder());
    dispatch(fetchnationality());
    dispatch(fetchgender());
  }, [dispatch]);

  let horseoptions = horse === undefined ? <></> : horse.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
    };
  });

  let traineroption =  trainer === undefined ? <></> : trainer.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
    };
  });

  let owneroption =   owner === undefined ? <></> : owner.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
    };
  });

  let AllColor = color === undefined ? <></> : color.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
    };
  });

  let AllBreeder = breeder === undefined ? <></> : breeder.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
    };
  });

  let AllNationality = nationality === undefined ? <></> : nationality.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
    };
  });

  let AllGender = gender === undefined ? <></> : gender.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
    };
  });


  // let jockeyoption =  jockey === undefined ? <></> : jockey.map(function (item) {
  //   return {
  //     id: item._id,
  //     value: item.Name,
  //     label: item.Name,
  //   };
  // });

  console.log(trainer,'trainer')
  const [ActiveOwner, setActiveOwner] = useState("");
  // const [Jockey, setJockey] = useState("");
  const [Age, setAge] = useState("");
  const [NameEn, setNameEn] = useState("");
  const [NameAr, setNameAr] = useState("");
  const [Owner, setOwner] = useState("");
  const [ActiveTrainer, setActiveTrainer] = useState("");
  // const [ActiveJockey, setActiveJockey] = useState("");
  const [Breeder, setBreeder] = useState(""); 
  // const [Trainer, setTrainer] = useState("");
  const [Remarks, setRemarks] = useState("");
  // const [HorseRating, setHorseRating] = useState("");
  const [Sex, setSex] = useState("");
  const [ColorID, setColor] = useState("");
  const [KindOfHorse, setKindOfHorse] = useState("");
  const [Dam, setDam] = useState("");
  const [Sire, setSire] = useState("");
  const [GSire, setGSire] = useState("");
  const [WinningAmount, setWinningAmount] = useState("");
  const [OverAllRating, setOverAllRating] = useState("");
  const [image, setimage] = useState();
  const [Foal, setFoal] = useState("");
  const [Cap, setCap] = useState("");
  const [STARS, setSTARS] = useState(0);
  const [isGelted, setisGelted] = useState(false);
  const [NationalityId, setNationalityId] = useState("");
  const [PurchasePrice, setPurchasePrice] = useState("");
  const [Rds, setRds] = useState("");
  const [preview, setPreview] = useState()
 
  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("NameEn", NameEn);
      formData.append("Age", Age);
      formData.append("NameAr", NameAr);
      formData.append("Remarks", Remarks);
      formData.append("ActiveOwner", ActiveOwner.id);
      // formData.append("ActiveJockey", ActiveJockey.id);
      formData.append("Owner", Owner.id);
      // formData.append("HorseRating", HorseRating);
      // formData.append("Jockey", Jockey.id);
      // formData.append("Trainer", Trainer.id);
      // formData.append("Trainer", ActiveTrainer.id);
      formData.append("ActiveTrainer", ActiveTrainer.id);
      formData.append("Sex", Sex.value);
      formData.append("Breeder", Breeder.id);
      formData.append("ColorID", ColorID.id);
      formData.append("KindOfHorse", KindOfHorse);
      formData.append("Dam", Dam.id);
      formData.append("Sire", Sire.id);
      formData.append("GSire", GSire.id);
      formData.append("WinningAmount", WinningAmount);
      formData.append("OverAllRating", OverAllRating);
      formData.append("Foal", Foal);
      formData.append("Cap", Cap);
      formData.append("Rds", Rds);
      formData.append("STARS", STARS);
      formData.append("isGelted", isGelted.id);
      formData.append("NationalityId", NationalityId.id);
      formData.append("PurchasePrice", PurchasePrice);
      const response = await axios.post(`${window.env.API_URL}createhorse?keyword=&page=`,formData);
      swal({
        title: "success!",
        text: 'Data Submitted !',
        icon: "success",
        button: "OK",
      });
      history("/horse");
       
     
    } 
    catch (error) {
      const err = error.response.data.message
      swal({
        title: "Error!",
        text: err,
        icon: "error",
        button: "OK",
      });
      
    
    }
  };
  useEffect(() => {
    if (!image) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(image)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [image])
console.log(color,'color')
const onSelectFile = e => {

    // I've kept this example simple by using the first image instead of multiple
    setimage(e.target.files[0])
  console.log(image,'image')

  }
  const isSubmitData =
  // ActiveOwner === "" ||
  // Age === "" ||
  // NameEn === "" ||
  // NameAr === "" ||
  // Owner === "" ||
  // ActiveTrainer === "" ||
  // Remarks === "" ||
  // Sex === "" ||
  // Color === "" ||
  // KindOfHorse === "" ||
  // Dam === "" ||
  // Sire === "" ||
  // GSire === "" ||
  // WinningAmount === "" ||
  // OverAllRating === "" ||
  image === null ||
  image === undefined

  const convert = (num) => {

    var date = new Date(num);
    var months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
      "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];
    var days = ["اﻷحد", "اﻷثنين", "الثلاثاء", "اﻷربعاء", "الخميس", "الجمعة", "السبت"];
    var delDateString = days[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ', ' + date.getFullYear();

    console.log(delDateString);

  

    return delDateString;
  };
  return (
    <Fragment>
 
      <div className="page">
       
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className="Headers">Add Horse</div>
            <div className="form">
              <form onSubmit={submit}>
              
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Horse Name"
                      onChange={(e) => setNameEn(e.target.value)}
                      name="Name"
                      value={NameEn}
                      required
                    /><span className="spanForm">|</span>
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
                <div className="row mainrow">
                  <div className="col-sm">
                    <DatePicker
                      onChange={setAge}
                      value={Age}
                      dayPlaceholder="  "
                      monthPlaceholder="Date Of Birth"
                      yearPlaceholder=""
                    />

                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input type="text"
                     placeholder="Date Of Birth" 
                     onChange={setAge}
                     value={convert(Age)}
                     style={{ direction: "rtl" }}
                     />
                  </div>
                </div>
                {/* <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Age"
                      onChange={(e) => setAge(e.target.value)}
                      name="Name"
                      value={Age}
                      required
                      type="number"
                    ></input><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      onChange={(e) => setAge(e.target.value)}
                      name="Name"
                      value={Age}
                      style={{ direction: "rtl" }}
                      type="number"
                      placeholder="سن"
                      required
                    ></input>
                  </div>
                </div> */}
                
                {/* <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Winning Amount"
                      type="number"
                      onChange={(e) => setWinningAmount(e.target.value)}
                      value={WinningAmount}
                    ></input><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="كسب"
                      style={{ direction: "rtl" }}
                      type="number"
                    ></input>
                  </div>
                </div> */}
                 <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Select Foal</div>}
                      defaultValue={Foal}
                      value={Foal}
                      onChange={setFoal}
                      options={Foals}
                      className="basic-single"
                      classNamePrefix="select"
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <Select
                      required
                      placeholder="تقييم الحصان"
                      className='selectdir'
                      defaultValue={Foal}
                      value={Foal}
                      onChange={setFoal}
                      options={Foals}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div> 
                
                {/* <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Over All Rating"
                      type="number"
                      onChange={(e) => setOverAllRating(e.target.value)}
                      value={OverAllRating}
                    ></input><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="تقييم عام"
                      style={{ direction: "rtl" }}
                      type="number"
                    ></input>
                  </div>
                </div> */}
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Remarks"
                      onChange={(e) => setRemarks(e.target.value)}
                      name="Remarks"
                      value={Remarks}
                      required
                    ></input><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="طول المسار"
                    ></input>
                  </div>
                </div>

                
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Select Horse Kind</div>}
                      defaultValue={KindOfHorse}
                      onChange={setKindOfHorse}
                      options={Gelted}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <Select
                      required
                      placeholder={<div>حدد جيلتي</div>}
                      className='selectdir'
                      defaultValue={KindOfHorse}
                      onChange={setKindOfHorse}
                      options={Gelted}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="starstyle">
                    <p>Stars</p>
                  <div>
                  <Rating
                    fractions={2}
                    stop={5}
                    initialRating={STARS}
                    onClick={rate => setSTARS(rate)}
                  />
                  </div>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Purchase Price"
                      onChange={(e) => setPurchasePrice(e.target.value)}
                      name="Name"
                      value={PurchasePrice}
                      text='number'
                      required
                    ></input><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                      onChange={(e) => setPurchasePrice(e.target.value)}
                      name="Name"
                      value={PurchasePrice}
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Select Rds</div>}
                      defaultValue={Rds}
                      onChange={setRds}
                      options={Gelted}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <Select
                      required
                      placeholder={<div>حدد جيلتي</div>}
                      className='selectdir'
                      defaultValue={Rds}
                      onChange={setRds}
                      options={Gelted}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div> 
                
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Select Breeder</div>}
                      defaultValue={Breeder}
                      onChange={setBreeder}
                      options={AllBreeder}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <Select
                      required
                      placeholder={<div>حدد نوع الجنس</div>}
                      className='selectdir'
                      defaultValue={Breeder}
                      onChange={setBreeder}
                      options={AllBreeder}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div> 
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                    
                      placeholder={<div>Select Color</div>}
                      defaultValue={ColorID}
                      onChange={setColor}
                      options={AllColor}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <Select
                      required
                      placeholder={<div>حدد نوع الجنس</div>}
                      className='selectdir'
                      defaultValue={ColorID}
                      onChange={setColor}
                      options={AllColor}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>  
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                    
                      placeholder={<div>Select Gender</div>}
                      defaultValue={Sex}
                      onChange={setSex}
                      options={AllGender}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <Select
                      required
                      placeholder={<div>حدد نوع الجنس</div>}
                      className='selectdir'
                      defaultValue={Sex}
                      onChange={setSex}
                      options={Gender}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>            
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Sire</div>}
                      defaultValue={Sire}
                      onChange={setSire}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>اكتب للبحث عن مواليد</div>}
                      defaultValue={Sire}
                      onChange={setSire}
                      className='selectdir'
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Dam</div>}
                      defaultValue={Dam}
                      onChange={setDam}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>اكتب للبحث عن السد</div>}
                      defaultValue={Dam}
                      onChange={setDam}
                      options={horseoptions}
                      className='selectdir'
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search GSire</div>}
                      defaultValue={GSire}
                      onChange={setGSire}
                      options={horseoptions}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>اكتب للبحث عن مواليد</div>}
                      defaultValue={GSire}
                      onChange={setGSire}
                      options={horseoptions}
                      className='selectdir'
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Owner</div>}
                      defaultValue={Owner}
                      onChange={setOwner}
                      options={owneroption}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select         className='selectdir'
                      placeholder={
                        <div >
                          اكتب للبحث عن المالك
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
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Active Owner</div>}
                      defaultValue={ActiveOwner}
                      onChange={setActiveOwner}
                      options={owneroption}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select         className='selectdir'
                      placeholder={
                        <div style={{ direction: "rtl" }}>
                         اكتب للبحث عن المالك النشط
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
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                    
                      placeholder={<div>Select Gelted</div>}
                      defaultValue={isGelted}
                      onChange={setisGelted}
                      options={Gelted}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>
                  <div className="col-sm">
                    <Select
                      required
                      placeholder={<div>حدد جيلتي</div>}
                      className='selectdir'
                      defaultValue={isGelted}
                      onChange={setisGelted}
                      options={Gelted}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>              
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Nationality</div>}
                      defaultValue={NationalityId}
                      onChange={setNationalityId}
                      options={AllNationality}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select         className='selectdir'
                      placeholder={
                        <div style={{ direction: "rtl" }}>
                          اكتب للبحث عن الجنسية
                        </div>
                      }
                      defaultValue={NationalityId}
                      onChange={setNationalityId}
                      options={AllNationality}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div> 
                {/* <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Enter Cap</div>}
                      defaultValue={Trainer}
                      onChange={setTrainer}
                      options={traineroption}
                      isClearable={true}
                      isSearchable={true}
                      
                    /><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm ">
                    <Select         className='selectdir'
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
                </div> */}
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Active trainer</div>}
                      defaultValue={ActiveTrainer}
                      onChange={setActiveTrainer}
                      options={traineroption}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select         className='selectdir'
                      placeholder={
                        <div style={{ direction: "rtl" }}>
                          اكتب للبحث عن المدرب النشط
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
                {/* <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search trainer</div>}
                      defaultValue={ActiveTrainer}
                      onChange={setActiveTrainer}
                      options={traineroption}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select         className='selectdir'
                      placeholder={
                        <div style={{ direction: "rtl" }}>
                          اكتب للبحث عن المدرب النشط
                        </div>
                      }
                      defaultValue={ActiveTrainer}
                      onChange={setActiveTrainer}
                      options={traineroption}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div> */}
                {/* <div className="row mainrow">
                  <div className="col-sm " >
                    <Select
                      placeholder={<div>Type to search Jockey</div>}
                    
                      defaultValue={Jockey}
                      onChange={setJockey}
                      options={jockeyoption}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select         className='selectdir'
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
                </div> */}
                {/* <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Active Jockey</div>}
                      defaultValue={ActiveJockey}
                      onChange={setActiveJockey}
                      style
                      options={jockeyoption}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select         className='selectdir'
        
                      placeholder={
                        <div>
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
                </div> */}
                

             

                <div className="ButtonSection">
              <div>
                  <input type='file' onChange={onSelectFile} className="formInput"/>
                  {image &&  <img src={preview}  alt="" className="PreviewImage" /> }
                  </div>
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
