import React, { useEffect } from "react";

import { fetchrace, STATUSES } from "../../redux/getReducer/getRaceSlice";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux/postReducer/postRace";
import { Link, useNavigate } from "react-router-dom";
import "../../Components/CSS/Table.css";
import ScrollContainer from "react-indiana-drag-scroll";
import '../../Components/CSS/race.css'

const Races = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data: race, status } = useSelector((state) => state.race);
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
                      "backgroundColor": `${RaceStatus === "Cancel" ? '#000000': RaceStatus === "End" ? '#FF0000' : RaceStatus === "Live" ? '#5EC30F': '#FF9900'}`}} >{item.raceName}</td>
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
    </>
  );
};
export default Races;
