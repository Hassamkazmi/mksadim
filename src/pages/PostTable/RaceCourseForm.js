<<<<<<< HEAD
import React, { useState } from "react";
import "../../Components/CSS/forms.css";
import Sidebar from "../../Components/Common/Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostRaceCourse";
import Header from "../../Components/Common/Header";

const RaceCourse = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [TrackName ,setTrackName] = useState('')
  
    const [ TrackLength, setTrackLength] = useState('')
    const [Country , setCountry] =useState('')
 
  
 
    const [image,setImage] = useState()
  
  
    const fileSelected = event => {
      const image = event.target.files[0]
      setImage(image)
    }
    const submit = async event => {
      event.preventDefault()
     try {
        const formData = new FormData();
        formData.append("image", image)
        formData.append("TrackName", TrackName )
        formData.append(" TrackLength",  TrackLength)
        formData.append("Country",Country )
   
        dispatch(add(formData));
        console.log(formData)
         history('/racecourse')
     } catch (error) {
        alert(error.message)
     }
    }
    
    const areAllFieldsFilled = (image !== undefined) && (TrackName !== "") && (TrackLength !== '')
  return (
    <>
    <Header />
    <div className="page">
=======
import React,{ useState} from 'react'
import '../../Components/CSS/RaceCourse.css'
import { useDispatch } from 'react-redux';
import Header from '../../Components/Common/Header';
import Sidebar from '../../Components/Common/Sidebar';
import { add } from '../../redux/postReducer/PostRaceCourse';
import { useNavigate } from "react-router-dom";
import {Country_Name} from '../../Data/Country.js'
import {Country_NameAr} from '../../Data/Country.js'

const RaceCourseForm = () => {
  const history = useNavigate()
  const dispatch = useDispatch()
  const [CountryAr , setCountryAr ] = useState(Country_NameAr)
  const [Country ,setCountry] = useState(Country_Name)
  const [registeration, setregisteration] = useState({
    TrackName: "",
    TrackNameAr: "",
    Country: "",
    CountryAr: "",
    TrackLength: "",
   
  });
  const [records, setrecords] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.Image);
    console.log(name, value);

    setregisteration({ ...registeration, [name]: value });
  };

  const handleSubmit = (e) => {
    if (!registeration) {
    } else {
      e.preventDefault();
      const newRecord = {
        ...registeration,
        id: new Date().getDate().toString(),
      };
      console.log(newRecord);
      setrecords([...records, newRecord]);
      dispatch(add(newRecord));
      history('/racecourse')
      
    }
  };
  const areAllFieldsFilled = (registeration !== '') 
 
  
  
  return (

    <>
   <Header />
   <div className="page">
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
    <Sidebar />
    <div className="rightsidedata">
      <div
        style={{
          marginTop: "30px",
        }}
      >
<<<<<<< HEAD
        <h2>Racecourse Form</h2>
       <div className="container maincontainer">
          <div className="row">
            
            <div className="col-sm-12">
              <form onSubmit={submit}>
                <div className="form-row formMain">
                  <div className="form-group col-md-5 col-lg-5 col-sm-12 ">
                    <input
                      type="Text"
                      className="form-control"
                      placeholder="Track Name"
                      name="TitleEn"
                      value={TrackName}
                      onChange={e => setTrackName(e.target.value)}
                      required
                    />
                  </div>
                
                </div>
                <div className="form-row formMain">
                  <div className="form-group col-md-5 col-lg-5 col-sm-5 ">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="TrackLength"
                      value={TrackLength}
                      name="TrackLength"
                      onChange={e => setTrackLength(e.target.value)}
                      required
                    />
                  </div>
                 
                </div>
                <div className="form-row formMain">
                  <div className="form-group col-md-5 col-lg-5 col-sm-5 ">
                    <textarea
                      type="Text"
                      className="form-control"
                      placeholder="Country"
                      name="Country"
                      onChange={e => setCountry(e.target.value)}
                    />
                  </div>
                
                </div>

                <div className="formBtnDiv container">
                  <label>
                    Enter your File
                    <input
                      onChange={fileSelected}
                      type="file" accept="image/*"
                      className="fileInput"
                      name="myFile"
                    ></input>
                  </label>
                  <button type="submit" disabled={!areAllFieldsFilled} className="btn btn-primary">
                    Submit
                  </button>
                </div>
                <div className="ImageContainer">
                </div>
              </form>
=======
       <div className="container maincontainer">
          <div className="row">
            <div className="col-sm-12">
            <form onSubmit={handleSubmit}>
    <div className="row mainContainer container jockeyContainer">
      <div className="col-sm-12 col-md-6">
        <input
          placeholder="Race Course Name"
          type="text"
          name="TrackName"
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-sm-12 col-md-6">
        <input
          placeholder="اسم دورة السباق"
          type="text"
          style={{ direction: "rtl" }}
          name="TrackNameAr"
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-sm-12 col-md-6">
        <select name="Country" className="county" onChange={handleChange} required>
          <option value="0" className="county">
           
            Select Country
          </option>
{
  Country.map((Country)=>(
          <option selected=""  className="county">
            {Country.country_name}
         
          </option>
          
    )) }   
</select>
      </div>

      <div className="col-sm-12 col-md-6">
        <select
          name="CountryAr"
          id="Country"
          className="county"
          style={{ direction: "rtl" }}
          onChange={handleChange}
          required
        >
          <option value="0">حدد الدولة</option>
          {
       CountryAr.map((item)=>(

       <option selected="" >
        {item.name}   
          </option>))}
       
        </select>
      </div>

      <div className="col-sm-12 col-md-6">
        <input
          type="text"
          placeholder="Track Length"
          name="TrackLength"
          onChange={handleChange}
          required  
        />  
      </div>

  

      
      

      <div className=" btnd">
        <button type="submit" disabled={!areAllFieldsFilled}>Submit </button>
      </div>
    </div>
  </form>
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
<<<<<<< HEAD
    </>
    
  );
};

export default RaceCourse;
=======
   </>
    
  )
}

export default RaceCourseForm
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
