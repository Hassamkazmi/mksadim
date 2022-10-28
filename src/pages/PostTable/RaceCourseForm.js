
import React, { Fragment, useState,useEffect } from "react";
import "../../Components/CSS/forms.css";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostRaceCourse";

import { Country_Name } from '../../Data/Country'
import { Country_NameAr } from '../../Data/Country'

import swal from "sweetalert";
import Select from 'react-select'

let CountryEn = Country_Name.map(function (item) {
  return {
    id: item._id,
    value: item.country_name,
    label: item.country_name,
  };
});
let CountryAr = Country_NameAr.map(function (item) {
  return {
    id: item._id,
    value: item.name,
    label: item.name,
  };
});

const RaceCourseForm = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const [TrackName, setTrackName] = useState('')
  const [TrackLength, setTrackLength] = useState('')
  const [Country, setCountry] = useState('')
    const [preview, setPreview] = useState()



  const [image, setImage] = useState()
 
  const submit = async event => {
    event.preventDefault()
    try {
      const formData = new FormData();
      formData.append("image", image)
      formData.append("TrackName", TrackName)
      formData.append("TrackLength", TrackLength)
      formData.append("Country", Country)

      dispatch(add(formData));
      history('/racecourse');
      swal({
        title: "Success!",
        text: "Data has been added successfully ",
        icon: "success",
        button: "OK",
      });
    } catch (error) {
      alert(error.message)
    }
  }
  
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

const onSelectFile = e => {

  
    setImage(e.target.files[0])
  console.log(image,'image')

  }

  return (
    <Fragment>

      <div className="page">
   
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className='Headers'>


            New Race Course 



            </div>
            <div className='form'>
              <form onSubmit={submit}>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input placeholder='Track Name' onChange={e => setTrackName(e.target.value)} value={TrackName}
                      required
                    ></input><span className="spanForm"> |</span>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} placeholder="اسم المسار"></input>

                  </div>

                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input placeholder='Track Length'  onChange={e => setTrackLength(e.target.value)} value={TrackLength}
                      required
                    ></input><span className="spanForm"> |</span>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} placeholder="طول المسار"></input>
                  </div>

                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                  <Select
                      placeholder={<div>Type to search Country</div>}
                    
                      defaultValue={Country}
                      onChange={setCountry}
                      options={CountryEn}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> |</span>

                  </div>

                  <div className="col-sm">
                  <Select
                      placeholder={<div>اكتب للبحث عن الدولة</div>}
                    
               
                    
                      options={CountryAr}
                      isClearable={true}
                      isSearchable={true}
                      className='selectdir'
                    />
                  </div>

                </div>







                <div className='ButtonSection'>
                <div>
            <input type='file' onChange={onSelectFile} className="formInput"/>
            {image &&  <img src={preview} className="PreviewImage" alt="" /> }
        </div>

                  <button type='submit' className='SubmitButton'>Add Race Course</button>

                </div>
               
              </form>
            </div>
          </div>


        </div>
      </div>



    </Fragment>
  )
}

export default RaceCourseForm;


