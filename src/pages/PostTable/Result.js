import React ,{useState}from 'react'
import Select from "react-select";
import { useSelector } from 'react-redux';



const Result = () => {
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    const [selectedOption3, setSelectedOption3] = useState("");
    const [selectedOption4, setSelectedOption4] = useState("");
    const [selectedOption5, setSelectedOption5] = useState("");
    const [selectedOption6, setSelectedOption6] = useState("");
    const { data: horse } = useSelector((state) => state.horse);


    let horseoptions = horse.map(function (item) {
        return {
          id: item._id,
          value: item.NameEn,
          label: item.NameEn,
          jockeyvalue: item.JockeyData === undefined  ? <>N/A</> : item.JockeyData.map((item) => item.Name)
          // jockeyvalue: item.JockeyData.map((item) => item.Name),
        };
      });
  return (
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
            <span>Rank #</span>
            <span>Horse Name</span>
            <span>Jockey Name</span>
          </div> 
        </div>
        <div className="myselectdata">
          <div className="myselectiondata">
            <span>#1</span>
            <span>
              <Select
                defaultValue={selectedOption1}
                onChange={setSelectedOption1}
                options={horseoptions}
                isClearable={true}
                isSearchable={true}
              />
            </span>
            <span>
              {selectedOption1 === "" ? (
                <p>N/A</p>
              ) : (
                <p>{selectedOption1.jockeyvalue[0]}</p>
              )}
            </span>
          </div>
          <div className="myselectiondata">
            <span>#2</span>
            <span>
              <Select
                defaultValue={selectedOption2}
                onChange={setSelectedOption2}
                options={horseoptions}
                isClearable={true}
                isSearchable={true}
              />
            </span>
            <span >
              {selectedOption2 === "" ? (
                <p>N/A</p>
              ) : (
                <p>{selectedOption2.jockeyvalue[0]}</p>
              )}
            </span>
          </div>
          <div className="myselectiondata">
            <span>#3</span>
            <span>
              <Select
                defaultValue={selectedOption3}
                onChange={setSelectedOption3}
                options={horseoptions}
                isClearable={true}
                isSearchable={true}
              />
            </span>
            <span>
              {selectedOption3 === "" ? (
                <p>N/A</p>
              ) : (
                <p>{selectedOption3.jockeyvalue[0]}</p>
              )}
            </span>
          </div>
          <div className="myselectiondata">
            <span>#4</span>
            <span>
              <Select
                defaultValue={selectedOption4}
                onChange={setSelectedOption4}
                options={horseoptions}
                isClearable={true}
                isSearchable={true}
              />
            </span>
            <span>
              {selectedOption4 === "" ? (
                <p>N/A</p>
              ) : (
                <p>{selectedOption4.jockeyvalue[0]}</p>
              )}
            </span>
          </div>
          <div className="myselectiondata">
            <span>#5</span>
            <span>
              <Select
                defaultValue={selectedOption5}
                onChange={setSelectedOption5}
                options={horseoptions}
                isClearable={true}
                isSearchable={true}
              />
            </span>
            <span>
              {selectedOption5 === "" ? (
                <p>N/A</p>
              ) : (
                <p>{selectedOption5.jockeyvalue[0]}</p>
              )}
            </span>
          </div>
          <div className="myselectiondata">
            <span>#6</span>
            <span>
              <Select
                defaultValue={selectedOption6}
                onChange={setSelectedOption6}
                options={horseoptions}
                isClearable={true}
                isSearchable={true}
              />
            </span>
            <span>
              {selectedOption6 === "" ? (
                <p>N/A</p>
              ) : (
                <p>{selectedOption6.jockeyvalue[0]}</p>
              )}
            </span>
           
          </div>
          <div className="addbtn">
       

          </div>
          <div className="sbmtbtndiv">
           
          <div className="RaceButtonDiv">
              <button className="updateButton">Update</button>

              <button
                className="SubmitButton"
               type="submit"
             
        
              >
               Save & Add Horses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Result