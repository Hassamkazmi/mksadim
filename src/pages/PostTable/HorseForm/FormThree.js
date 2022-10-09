import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../../redux/postReducer/PostHorse";

const OtherInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const dispatch = useDispatch()
  const history = useNavigate()

  const handleSubmit = () => {


    console.log(formData);
    dispatch(add(formData))
    history('/horse')

    setFormData({
      NameEn: "",
      Age: "",
      NameAr: '',
      RaceCourse: '',
      Breeder: "",
      Remarks: "",
      ActiveTrainer: '',
      Trainer: '',
      Sex: "",
      Horses: '',
      Color: "",
      KindOfHorse: "",
      HorseRating: "",
      OverAllRating: ""



    });

  };


  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className=" container"
    >
      <div className="row container maincontainer">
        <div className="col-sm-12 col-md-6 ">
          <input
            type="text"
            placeholder="KindOfHorse"
            required
            className="form-group"
            onChange={(e) =>
              setFormData({ ...formData, KindOfHorse: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="HorseRating"
            required
            className="form-group"
            onChange={(e) =>
              setFormData({ ...formData, HorseRating: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="OverAllRating"
            required
            className="form-group"
            onChange={(e) =>
              setFormData({ ...formData, OverAllRating: e.target.value })
            }
          />




        </div>
      </div>
      <div className="container btnDivide">
        <button
          onClick={() => {
            setPage(page - 1);
            setX(-1000);
          }}
        >
          Previous
        </button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </motion.div>
  );
};

export default OtherInfo;
