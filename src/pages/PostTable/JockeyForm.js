import React, { useState } from "react";
import "../../Components/CSS/forms.css";
import Sidebar from "../../Components/Common/Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostJockey";
import Header from "../../Components/Common/Header";

const NewsForm = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [Name,setName] = useState('')
    const [Age,setAge] = useState('')
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
        formData.append("Name", Name)
        formData.append("Age", Age)
        dispatch(add(formData));
        history('/jockey')
     } catch (error) {
        alert(error.message)
     }
    }
    const areAllFieldsFilled = (image !== undefined) && (Age !== "")
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
<<<<<<< HEAD
              <div className='Headers'>


              Add Jockey



            </div>
            <div className='form'>
              <form onSubmit={submit}>
                <div className="row ">
                  <div className="col-sm">
                    <input placeholder=' Name' onChange={e => setName(e.target.value)} name='Name' value={Name}

                      required
                    ></input>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} placeholder="اسم "></input>

                  </div>

                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input placeholder='Age' onChange={e => setAge(e.target.value)} name='Name' value={Age}
                      required
                      type='number'
                    ></input>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} type='number' placeholder="اسم المسار"></input>

                  </div>

                </div>
               
              







                <div className='ButtonSection'>

                  <input type="file" size="60" onChange={fileSelected} />
                  <button type='submit' className='SubmitButton' >Add Jockey</button>

=======
       <div className="container maincontainer">
          <div className="row">
            <div className="col-sm-12">
              <form onSubmit={submit}>
                <div className="form-row formMain">
                  <div className="form-group col-md-5 col-lg-5 col-sm-12 ">
                    <input
                      type="Text"
                      className="form-control"
                      placeholder="Title English"
                      name="Trainer Name"
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Trainer Age"
                      required
                      name="Age"
                      onChange={e => setAge(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row formMain">
                  
                 
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
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
                </div>
              </form>
            </div>
          </div>
<<<<<<< HEAD


        </div>
      </div>

=======
        </div>
      </div>
    </div>
    
  </div>
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
    </>
    
  );
};

export default NewsForm;
