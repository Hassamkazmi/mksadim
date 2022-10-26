import React, { useState, Fragment,useEffect } from "react";
import "../../Components/CSS/forms.css";


import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostTrainer";

import swal from "sweetalert";

const TrainerForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Detail, setDetail] = useState("");
  const [Remarks, setRemarks] = useState("");
  const [preview, setPreview] = useState()

  const [image, setImage] = useState();
  
  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("Name", Name);
      formData.append("Age", Age);
      formData.append("Detail", Detail);
      formData.append("Remarks", Remarks);
      formData.append("Remarks", Remarks);

      dispatch(add(formData));
      history("/trainer");
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
    Name === "" ||
    Age === "" ||
    Detail === "" ||
    Remarks === "" ||
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
                      onChange={(e) => setName(e.target.value)}
                      name="Name"
                      value={Name}
                      required
                    ></input><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Age"
                      onChange={(e) => setAge(e.target.value)}
                      name="Name"
                      value={Age}
                      required
                      type="number"
                    ></input><span className="spanForm"> |</span>
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
                      placeholder="Detail"
                      name="Detail"
                      onChange={(e) => setDetail(e.target.value)}
                      value={Detail}
                    ></input><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input placeholder="التفاصيل"  style={{ direction: "rtl" }}></input>
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
                    ></input><span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="طول المسار"
                    ></input>
                  </div>
                </div>

                <div className='ButtonSection'>
                <div>
            <input type='file' onChange={onSelectFile} className="formInput"/>
            {image &&  <img src={preview} /> }
        </div>

                  <button type='submit' className='SubmitButton'>Add Race Course</button>

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
