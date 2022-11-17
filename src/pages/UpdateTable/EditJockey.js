import React, { useState, useEffect } from "react";
import "../../Components/CSS/forms.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { add, edit } from "../../redux/postReducer/PostJockey";
import { fetchSinglejockey } from "../../redux/getReducer/getSingleJockey";
import swal from "sweetalert";

const NewsForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { state } = useLocation();

  const { jockeyid } = state;
  const { data: singlejockey } = useSelector((state) => state.singlejockey);

  // const [Name, setName] = useState("");
  // const [MaximumJockeyWeight, setMaximumJockeyWeight] = useState("");
  
  const [state1, setState] = useState({
		NameEn: '',
		MaximumJockeyWeight: '',
	});
  const [image,setImage] = useState();

  const fileSelected = (event) => {
    const image = event.target.files[0];
    setImage(singlejockey.image, image);
  };
  useEffect(() => {
    dispatch(fetchSinglejockey({ jockeyid }));
  }, []);


  useEffect(() => {
		if (singlejockey) {
			setState({
				NameEn: singlejockey.NameEn,
				MaximumJockeyWeight: singlejockey.MaximumJockeyWeight,
			});
		} else {
			dispatch(fetchSinglejockey({ jockeyid }));
		}
	}, [singlejockey]);
	// const updatePost = (e) => {
	// 	e.preventDefault();
	// 	dispatch(
	// 		updateAction({
	// 			title: state.title,
	// 			body: value,
	// 			description: state.description,
	// 			id: post._id,
	// 		})
	// 	);
	// };
  const submit = async (event) => {
    // event.preventDefault();
    // dispatch(edit);
    // event.preventDefault();
    // try {
    //   const formData = new FormData();
    //   formData.append("image", image);
    //   formData.append("Name", Name);
    //   formData.append("MaximumJockeyWeight", MaximumJockeyWeight);
    //   dispatch(add(formData));
    //   history("/jockey");
    //   swal({
    //     title: "Success!",
    //     text: "Data has been Updated successfully ",
    //     icon: "success",
    //     button: "OK",
    //   });
    // } catch (error) {
    //   alert(error.message);
    // }
  };
  return (
    <>
      <div className="page">
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className="Headers">Edit Jockey</div>
            <div className="form">
              <form onSubmit={submit}>
                <div className="row mainrow">
                  <div className="col-sm">
                  <input
										type='text'
										name='title'
										id='title'
										className='group__control'
										placeholder='Post title'
										value={state.NameEn}
										onChange={(e) =>
											setState({ ...state, title: e.target.value })
										}
									/>
                    <span className="spanForm"> |</span>
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
										type='text'
										name='title'
										id='title'
										className='group__control'
										placeholder='Post title'
										value={state1.MaximumJockeyWeight}
										onChange={(e) =>
											setState({ ...state1, MaximumJockeyWeight: e.target.value })
										}
									/>
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
                  <input type="file" size="60" onChange={fileSelected} />
                  <button type="submit" className="SubmitButton">
                    Add Jockey
                  </button>
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
