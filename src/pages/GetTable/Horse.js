import React, { useState } from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import "../../Components/CSS/SubTable.css";
import { remove } from "../../redux/postReducer/PostHorse";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Common/Header";
import { useEffect } from "react";
import { fetchHorse, STATUSES } from "../../redux/getReducer/getHorseSlice";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import ScrollContainer from "react-indiana-drag-scroll";
import swal from 'sweetalert';


const Horse = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data: horse, status } = useSelector((state) => state.horse);
  const [pagenumber, setPageNumber] = useState(1);

  const previousPageHandler = () => {
    setPageNumber((pagenumber) => pagenumber - 1);
  };
  const nextPageHandler = () => {
    setPageNumber((pagenumber) => pagenumber + 1);
  };

  useEffect(() => {
    dispatch(fetchHorse({ pagenumber }));
  }, [dispatch]);
  console.log(horse);
  const handleRemove = (Id) => {
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
        swal("Your imaginary file is safe!");
      }
    });

   
    history("/horse");
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
              <h4>Horse Listings</h4>

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

                <Link to="/horseform">
                  <button>Add Horse</button>
                </Link>
              </div>
            </div>
            <>
              <div className="div_maint">
                <ScrollContainer className="scroll-container">
                  <table id="customers">
                    <thead>
              
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Color</th>
                        <th>KindOfHorse</th>
                        <th>Owner</th>
                        <th>Breeder</th>
                 
                 
                        <th>Dam</th>
                        <th>Sire</th>
                        <th>GSire</th>
                        <th>Remarks</th>
                         <th>Image</th>
                        <th>Actions</th>
                        <th></th>
                      </tr>
                    </thead>

                    {horse.map((item) => {
                      return (
                        <>
                          <tbody>
                            <tr>
                              <td>{item.NameEn}</td>
                              <td>{item.Age}</td>
                              <td>{item.Sex}</td>
                              <td>{item.Color}</td>
                              <td>{item.KindOfHorse}</td>

                              {item.Owner.map((data) => (
                                <td>{data.Name}</td>
                              ))}

                              <td>
                                {item.Breeder === null ? (
                                  <>No Data</>
                                ) : (
                                  <>{item.Breeder}</>
                                )}
                              </td>
                              <td>{item.Dam}</td>
                              <td>{item.Sire}</td>
                              <td>{item.GSire}</td>
                              <td>{item.Remarks}</td>
                              <td>
                                <img src={item.HorseImage} alt="" style={{
                                  width:'30px',height:'30px'
                                }}></img>
                              </td>
                              <td>
                                <BiEdit />
                                <MdDelete onClick={handleRemove} />
                              </td>
                            </tr>
                          </tbody>
                        </>
                      );
                    })}
                  </table>
                </ScrollContainer>
              </div>
            </>
          </div>
          <span className="plusIconStyle"></span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
      </div>
    </>
  );
};
export default Horse;
