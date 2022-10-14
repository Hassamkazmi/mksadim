import React, { useEffect } from "react";
import Sidebar from "../../Components/Common/Sidebar";
<<<<<<< HEAD
import { fetchjockey, STATUSES } from "../../redux/getReducer/getJockeySlice";
=======
import { fetchjockey,STATUSES } from "../../redux/getReducer/getJockeySlice";
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
import { useDispatch, useSelector } from "react-redux";

import { MdDelete } from "react-icons/md";
<<<<<<< HEAD
import { remove } from "../../redux/postReducer/PostJockey";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Common/Header";
import { BiEdit } from "react-icons/bi";
=======
import { remove,add } from "../../redux/postReducer/PostJockey";
import { BsPlusCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Common/Header";
<<<<<<< HEAD
import {BiEdit} from 'react-icons/bi'
=======

>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd

const Statistic = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data: jockey, status } = useSelector((state) => state.jockey);
  useEffect(() => {
    dispatch(fetchjockey());
<<<<<<< HEAD
  }, [dispatch]);
=======
  }, []);
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
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
<<<<<<< HEAD
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
=======
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
          <>
            <Table striped bordered hover>.
              <thead>
                <tr>
                  <th>id</th>
                  <th>Image</th>
                  <th>JockeyName</th>
                  <th>Age</th>
                  <th style={{textAlign:'right'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {jockey.map((item, index) => {
                  return (
                    <>
                      <tr className="tr_table_class">
                        <td>{index}</td>
                        <td>
                          <img src={item.image} alt="" />
                        </td>
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>{item.TrackName}</td>
                        <td>{item.TrackNameAr}</td>
                        <td className="table_delete_btn1">
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
              </tbody>
            </Table>
          </>
        </div>
        <span className="plusIconStyle">
          <Link to="/jockeyform">
            <BsPlusCircleFill
              style={{
                fontSize: "22px",
              }}
            />
          </Link>
        </span>
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
      </div>
    </>
  );
};
export default Statistic;
