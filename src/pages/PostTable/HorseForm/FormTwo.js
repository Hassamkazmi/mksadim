import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchTrainer } from '../../../redux/getReducer/getTrainerSlice'
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const LocationInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const dispatch = useDispatch()
  const { data: trainer, status } = useSelector((state) => state.trainer);

  useEffect(() => {

    dispatch(fetchTrainer())
<<<<<<< HEAD
=======
   
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
  }, [])
  const handleNext = () => {




<<<<<<< HEAD
    if (formData.Breeder && formData.ActiveTrainer && formData.Remarks && formData.Sex && formData.Color !== "") {
=======
    if (formData.Breeder && formData.Trainer && formData.Remarks && formData.Sex && formData.Color !== "") {
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
      setPage(page + 1);
      setX(1000);
    }



    else {
      toast.error("Please fill the field");

    }
  }

  console.log('trainer', trainer)
<<<<<<< HEAD
=======

>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className=" container"
    >
      <div className="row container maincontainer">

        <div className="col-sm-12 col-md-6 formMain">
          <input
            type="text"
            placeholder="Breeder"
            required
            className="form-group"
            value={formData.Breeder}
            onChange={(e) => setFormData({ ...formData, Breeder: e.target.value })}
          />
          <select name="Country" className="county" onChange={(e) =>
            setFormData({ ...formData, Trainer: e.target.value })
          } required>
            <option value="0" className="county">

              Select Trainer
            </option>
            {
<<<<<<< HEAD
              trainer.map((Country) => (
                <option selected="" className="county" value={Country._id}>
                  {Country.Name}

                </option>

              ))}

          </select>
          <select name="Country" className="county" onChange={(e) =>
            setFormData({ ...formData, ActiveTrainer: e.target.value })
          } required>
            <option value="0" className="county">

              Select Active Trainer
            </option>
            {
              trainer.map((Country) => (
                <option selected="" className="county" value={Country._id}>
                  {Country.Name}
=======
              trainer.map((TrainerData) => (
                <option selected="" className="county" value={TrainerData} >
                  {TrainerData.Name}
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281

                </option>

              ))}

          </select>
          <input
            type="text"
            className="form-group"
            placeholder="Remarks"
            required

            onChange={(e) =>
              setFormData({ ...formData, Remarks: e.target.value })
            }
          />
          <input
            type="text"
            className="form-group"
            placeholder="Sex"
            required

            onChange={(e) =>
              setFormData({ ...formData, Sex: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Color"
            required
            className="form-group"
            value={formData.Color}
            onChange={(e) =>
              setFormData({ ...formData, Color: e.target.value })
            }
          />
        </div>

      </div>

      <div className="btnDivide container">
        <button
          onClick={() => {
            setPage(page - 1);
            setX(-1000);
          }}
        >
          Previous
        </button>

        <button onClick={handleNext}>Next</button>
      </div>
    </motion.div>
  );
};

export default LocationInfo;
