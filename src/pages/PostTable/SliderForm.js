import React, { useState,useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../redux/postReducer/PostSlider";
import swal from "sweetalert";

const SliderForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [TitleEn, setTitleEn] = useState("");
  const [TitleAr, setTitleAr] = useState("");
  const [image, setImage] = useState();
const [preview,setPreview] = useState()

  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("TitleEn", TitleEn);
      formData.append("TitleAr", TitleAr);
      dispatch(add(formData));
      history("/slider");
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
  const isSubmitData =
    TitleAr === "" || TitleEn === "" ;
  return (
    <>
     
      <div className="page">
  
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className="Headers">Add Slider</div>
            <div className="form">
              <form onSubmit={submit}>
                <div className="row  mainrow">
                  <div className="col-sm">
                    <input
                      placeholder=" Name"
                      onChange={(e) => setTitleEn(e.target.value)}
                      name="Name"
                      value={TitleEn}
                      required
                    ></input><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      onChange={(e) => setTitleAr(e.target.value)}
                      name="Name"
                      value={TitleAr}
                      placeholder="اسم "
                    ></input>
                  </div>
                </div>

       
        
         <div className='ButtonSection'>
                <div>
            <input type='file' onChange={onSelectFile} className="formInput"/>
            {image &&  <img src={preview} className="PreviewImage" alt="" /> }
        </div>

                  <button type='submit' onClick={submit} className='SubmitButton'>Add Slider</button>

                </div>
        </form>
                </div>
                </div>
        </div>
        
      </div>
    </>
  );
};

export default SliderForm;
