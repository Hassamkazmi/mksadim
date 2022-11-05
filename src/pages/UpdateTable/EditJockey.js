import React, { useState ,useEffect} from "react";
import "../../Components/CSS/forms.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate ,useParams} from "react-router-dom";
import { add, edit } from "../../redux/postReducer/PostJockey";
import { fetchSinglejockey } from "../../redux/getReducer/getSingleJockey";
import swal from "sweetalert";


const NewsForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams()
  const { data: singlejockey } = useSelector((state) => state.singlejockey);

  const [Name, setName] = useState(singlejockey.Name)
  const [Age, setAge] = useState(singlejockey.Age)
  const [image, setImage] = useState(singlejockey.image)

  console.log(singlejockey, "sahi hai")
  const fileSelected = event => {
    const image = event.target.files[0]
    setImage(singlejockey.image, image)
  }
  useEffect(() => {
    dispatch(fetchSinglejockey({ id }));
  }, []);
  const submit = async event => {
    event.preventDefault()
    dispatch(edit)
    event.preventDefault()
    try {
      const formData = new FormData();
      formData.append("image", image)
      formData.append("Name", Name)
      formData.append("Age", Age)
      dispatch(add(formData));
      history('/jockey')
      swal({
        title: "Success!",
        text: "Data has been Updated successfully ",
        icon: "success",
        button: "OK",
      });
    } catch (error) {
      alert(error.message)
    }


  }
  console.log(singlejockey, 'singlejockey')
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

              Edit Jockey
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

                  <input type="file" size="60" onChange={fileSelected} />
                  <button type='submit' className='SubmitButton' >Add Jockey</button>

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
