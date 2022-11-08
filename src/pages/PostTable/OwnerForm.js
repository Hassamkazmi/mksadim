import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostOwner";
import axios from "axios";
import swal from "sweetalert";

const OwnerForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [NameEn, setNameEn] = useState("");
  const [NameAr,setNameAr] = useState();
  const [TitleEn , setTitleEn] = useState("");
  const [TitleAr,setTitleAr] = useState("");
  const [image, setImage] = useState();
  const [preview, setPreview] = useState()
 
  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("NameEn", NameEn);
      formData.append("NameAr",NameAr)

      dispatch(add(formData));
    await axios.post(`${window.env.API_URL}/createowner`,formData);
      swal({
        title: "success!",
        text: 'Data Submitted !',
        icon: "success",
        button: "OK",
      });
      history("/owner");
      
    }
     catch (error) {
      console.log(error.response.data.message,'error')
      const err = error.response.data.message
      swal({
        title: "Error!",
        text: err,
        icon: "error",
        button: "OK",
      });
      
    }
  };
  const isSubmitData = NameEn === "" || image === null || image === undefined;
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
    <>
           <div className="page">
     
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className="Headers">Add Owner</div>
            <div className="form">
              <form onSubmit={submit}>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder=" Name"
                      onChange={(e) => setNameEn(e.target.value)}
                      name="Name"
                      value={NameEn}
                      required
                    ></input><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      onChange={e => setNameAr(e.target.value)}
                      value={NameAr}
                      placeholder="اسم "
                    ></input>
                  </div>
                </div>

                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder=" Title"
                      onChange={(e) => setTitleEn(e.target.value)}
                      name="Name"
                      value={TitleEn}
                      required
                    ></input><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      onChange={e => setTitleAr(e.target.value)}
                      value={NameAr}
                      placeholder=" "
                    ></input>
                  </div>
                </div>

                <div className='ButtonSection'>
                <div>
            <input type='file' onChange={onSelectFile} className="formInput"/>
            {image &&  <img src={preview} alt="" className="PreviewImage"/> }
        </div>

                  <button type='submit' className='SubmitButton' disabled={isSubmitData}>Add Owner</button>

                </div>
              </form>
            </div>
          </div>
          <div>

       
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerForm;
