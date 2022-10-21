import React, { useState } from "react";
import "../../Components/CSS/forms.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostJockey";
import { fetchSinglejockey, STATUSES } from "../../redux/getReducer/getSingleJockey";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { useEffect } from "react";

const NewsForm = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const {id} = useParams()
    const { data: singlejockey, status } = useSelector((state) => state.singlejockey);

    const [Name,setName] = useState('')
    const [Age,setAge] = useState('')
    const [image,setImage] = useState()
  
  
    const fileSelected = event => {
      const image = event.target.files[0]
      setImage(image)
    }
    useEffect(() => {
        dispatch(fetchSinglejockey({id}));
      }, [dispatch]);
    const submit = async event => {
      event.preventDefault()
     
    }
    console.log(singlejockey,'singlejockey')
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
                <div className="row ">
                  <div className="col-sm">
                    <input placeholder=' Name' onChange={e => setName(e.target.value)} name='Name' value={singlejockey.Name}

                      required
                    ></input>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} placeholder="اسم "></input>

                  </div>

                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input placeholder='Age' onChange={e => setAge(e.target.value)} name='Name' value={singlejockey.Age}
                      required
                      type='number'
                    ></input>

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
