import React, { useState, Fragment, useEffect } from "react";
import "../../Components/CSS/forms.css";
import axios from "axios";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { add } from "../../redux/postReducer/PostTrainer";
import swal from "sweetalert";
const TrainerForm = () => {
  // const dispatch = useDispatch();
  const history = useNavigate();
  const [NameEn, setNameEn] = useState("");
  const [Detail, setDetail] = useState("");
  const [Remarks, setRemarks] = useState("");
  const [NameAr,setNameAr] = useState("");
  const [DOB,setDOB]=useState("")
  const [TitleAr,setTitleAr] = useState("")
  const [TitleEn,setTitleEn] = useState("")
  const [Rating, setRating] = useState("");
  const [TrainerLicenseDate,setTrainerLicenseDate] = useState('');
  const [ShortNameEn,setShortNameEn] =useState("");
  const [ShortNameAr,setShortNameAr] =useState("");

  const [preview, setPreview] = useState();
  const [image, setImage] = useState();



  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("NameEn", NameEn);
      formData.append("NameAr",NameAr);   
      formData.append("TitleEn" ,TitleEn)
      formData.append("TitleAr", TitleAr)
      formData.append("Detail", Detail);
      formData.append("Remarks", Remarks);
      formData.append("Rating", Rating);
      formData.append("TrainerLicenseDate",TrainerLicenseDate);
    await axios.post(`${window.env.API_URL}/uploadtrainer?keyword=&page=`,formData);
      
      swal({
        title: "success!",
        text: "Data Submitted !",
        icon: "success",
        button: "OK",
      });
      console.log(formData,'NameEn')
      history("/trainer");
    } catch (error) {
      console.log(error,'NameEn')
      const err = error.response.data.message;
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
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  const onSelectFile = (e) => {
    setImage(e.target.files[0]);
    console.log(image, "image");
  };
  const isSubmitData =
  NameEn === "" ||
    DOB === "" ||
    Detail === "" ||
    Remarks === "" ||
    Rating === "" ||
    image === null ||
    image === undefined;
  return (
    <Fragment>
      <div className="page">
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className="Headers">Add Trainer</div>
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
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                    onChange={e => setNameAr(e.target.value)}
                    value={NameAr}
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                    ></input>
                  </div>
                </div>

                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Age"
                      onChange={(e) => setDOB(e.target.value)}
                      name="Name"
                      value={DOB}
                      required
                      type="date"
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      type="number"
                      placeholder="اسم المسار"
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Title"
                      onChange={(e) => setTitleEn(e.target.value)}
                      name="Name"
                      value={TitleEn}
                      required
                      type="text"
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      type="number"
                      onChange={e => setTitleAr(e.target.value)}
                      value={TitleAr}
                      placeholder="اسم المسار"
                    ></input>
                  </div>
                </div>

                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Short Name"
                      onChange={(e) => setShortNameEn(e.target.value)}
                      name="Name"
                      value={ShortNameEn}
                      required
                      type="text"
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      type="text"
                      onChange={e => setShortNameAr(e.target.value)}
                      value={ShortNameAr}
                      placeholder="اسم المسار"
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Detail"
                      name="Detail"
                      onChange={(e) => setDetail(e.target.value)}
                      value={Detail}
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="التفاصيل"
                      style={{ direction: "rtl" }}
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Remarks"
                      onChange={(e) => setRemarks(e.target.value)}
                      name="Remarks"
                      value={Remarks}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
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
                    <input
                      placeholder="Rating"
                      onChange={(e) => setRating(e.target.value)}
                      name="Rating"
                      value={Rating}
                      type='number'
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="طول المسار"
                      type='number'
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Age"
                      onChange={(e) => setTrainerLicenseDate(e.target.value)}
                      name="Name"
                      value={TrainerLicenseDate}
                      required
                      type="date"
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      type="number"
                      placeholder="اسم المسار"
                    ></input>
                  </div>
                </div>
                <div className="ButtonSection">
                  <div>
                    <input
                      type="file"
                      onChange={onSelectFile}
                      className="formInput"
                    />
                    {image && (
                      <img src={preview} className="PreviewImage" alt="" />
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitData}
                    className="SubmitButton"
                  >
                    Add Race Course
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

export default TrainerForm;
