import React, { useEffect, useState } from "react";
import Select from "react-select";
import { fetchSponsor } from "../../redux/getReducer/getSponsorSlice";
import { useDispatch, useSelector } from "react-redux";

const LocalItem = () => {

 


  const list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [InputData, SetinputData] = useState("");
  const [items, setitems] = useState(LocalItem());
  const dispatch = useDispatch();

  const { data: sponsor } = useSelector((state) => state.sponsor);

  useEffect(() => {
    dispatch(fetchSponsor())
  },[dispatch])
  const HorseEntry = [`1,${InputData.id},qweqwe,44`];
  const addItem = () => {
    
    if (!InputData) {
    } else {
      setitems([...items, HorseEntry]);
    SetinputData("");
    console.log(items, "data is");
    }
  };

  let sponsoroptions = sponsor.map(function (item) {
    return {
      id: item._id,
      value: item.TitleEn,
      label: item.TitleEn,
    };
  });
  // console.log(items,'InputData')

  const deleteItems = (id) => {
    const updateItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setitems(updateItems);
  };

  const Remove = () => {
    setitems([]);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

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
              <h4>Add Horse</h4>
            </div>
            <div className="myselecthorse">
              <div className="myselecthorsedata">
                <span>Gate #</span>
                <span>Horse Name</span>
                <span>Jockey Name</span>
                <span>Jockey Weight</span>
              </div>
            </div>
            <div className="myselectdata">
            <div className="myselectiondata">
              <span>0</span>
              <span>
                <Select
                  defaultValue={InputData}
                  onChange={SetinputData}
                  options={sponsoroptions}
                  isClearable={false}
                  isSearchable={true}
                />
              </span>
              <span>
                <p>N/A</p>
              </span>
              <span>
                <p>KG</p>
              </span>
            </div>
            {items.map((e, i) => {
            return (
            <div className="myselectiondata">
              <span>{i+1}</span>
              <span>
                <Select
                  defaultValue={InputData}
                  onChange={SetinputData}
                  options={sponsoroptions}
                  isClearable={false}
                  isSearchable={true}
                />
              </span>
              <span>
                <p>N/A</p>
              </span>
              <span>
                <p>KG</p>
              </span>
            </div>
          );
        })}

<div className="sbmtbtndiv">
            <div className="RaceButtonDiv">
              <button className="updateButton" onClick={Remove}>
                Update
              </button>

              <button className="SubmitButton" type="submit" onClick={addItem}>
                Save & Add Horses
              </button>
            </div>
          </div>
              
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Todo;
