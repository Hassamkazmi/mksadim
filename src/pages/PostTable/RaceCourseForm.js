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
    <Sidebar />
    <div className="rightsidedata">
      <div
        style={{
          marginTop: "30px",
        }}
      >
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
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
    </>
    
  );
};

export default RaceCourse;
