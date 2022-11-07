import React, { useState,useEffect } from "react";
import "../../Components/CSS/forms.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostJockey";

import swal from "sweetalert";

const NewsForm = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [Name,setName] = useState('')
    const [Age,setAge] = useState('')
    const [image,setImage] = useState()
    const [preview, setPreview] = useState()
    const submit = async event => {
      event.preventDefault()
     try {
        const formData = new FormData();
        formData.append("image", image)
        formData.append("Name", Name)
        formData.append("Age", Age)
        const response = await axios.post(`${window.env.API_URL}/uploadJockey?keyword=&page=`,formData);
        swal({
          title: "success!",
          text: 'Data Submitted !',
          icon: "success",
          button: "OK",
        });
        history('/jockey')
        
     } catch (error) {
      const err = error.response.data.message
      swal({
        title: "Error!",
        text: err,
        icon: "error",
        button: "OK",
      });
      
    }
    }
    const areAllFieldsFilled = (image !== undefined) && (Age !== "")
    useEffect(() => {
<<<<<<< HEAD
=======
    
>>>>>>> 7274ff53a1cae2f2ed6ef6d93131e62d4a82dc58
      if (!image) {
        setPreview(undefined)
        return
    }
<<<<<<< HEAD
  
=======
>>>>>>> 7274ff53a1cae2f2ed6ef6d93131e62d4a82dc58
      const objectUrl = URL.createObjectURL(image)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [image])
  
  const onSelectFile = e => {
  
      // I've kept this example simple by using the first image instead of multiple
      setImage(e.target.files[0])
    console.log(image,'image')
  
    }
  return (
    <>

    <div className="page">

    <div className="rightsidedata">
      <div
        style={{
          marginTop: "30px",
        }}
      >
              <div className='Headers'>


              Add Jockey



            </div>
            <div className='form'>
              <form onSubmit={submit}>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input placeholder=' Name' onChange={e => setName(e.target.value)} name='Name' value={Name}

                      required
                    ></input><span className="spanForm"> |</span>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} placeholder="اسم "></input>

                  </div>

                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input placeholder='Age' onChange={e => setAge(e.target.value)} name='Name' value={Age}
                      required
                      type='number'
                    ></input><span className="spanForm"> |</span>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} type='number' placeholder="اسم المسار"></input>

                  </div>

                </div>
               
              







                <div className='ButtonSection'>
                <div>
            <input type='file' onChange={onSelectFile} className="formInput"/>
            {image &&  <img src={preview}  alt="" className="PreviewImage" /> }
        </div>

                  <button type='submit' className='SubmitButton'>Add Race Course</button>

                </div>
              </form>
            </div>
          </div>


        </div>
      </div>

    </>
    
  );
};

export default NewsForm;
