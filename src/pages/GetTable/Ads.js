import React, { useEffect } from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { fetchAds, STATUSES } from "../../redux/getReducer/getAdsSlice";
import { useDispatch, useSelector } from "react-redux";

import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostAds";
import { BsPlusCircleFill } from 'react-icons/bs';
import {Link} from 'react-router-dom'
import Header from "../../Components/Common/Header";
import { edit } from "../../redux/postReducer/PostAds";
import {BiEdit} from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

const Ads = () => {
  const history = useNavigate()
  const dispatch = useDispatch();
  const { data: allads, status } = useSelector((state) => state.ads);
  useEffect(() => {
    dispatch(fetchAds());
  }, []);
  const handleRemove = (Id) => {
    dispatch(remove(Id));
  };
  let handleEdit = (Id)=>{

    dispatch(edit(Id));
    history('/adsforms')
    }  
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
    <Header/>
    <div className="page">
      <Sidebar />
      <div className="rightsidedata">
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <>
          <div className="Header ">
              <h4>Ads Listings</h4>

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

                <Link to="/adsform">
                  <button>Create Ad</button>
                </Link>
              </div>
            </div>
            <div className="div_maint">
            <table striped bordered hover>
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
              {allads.map((item, index) => {
                  return (
                    <>
                      <tr className="tr_table_class">
                        <td>{index}</td>
                        <td>
                          <img src={item.image} alt="" />
                        </td>
                        <td>{item.TitleEn}</td>
                        <td>{item.TitleAr}</td>
                        <td>{item.DescriptionEn}</td>
                        <td>{item.DescriptionAr}</td>
                    
                        <td className="table_delete_btn1">
            
            
            <BiEdit
              style={{
                fontSize: "22px",
              }}
              onClick={() => handleEdit(item._id)}
            />
          </td>
                    
                        <td className="table_delete_btn1">
            
            
                          <MdDelete
                            style={{
                              fontSize: "22px",
                            }}
                            onClick={() => handleRemove(item.index)}
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
        <span className="plusIconStyle">
        <Link to='/adsform'>
        <BsPlusCircleFill style={{
          fontSize:'22px'
        }}/>
        </Link>
        </span>
      </div>
    </div>
    </>
  );
};
export default Ads;
