import React, { useEffect } from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { fetchjockey, STATUSES } from "../../redux/getReducer/getJockeySlice";
import { useDispatch, useSelector } from "react-redux";

import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostJockey";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Common/Header";
import { BiEdit } from "react-icons/bi";

const Statistic = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data: jockey, status } = useSelector((state) => state.jockey);
  useEffect(() => {
    dispatch(fetchjockey());
  }, [dispatch]);
  const handleRemove = (Id) => {
    dispatch(remove(Id));
    history("/jockey");
  };
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
              <div className="div_maint">
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
                              <BiEdit />
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
                  </tbody>
                </table>
              </div>
            </>
          </div>
          <span className="plusIconStyle"></span>
        </div>
      </div>
    </>
  );
};
export default Statistic;
