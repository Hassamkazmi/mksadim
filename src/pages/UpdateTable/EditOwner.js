import React, { useState ,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import { add,edit } from "../../redux/postReducer/PostOwner";


import swal from "sweetalert";
import { fetchSingleOwner } from "../../redux/getReducer/getSingleOwner";

const EditOwnerForm = () => {

    const { data: singleowner } = useSelector((state) => state.singleowner);
    const { id } = useParams()
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Name, setName] = useState(singleowner.Name);
  const [image, setImage] = useState(singleowner.image);

  console.log(singleowner,"Araha hu")
  const fileSelected = (event) => {
    const image = event.target.files[0];
    setImage(image);
  };
  useEffect(() => {
    dispatch(fetchSingleOwner({ id }));
  }, []);
  const submit = async (event) => {
    event.preventDefault();
    dispatch(edit)
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
      console.log(singleowner,"hai")
    }
  };
  const isSubmitData = Name === "" || image === null || image === undefined;
  return (
    <>
           <div className="page">
     
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className="Headers">Edit Owner</div>
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

                <div className="ButtonSection">
                  <label>
    
                    <input type="file" size="60" onChange={fileSelected} />
                  </label>
                  <button
                    type="submit"
                    className="SubmitButton"
                    disabled={isSubmitData}
                  >
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

export default EditOwnerForm;
