import React,{ useState} from 'react'
import '../../Components/CSS/RaceCourse.css'
import { useDispatch } from 'react-redux';
import Header from '../../Components/Common/Header';
import Sidebar from '../../Components/Common/Sidebar';
import { add } from '../../redux/postReducer/PostRaceCourse';
import { useNavigate } from "react-router-dom";
import {Country_Name} from '../../Data/Country.js'
import {Country_NameAr} from '../../Data/Country.js'

const RaceCourseForm = () => {
  const history = useNavigate()
  const dispatch = useDispatch()
  const [CountryAr , setCountryAr ] = useState(Country_NameAr)
  const [Country ,setCountry] = useState(Country_Name)
  const [registeration, setregisteration] = useState({
    TrackName: "",
    TrackNameAr: "",
    Country: "",
    CountryAr: "",
    TrackLength: "",
   
  });
  const [records, setrecords] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.Image);
    console.log(name, value);

    setregisteration({ ...registeration, [name]: value });
  };

  const handleSubmit = (e) => {
    if (!registeration) {
    } else {
      e.preventDefault();
      const newRecord = {
        ...registeration,
        id: new Date().getDate().toString(),
      };
      console.log(newRecord);
      setrecords([...records, newRecord]);
      dispatch(add(newRecord));
      history('/racecourse')
      
    }
  };
  const areAllFieldsFilled = (registeration !== '') 
 
  
  
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
       <div className="container maincontainer">
          <div className="row">
            <div className="col-sm-12">
            <form onSubmit={handleSubmit}>
    <div className="row mainContainer container jockeyContainer">
      <div className="col-sm-12 col-md-6">
        <input
          placeholder="Race Course Name"
          type="text"
          name="TrackName"
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-sm-12 col-md-6">
        <input
          placeholder="اسم دورة السباق"
          type="text"
          style={{ direction: "rtl" }}
          name="TrackNameAr"
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-sm-12 col-md-6">
        <select name="Country" className="county" onChange={handleChange} required>
          <option value="0" className="county">
           
            Select Country
          </option>
{
  Country.map((Country)=>(
          <option selected=""  className="county">
            {Country.country_name}
         
          </option>
          
    )) }   
</select>
      </div>

      <div className="col-sm-12 col-md-6">
        <select
          name="CountryAr"
          id="Country"
          className="county"
          style={{ direction: "rtl" }}
          onChange={handleChange}
          required
        >
          <option value="0">حدد الدولة</option>
          {
       CountryAr.map((item)=>(

       <option selected="" >
        {item.name}   
          </option>))}
       
        </select>
      </div>

      <div className="col-sm-12 col-md-6">
        <input
          type="text"
          placeholder="Track Length"
          name="TrackLength"
          onChange={handleChange}
          required  
        />  
      </div>

  

      
      

      <div className=" btnd">
        <button type="submit" disabled={!areAllFieldsFilled}>Submit </button>
      </div>
    </div>
  </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
   </>
    
  )
}

export default RaceCourseForm