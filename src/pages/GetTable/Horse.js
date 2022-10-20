import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { remove } from "../../redux/postReducer/PostHorse";
import { Link, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { fetchHorse, STATUSES } from "../../redux/getReducer/getHorseSlice";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import ScrollContainer from "react-indiana-drag-scroll";
import swal from 'sweetalert';
import {BsFillEyeFill} from 'react-icons/bs'
import { Modal } from "react-bootstrap";
import HorsePopup from "../../Components/Popup/HorsePopup";


const Horse = () => {
  const [data ,setdata] = useState()
  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState()
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
      setmodaldata(data)
      await setShow(true)
  };
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data: horse, status } = useSelector((state) => state.horse);
  const [pagenumber, setPageNumber] = useState(1);

  const previousPageHandler = () => {
    setPageNumber((pagenumber) => pagenumber - 1);
  };
  const nextPageHandler = () => {
    setPageNumber((pagenumber) => pagenumber + 1);
  };

  useEffect(() => {
    dispatch(fetchHorse({ pagenumber }));
  }, [dispatch]);
  console.log(horse);
  const handleRemove = (Id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal(" Your data  has been deleted!", {
          icon: "success",
        });
        dispatch(remove(Id));
      } else {
        swal("Your data is safe!");
      }
    });

   
    history("/horse");
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
            <div className="Header ">
              <h4>Horse Listings</h4>

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

                <Link to="/horseform">
                  <button>Add Horse</button>
                </Link>
              </div>
            </div>
            <>
              <div className="div_maintb">
                <ScrollContainer className="scroll-container">
                  <table id="customers">
                    <thead>
              
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Color</th>
                        <th>KindOfHorse</th>
                        <th>Owner</th>
                        <th>Breeder</th>
                 
                 
                        <th>Dam</th>
                        <th>Sire</th>
                        <th>GSire</th>
                        <th>Remarks</th>
                         <th>Image</th>
                        <th>Actions</th>
                        <th></th>
                      </tr>
                    </thead>

                    {horse.map((item) => {
                      return (
                        <>
                          <tbody>
                            <tr>
                              <td>{item.NameEn}</td>
                              <td>{item.Age}</td>
                              <td>{item.Sex}</td>
                              <td>{item.Color}</td>
                              <td>{item.KindOfHorse}</td>

                              {item.Owner.map((data) => (
                                <td>{data.Name}</td>
                              ))}

                              <td>
                                {item.Breeder === null ? (
                                  <>No Data</>
                                ) : (
                                  <>{item.Breeder}</>
                                )}
                              </td>
                              <td>{item.Dam}</td>
                              <td>{item.Sire}</td>
                              <td>{item.GSire}</td>
                              <td>{item.Remarks}</td>
                              <td>
                                <img src={item.HorseImage} alt="" style={{
                                  width:'30px',height:'30px'
                                }}></img>
                              </td>
                              <td>
                                <BiEdit />
                                <MdDelete onClick={handleRemove} />
                                <BsFillEyeFill onClick={()=> handleShow(item) }/>
                                  
                              </td>
                            </tr>
                          </tbody>
                        </>
                      );
                    })}
                  </table>
                </ScrollContainer>
              </div>
            </>
          </div>
     
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <button
          className="button btn btn-primary"
          onClick={previousPageHandler}
          disabled={pagenumber === 1}
        >
          Previous
        </button>
        <p
          style={{
            marginTop: "20px",
          }}
        >
          Page {pagenumber}
        </p>
        <button
          className="button btn btn-primary"
          onClick={nextPageHandler}
          disabled={horse.length <= 1}
        >
          Next
        </button>
      </div> */}
        <Modal show={show} onHide={handleClose}   size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
                <Modal.Header closeButton>
                    <h2>Jockey </h2>
                </Modal.Header>
                <Modal.Body>
                <HorsePopup data={modaldata} />
                </Modal.Body>
                <Modal.Footer>

                <button onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
    </>
  );
};
export default Horse;
