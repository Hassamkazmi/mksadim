import React, { useEffect,useState } from "react";

import { fetchracecourse, STATUSES } from "../../redux/getReducer/getRaceCourseSlice";
import { useDispatch, useSelector } from "react-redux";

import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostRaceCourse";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import { BiEdit } from 'react-icons/bi'
import { Modal } from "react-bootstrap";
import RacecoursePopup from '../../Components/Popup/RacecoursePopup'
import {BsFillEyeFill} from 'react-icons/bs'

const Racecourse = () => {

  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState()
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
    setmodaldata(data)
    await setShow(true)
};


  const dispatch = useDispatch();
  const { data: racecourse, status } = useSelector((state) => state.racecourse);
  useEffect(() => {
    dispatch(fetchracecourse());
  }, [dispatch]);

  const handleRemove = (Id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal(" Your  file has been deleted!", {
            icon: "success",
          });
          dispatch(remove(Id));
        } else {
          swal("Your data  is safe!");
        }
      });






    

  };
  
  
  if (status === STATUSES.LOADING) {
    return (
      <h2
        className="loader"
      >

      </h2>
    );
  }


  if (status === STATUSES.ERROR) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Something went wrong!
      </h2>
    );
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
            <div className='Header '>

              <h4>RaceCourse Listings</h4>







              <div>
                <h6 style={{ marginRight: "100px", alignItems: "center", color: "rgba(0, 0, 0, 0.6)" }}>Toggle to Arabic</h6>

                <Link to="/racecourseform">
                  <button>Add Racecource</button>
                </Link>
              </div>

            </div>

            <div class="div_maintb">
              <table striped bordered hover>
                <thead>
                  <tr>
                    <th>TrackName</th>

                    <th>TrackLength</th>


                    <th>Country</th>
                    <th>Image</th>


                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {racecourse.map((item, index) => {
                    return (
                      <>
                        <tr className="tr_table_class">

                          <td>{item.TrackName}</td>
                          <td>{item.TrackLength}</td>
                          <td>{item.Country}</td>
                          <td>

                            <img src={item.image} alt="" />
                          </td>




                          <td className="table_delete_btn1">
                      <Link to ={`/editracecourse/${item._Id}`}      ><BiEdit /></Link>
                            <MdDelete
                              style={{
                                fontSize: "22px",
                              }}
                              onClick={() => handleRemove(item._id)}
                            />
                            <BsFillEyeFill style={{ cursor:"pointer" }} onClick={() => handleShow(item)} />

                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>

            </div>

          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}   size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
                <Modal.Header closeButton>
                    <h2>Race Course </h2>
                </Modal.Header>
                <Modal.Body>
                <RacecoursePopup data={modaldata} />
                </Modal.Body>
                <Modal.Footer>

                <button onClick={handleClose} className='modalClosebtn'>Close</button>
                </Modal.Footer>
            </Modal>
      
    </>
  );
};
export default Racecourse;
