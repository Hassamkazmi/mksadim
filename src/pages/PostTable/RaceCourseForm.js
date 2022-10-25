
import React, { Fragment, useState } from "react";
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


  const [image, setImage] = useState()
  const fileSelected = event => {
    const image = event.target.files[0]
    setImage(image)
    console.log(image)
  }
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
  const ArbicDirection = {

    direction: 'rtl',
    marginRight: '0px',
    paddingLeft: '220px',
    width: '105%'

  }
  const EnglishDirection = {


    marginRight: '0px',
    paddingLeft: '220px',
    width: '105%'

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
<label>          Select File        <input type="file" size="60" onChange={fileSelected}

       
      
/>
</label>
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


