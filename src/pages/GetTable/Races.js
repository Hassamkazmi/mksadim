import React, { useEffect,useState } from "react";

import { fetchrace, STATUSES } from "../../redux/getReducer/getRaceSlice";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux/postReducer/postRace";
import { Link } from "react-router-dom";
import "../../Components/CSS/Table.css";
import ScrollContainer from "react-indiana-drag-scroll";
import '../../Components/CSS/race.css'
import {BsFillEyeFill} from "react-icons/bs"
import { Modal } from "react-bootstrap";
import RacePopup from "../../Components/Popup/RacePopup";
import {MdDelete} from 'react-icons/md'
import swal from "sweetalert";


const Races = () => {

  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState()
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
    setmodaldata(data)
    await setShow(true)
};
  const dispatch = useDispatch();

  const { data: race, status } = useSelector((state) => state.race);
  const handleRemove = async (Id) => {
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
        } else {
          swal("Your Data is safe!");
        }
      });

 
  };
  useEffect(() => {
    dispatch(fetchrace());
  }, []);

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
              <h4>Race Listings</h4>

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

                <Link to="/raceform">
                  <button>Add Race</button>
                </Link>
              </div>
            </div>

            <div class="div_maintb">
              <ScrollContainer className="scroll-container">
                <table className="Sc">
                  <thead style={{
                    marginTop:'30px'
                  }}>
                    <tr className="trtabletd">
                      <th>Race Name</th>
                      <th>Racecource</th>
                      <th>Description</th>
                      <th>Sponsor Logo</th>
                      <th>Race Type</th>
                      <th>Race Kind</th>
                      <th>Weather</th>
                      <th>Prize</th>
                      <th>Day & Time</th>
                      <th>Ground</th>
                      <th># of Horse</th>
                      <th>Status</th>
                      <th>Action</th>
                      
                    </tr>
                  </thead>
                  {
                    race.map((item) => {
                      const {RaceStatus} = item;
                      return(
                       <tbody  key={item._id}  style={{
                        marginTop:'20px'
                       }}>
                        <tr>
                    <td style={{
                      "backgroundColor": `${RaceStatus === "Cancel" ? '#000000': RaceStatus === "End" ? '#FF0000' : RaceStatus === "Live" ? '#5EC30F': '#FF9900'}`,
                      "color": `${RaceStatus === "Cancel" ? '#ffff': RaceStatus === "End" ? '#00000' : RaceStatus === "Live" ? '#00000': '#000000'}`
                      }} >{item.raceName}</td>
                    <td>{item.raceName}</td>
                    <td style={{width: '50px',  overflow: 'hidden',textOverflow: "ellipsis", whiteSpace: "nowrap"    }}>{item.Description}</td>
                    <td>{item.raceName}</td>
                    <td>{item.raceName}</td>
                   

                    <td>{item.RaceKind}</td>
                    <td>{item.Weather}</td>
                    <td>{item.raceName}</td>
                    <td>{item.DayNTime}</td>
                    <td>{item.raceName}</td>
                    <td>{item.Horses.length}</td>
                    <td>{item.RaceStatus}</td>
                    <td> 
                      
                    <MdDelete onClick={()=> handleRemove(item._id)}/>
              </td>
                    
                  </tr>
                       </tbody>
                      )
                    })
                  }
                </table>
              </ScrollContainer>
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
                <RacePopup data={modaldata} />
                </Modal.Body>
                <Modal.Footer>

                <button onClick={handleClose}  className='modalClosebtn'>Close</button>
                </Modal.Footer>
            </Modal>
    </>
  );
};
export default Races;
