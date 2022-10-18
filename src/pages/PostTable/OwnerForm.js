import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostOwner";
import Header from "../../Components/Common/Header";
import Sidebar from "../../Components/Common/Sidebar";
import swal from "sweetalert";

const OwnerForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Name, setName] = useState("");
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
      formData.append("Name", Name);
      dispatch(add(formData));
      history("/owner");
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
            <div className="Headers">Add Owner</div>
            <div className="form">
              <form onSubmit={submit}>
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder=" Name"
                      onChange={(e) => setName(e.target.value)}
                      name="Name"
                      value={Name}
                      required
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                    ></input>
                  </div>
                </div>

                <div className="ButtonSection">
                  <label>
                    Select File
                    <input type="file" size="60" onChange={fileSelected} />
                  </label>
                  <button type="submit" className="SubmitButton">
                    Add Owner
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            {" "}
            <img src={image} alt="" />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerForm;
