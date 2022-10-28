import React, { useState,useEffect } from "react";
import "../../Components/CSS/forms.css";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostSponsor";

import swal from "sweetalert";

const SponsorForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [TitleEn, setTitleEn] = useState("");
  const [TitleAr, setTitleAr] = useState("");
  const [DescriptionAr, setDescriptionAr] = useState("");
  const [DescriptionEn, setDescriptionEn] = useState("");
  const [image, setImage] = useState();
  const [preview,setPreview]=useState()

  const fileSelected = (event) => {
    const image = event.target.files[0];
    setImage(image);
  };
  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("TitleEn", TitleEn);
      formData.append("TitleAr", TitleAr);

      formData.append("DescriptionAr", DescriptionAr);
      formData.append("DescriptionEn", DescriptionEn);
      dispatch(add(formData));
      history("/sponsor");
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
    TitleAr === "" ||
    TitleEn === "" ||
    DescriptionAr === "" ||
    DescriptionEn === "" ||
    image === null ||
    image === undefined;
  return (
    <>
    
       <div className="page">
    
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
   
            <div className="Headers">Add Sponsor</div>
            <div className="form">
              <form onSubmit={submit}>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder=" TitleEn"
                      onChange={(e) => setTitleEn(e.target.value)}
                      name="Name"
                      value={TitleEn}
                      required
                    ></input><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                      onChange={(e) => setTitleAr(e.target.value)}
                      name="Name"
                      value={TitleAr}
                    ></input>
                  </div>
                </div>

                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Detail"
                      name="Detail"
                      onChange={(e) => setDescriptionEn(e.target.value)}
                      value={DescriptionEn}
                    ></input><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                    
                      name="Detail" placeholder="التفاصيل"  style={{ direction: "rtl" }}
                      onChange={(e) => setDescriptionAr(e.target.value)}
                      value={DescriptionAr}
                    ></input>
                  </div>
                </div>

                <div className='ButtonSection'>
                <div>
            <input type='file' onChange={onSelectFile} className="formInput"/>
            {image &&  <img src={preview} className="PreviewImage" alt="" /> }
        </div>

                  <button type='submit' className='SubmitButton'>Add Owner</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorForm;
