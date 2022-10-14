import React, { useState } from "react";
import Header from "../../Components/Common/Header";
import Sidebar from "../../Components/Common/Sidebar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../redux/postReducer/PostSlider";

const SliderForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [TitleEn, setTitleEn] = useState("");
  const [TitleAr, setTitleAr] = useState("");
  const [image, setImage] = useState();

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
      dispatch(add(formData));
      history("/slider");
      
    } catch (error) {
      alert(error.message);
    }
  };

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
            <div className="Headers">Add Slider</div>
            <div className="form">
              <form onSubmit={submit}>
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder=" Name"
                      onChange={(e) => setTitleEn(e.target.value)}
                      name="Name"
                      value={TitleEn}
                      required
                    ></input>
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

                <div className="ButtonSection">
                  <input type="file" size="60" onChange={fileSelected} />
                  <button type="submit" className="SubmitButton">
                    Add Slider
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="ImgDiv">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default SliderForm;