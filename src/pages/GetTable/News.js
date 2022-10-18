import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { fetchNews, STATUSES } from "../../redux/getReducer/getNewsSlice";
import { useDispatch, useSelector } from "react-redux";

import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostNewsSlice";

import swal from 'sweetalert';


import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Common/Header";
import { BiEdit } from "react-icons/bi";
import ScrollContainer from "react-indiana-drag-scroll";

const News = () => {
  const dispatch = useDispatch();
  const [pagenumber, setPageNumber] = useState(1);

  const previousPageHandler = () => {
    setPageNumber((pagenumber) => pagenumber - 1);
  };
  const nextPageHandler = () => {
    setPageNumber((pagenumber) => pagenumber + 1);
  };

  const history = useNavigate();
  const { data: allnews, status } = useSelector((state) => state.news);
  useEffect(() => {
    dispatch(fetchNews({ pagenumber }));
  }, []);
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
    dispatch(remove(Id));
    history("/news");
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

                <Link to="/newsform">
                  <button>Add News</button>
                </Link>
              </div>
            </div>
            <>
              <div className="div_maint">
                <ScrollContainer className="scroll-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Title En</th>

                        <th>Sub Title En</th>

                        <th>Description En</th>
                        <th>Title Ar</th>
                        <th>Sub Title Ar</th>
                        <th>Description Ar</th>
                        <th>Image</th>

                        <th>Action</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {allnews.map((item, index) => {
                        return (
                          <tr className="tr_table_class" key={index}>
                            <td>{item.TitleEn}</td>

                            <td>{item.SecondTitleEn}</td>

                            <td>{item.DescriptionEn}</td>

                            <td>{item.TitleAr}</td>
                            <td>{item.DescriptionAr}</td>
                            <td>{item.SecondTitleAr}</td>
                            <img
                              src={item.image}
                              alt=""
                              style={{
                                width: "30px",
                                height: "30px",
                              }}
                            />
                            <td className="table_delete_btn1">
                              <BiEdit />
                              <MdDelete
                                style={{
                                  fontSize: "22px",
                                }}
                                onClick={() => handleRemove(item.id)}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </ScrollContainer>
              </div>
            </>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <button
          className="button btn btn-primary"
          onClick={previousPageHandler}
          disabled={pagenumber === 1}
        >
          Previous
        </button>
        <p
          style={{
            marginTop: "20px",
          }}
        >
          Page {pagenumber}
        </p>
        <button
          className="button btn btn-primary"
          onClick={nextPageHandler}
          disabled={allnews.length <= 1}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default News;
