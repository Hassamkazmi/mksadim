import React, { useEffect } from "react";

import { fetchracecourse, STATUSES } from "../../redux/getReducer/getRaceCourseSlice";
import { useDispatch, useSelector } from "react-redux";

import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostRaceCourse";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import { BiEdit } from 'react-icons/bi'

const News = () => {
  const dispatch = useDispatch();
  const { data: racecourse, status } = useSelector((state) => state.racecourse);
  useEffect(() => {
    dispatch(fetchracecourse());
  }, [dispatch]);

  const handleRemove = (Id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal(" Your  file has been deleted!", {
            icon: "success",
          });
          dispatch(remove(Id));
        } else {
          swal("Your file file is safe!");
        }
      });






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

      <div className="page">

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

            <div class="div_maintb">
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

          </div>
        </div>
      </div>
    </>
  );
};
export default News;
