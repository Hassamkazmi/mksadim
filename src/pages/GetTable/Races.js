import React, { useEffect } from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { fetchrace, STATUSES } from "../../redux/getReducer/getRaceSlice";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { remove } from "../../redux/postReducer/postRace";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Common/Header";
import "../../Components/CSS/Table.css";
import ScrollContainer from "react-indiana-drag-scroll";
import '../../Components/CSS/race.css'
=======
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/postRace";
import { BsPlusCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Common/Header";
<<<<<<< HEAD
import {BiEdit} from 'react-icons/bi'
=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281

>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd

const Races = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data: race, status } = useSelector((state) => state.race);
<<<<<<< HEAD
=======
  useEffect(() => {
    dispatch(fetchrace());
  }, []);
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
  const handleRemove = (Id) => {
    dispatch(remove(Id));
    history("/races");
  };
  useEffect(() => {
    dispatch(fetchrace());
  }, []);

  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Loading....
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
      <Header />
      <div className="page">
        <Sidebar />
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
<<<<<<< HEAD
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
                      
                    </tr>
                  </thead>
                  {
                    race.map((item) => {
                      const {RaceStatus} = item;
                      return(
                    <tr key={item._id}  >
                    <td style={{
                      "backgroundColor": `${RaceStatus === "Upcoming" ? '#FF9900': RaceStatus === "cancel" ? '#FF0000' : RaceStatus === "live" ? '#5EC30F': '#FF9900'}`}} >{item.raceName}</td>
                    <td>{item.raceName}</td>
                    <td>{item.Description}</td>
                    <td>{item.raceName}</td>
                    <td>{item.raceName}</td>
                    <td>{item.RaceKind}</td>
                    <td>{item.Weather}</td>
                    <td>{item.raceName}</td>
                    <td>{item.DayNTime}</td>
                    <td>{item.raceName}</td>
                    <td>{item.Horses.length}</td>
                    <td>{item.RaceStatus}</td>
                    
                  </tr>
                      )
                    })
                  }
                </table>
              </ScrollContainer>
            </div>
          </div>
=======
            <>
              <Table striped bordered hover>
<<<<<<< HEAD
          
=======
                <thead>
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
                  <tr>
                    <th>id</th>
                    <th>raceName</th>
                    <th>RaceKind</th>
                    <th>Description</th>

                    <th>Horse</th>
                    <th>RaceCourse</th>

                    <th>Weather</th>

                    <th>DayNTime</th>

                    <th>Action</th>
                  </tr>
<<<<<<< HEAD
            
       
=======
                </thead>
                <tbody>
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
                  {race.map((item, index) => {
                    return (
                      <>
                        <tr className="tr_table_class">
                          <td>{index}</td>


                          <td>{item.raceName}</td>
                          <td>{item.RaceKind}</td>
                          <td>{item.Description}</td>
                          {
                            item.Horses.map((e) => (
<<<<<<< HEAD
                              <td>{e.NameEn}</td>
=======
                              <td>{e._id}</td>
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281


                            ))

                          }


<<<<<<< HEAD
<td>{item.RaceCourseData === null ? <>No data</> : <>{item.RaceCourseData.TrackName}</>}</td>
=======
<td>{item.RaceCourse === null ? <>No data</> : <>{item.RaceCourse.TrackName}</>}</td>
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
                          <td>{item.Weather}</td>
                          <td>{item.DayNTime === null ? <>-</> :<>{item.DayNTime}</>}</td>


                          <td className="table_delete_btn1" >
<<<<<<< HEAD
                            <BiEdit/>
=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
                            <MdDelete
                              style={{
                                fontSize: "22px",
                              }}
                              onClick={() => handleRemove(item._id)}
                            />
                          </td>
                        </tr>
                      </>
                    );
                  })}
<<<<<<< HEAD
        
=======
                </tbody>
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
              </Table>
            </>
          </div>
          <span className="plusIconStyle" >
            <Link to="/raceform">
              <BsPlusCircleFill
                style={{
                  fontSize: "22px",
                }}
              />
            </Link>
          </span>
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
        </div>
      </div>
    </>
  );
};
export default Races;
