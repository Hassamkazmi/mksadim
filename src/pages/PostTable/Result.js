import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Select from "react-select";

const LocalItem = () => {
  const list = localStorage.getItem("lists");

  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [InputData, SetinputData] = useState("");
  const [items, setitems] = useState(LocalItem());

  const addItem = () => {
    setitems([...items, InputData]);
    console.log(InputData);
    SetinputData("");
    console.log(items, "data is");
    // if (!InputData) {
    // } else {
    //   setitems([...items, InputData]);
    //   console.log(InputData);
    //   SetinputData("");
    // }
  };

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
      {" "}
      <div className="main-div">
      <div className="myselecthorse">
              <div className="myselecthorsedata">
                <span>Gate #</span>
                <span>Horse Name</span>
                <span>Jockey Name</span>
                <span>Jockey Weight</span>
              </div>
            </div>
        {items.map((e, i) => {
          return (
            <div className="myselectiondata">
              <span>#1</span>
              <span>
                <Select
                  defaultValue={InputData}
                  onChange={SetinputData}
                  // options={horseoptions}
                  isClearable={true}
                  isSearchable={true}
                />
              </span>
              <span>
                <p>N/A</p>
              </span>
            </div>
          );
        })}
        <div>
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
    </>
  );
};

export default Todo;
