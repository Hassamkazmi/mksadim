import React, { useEffect,useState } from "react";

import { fetchjockey, STATUSES } from "../../redux/getReducer/getJockeySlice";
import { useDispatch, useSelector } from "react-redux";

import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostJockey";
import { Link, useNavigate } from "react-router-dom";

import { BiEdit } from "react-icons/bi";
import swal from 'sweetalert';
import JockeyPopup from "../../Components/Popup/JockeyPopup";
import { Modal } from "react-bootstrap";
import {BsFillEyeFill} from 'react-icons/bs'




const Statistic = () => {

  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState()
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
      setmodaldata(data)
      await setShow(true)
  };
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data: jockey, status } = useSelector((state) => state.jockey);
  useEffect(() => {
    dispatch(fetchjockey());
  }, [dispatch]);
  const handleRemove = (Id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        dispatch(remove(Id));
        history("/jockey");
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    dispatch(remove(Id));
    history("/jockey");
  };

  
  if (status === STATUSES.LOADING) {
    return (
        <h2
        className="loader"
        >
          <div class="inner">
    </div>
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
            <div className="Header ">
              <h4>Jockey Listings</h4>

              <div>
                <h6
                  style={{
                    marginRight: "100px",
                    alignItems: "center",
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Toggle to Arabic
                </h6>

                <Link to="/jockeyform">
                  <button>Add Jockey</button>
                </Link>
              </div>
            </div>
            <>
              <div className="div_maintb">
                <table>
                  <thead>
                    <tr>
                      <th>JockeyName</th>
                      <th>Age</th>
                      <th>Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jockey.map((item, index) => {
                      return (
                        <>
                          <tr className="tr_table_class">
                            <td>{item.Name}</td>

                            <td>{item.Age}</td>

                            <td>
                              <img src={item.image} alt="" />
                            </td>

                            <td className="table_delete_btn1">
                             <Link to={`/editjockey/${item._id}`}> <BiEdit /></Link>
                              <MdDelete
                                
                                onClick={() => handleRemove(item._id)}
                              />
                            <BsFillEyeFill onClick={()=> handleShow(item) }/>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          </div>
          <span className="plusIconStyle"></span>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}   size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
                <Modal.Header closeButton>
                    <h2>Jockey </h2>
                </Modal.Header>
                <Modal.Body>
                <JockeyPopup data={modaldata} />
                </Modal.Body>
                <Modal.Footer>

                <button onClick={handleClose}  className='modalClosebtn'>Close</button>
                </Modal.Footer>
            </Modal>
      
    </>
  );
};
export default Statistic;
