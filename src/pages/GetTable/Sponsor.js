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
<<<<<<< HEAD
import {BiEdit} from 'react-icons/bi'
import ScrollContainer from "react-indiana-drag-scroll";
=======
<<<<<<< HEAD
import {BiEdit} from 'react-icons/bi'
=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd

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
              <h4>News Listings</h4>

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
                  <button>Add News</button>
                </Link>
              </div>
            </div>
            <div className="div_maint">
          <ScrollContainer className="scroll-container">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Image</th>
                  <th>Title En</th>
                  <th>Title Ar</th>
                  <th>Description En</th>
                  <th>Description Ar</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sponsor.map((item, index) => {
                  return (
                    <>
                      <tr className="tr_table_class">
                        <td>{index}</td>
                        <td>
                          <img src={item.image} alt=""  style={{
                                  width:'30px',height:'30px'
                                }}/>
                        </td>
                        <td>{item.TitleEn}</td>
                        <td>{item.TitleAr}</td>
                        <td>{item.DescriptionEn}</td>
                        <td>{item.DescriptionAr}</td>
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
            </Table>
          </ScrollContainer>
          </div>
        </div>
<<<<<<< HEAD
       
=======
        <span className="plusIconStyle">
        <Link to='/sponsorform'>
        <BsPlusCircleFill style={{
          fontSize:'34px'
        }}/>
        </Link>
        </span>
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
      </div>
    </div>
    </>
  );
};
export default News;
