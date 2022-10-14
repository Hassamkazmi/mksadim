import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RaceForm from "./RaceForm/RaceForm";
import SelectHorse from "./SelectHorse";

function HorseData() {
  const [page, setPage] = useState(0);


  const [formData, setFormData] = useState({
    RaceKind: "",
    raceName: "",
    Description: "",
    DayNTime: "",
    Weather: "",
    RaceStatus: "",
    RaceCourse: "",
    Horses: "",
    Horses: "",
    Horses: "",
    Horses: "",
    Horses: "",
    Horses: "",
  });

  const componentList = [
    <RaceForm
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <SelectHorse
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
  
  ];
  return (
    <div className="HorseData">
      <div className="body">{componentList[page]}</div>
      <ToastContainer />
    </div>
  );
}

export default HorseData;
