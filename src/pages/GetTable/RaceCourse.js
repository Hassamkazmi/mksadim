import React, { useEffect } from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { fetchracecourse, STATUSES } from "../../redux/getReducer/getRaceCourseSlice";
import { useDispatch, useSelector } from "react-redux";
import '../../Components/CSS/SubTable.css'
import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostRaceCourse";

import { Link } from "react-router-dom";
import Header from "../../Components/Common/Header";
import {BiEdit} from 'react-icons/bi'

const News = () => {
  const dispatch = useDispatch();
  const { data: racecourse, status } = useSelector((state) => state.racecourse);
  useEffect(() => {
    dispatch(fetchracecourse());
  }, [dispatch]);

  const handleRemove =  (Id) => {

    

 dispatch(remove(Id));
 
   fetchracecourse();
 
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
            <div className='Header '>

<h4>RaceCourse Listings</h4>







<div>
  <h6 style={{ marginRight: "100px", alignItems: "center", color: "rgba(0, 0, 0, 0.6)" }}>Toggle to Arabic</h6>

  <Link to="/racecourseform">
    <button>Add Racecource</button>
  </Link>
</div>

</div>
        
          <div class="div_maint">
            <table striped bordered hover>
              <thead>
                <tr>
                <th>TrackName</th>
                
                <th>TrackLength</th>
                

                  <th>Country</th>
                  <th>Image</th>
                
             
            <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {racecourse.map((item, index) => {
                  return (
                    <>
                      <tr className="tr_table_class">
                       
                        <td>{item.TrackName}</td>
                        <td>{item.TrackLength}</td>
                        <td>{item.Country}</td>
                        <td>

                          <img src={item.image} alt="" />
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
  
        </div>
     
      </div>
    </div>
    </div>
    </>
  );
};
export default News;