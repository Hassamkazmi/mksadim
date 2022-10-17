import React, { useEffect } from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { fetchSponsor, STATUSES } from "../../redux/getReducer/getSponsorSlice";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostSponsor";
import { BsPlusCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Header from "../../Components/Common/Header";
import {BiEdit} from 'react-icons/bi'
import ScrollContainer from "react-indiana-drag-scroll";

const News = () => {
  const dispatch = useDispatch();
  const { data: sponsor, status } = useSelector((state) => state.sponsor);
  useEffect(() => {
    dispatch(fetchSponsor());
  }, []);
  const handleRemove = async (Id) => {
   await dispatch(remove(Id));
   fetchSponsor();
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
              <h4>Sponsor Listings</h4>

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

                <Link to="/sponsorform">
                  <button>Add Sponsor</button>
                </Link>
              </div>
            </div>
            <div className="div_maint">
          <ScrollContainer className="scroll-container">
            <table striped bordered hover>
              <thead>
                <tr>

                  

                  
                  <th>Title En</th>
                  <th>Title Ar</th>                  
                  <th>Description En</th>
                  <th>Description Ar</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sponsor.map((item, index) => {
                  return (
                    <>
                      <tr className="tr_table_class">
                  
              
                        <td>{item.TitleEn}</td>
                        <td>{item.TitleAr}</td>
                        <td>{item.DescriptionEn}</td>
                        <td>{item.DescriptionAr}</td>
                       
                        <td>
                          <img src={item.image} alt=""  style={{
                                  width:'30px',height:'30px'
                                }}/>
                        </td>
                        <td className="table_delete_btn1">
                          <BiEdit/>
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
          </ScrollContainer>
          </div>
        </div>
       
      </div>
    </div>
    </>
  );
};
export default News;
