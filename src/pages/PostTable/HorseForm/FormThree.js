import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../../redux/postReducer/PostHorse";

const OtherInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const dispatch = useDispatch()
  const history = useNavigate()

  const handleSubmit = () => {


<<<<<<< HEAD
    console.log(formData);
    dispatch(add(formData))
    history('/horse')
=======
    console.log(formData.Trainer);
    dispatch(add(formData))
    // history('/horse')
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281

    setFormData({
      NameEn: "",
      Age: "",
      NameAr: '',
      RaceCourse: '',
      Breeder: "",
      Remarks: "",
<<<<<<< HEAD
      ActiveTrainer: '',
=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
      Trainer: '',
      Sex: "",
      Horses: '',
      Color: "",
      KindOfHorse: "",
<<<<<<< HEAD
      HorseRating: "",
      OverAllRating: ""
=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281



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
<<<<<<< HEAD
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
=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281




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
