import React, { useState,useEffect ,useRef} from "react";




import "../../Components/CSS/forms.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostJockey";

import swal from "sweetalert";

const NewsForm = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [NameEn,setNameEn] = useState('')
    const [NameAr,setNameAr] = useState('')
    const [Age,setAge] = useState('')
    const [ShortNameEn, setShortNameEn] =useState('')
    const [ShortNameAr,setShortNameAr] = useState('')
    const [Remarks , setRemarks] = useState('')
    const [DOB,setDOB] =useState('')
    const [JockeyLicenseDate ,setJockeyLicenseDate] = useState('')
const [Rating,setRating] =useState('')
const [MiniumumJockeyWeight ,setMiniumumJockeyWeight] =useState('')    
const [image,setImage] = useState()
    const [preview, setPreview] = useState()
    const submit = async event => {
      event.preventDefault()
     try {
        const formData = new FormData();
        formData.append("image", image)
        formData.append("NameEn", NameEn)
        formData.append("Age", Age)
        formData.append("ShortNameEn",ShortNameEn)
        formData.append("ShortNameAr",ShortNameAr)
        formData.append("NameAr" ,NameAr)
        formData.append("DOB",DOB ) 
        formData.append("MiniumumJockeyWeight",MiniumumJockeyWeight)
        formData.append("Rating",Rating)
        formData.append("JockeyLicenseDate",JockeyLicenseDate)
        
       await axios.post(`${window.env.API_URL}/uploadJockey`,formData);
        swal({
          title: "success!",
          text: 'Data Submitted !',
          icon: "success",
          button: "OK",
        });
        history('/jockey')
        
     } catch (error) {
      const err = error.response.data.message
      swal({
        title: "Error!",
        text: err,
        icon: "error",
        button: "OK",
      });
      
    }
    }
    const areAllFieldsFilled = (image !== undefined) && (Age !== "")
    useEffect(() => {
    
      if (!image) {
        setPreview(undefined)
        return
    }
      const objectUrl = URL.createObjectURL(image)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [image])
  
  const onSelectFile = e => {
  
      // I've kept this example simple by using the first image instead of multiple
      setImage(e.target.files[0])
    console.log(image,'image')
  
    }
    const ref = useRef()
  return (
   
    <>

    <div className="page">

    <div className="rightsidedata">
      <div
        style={{
          marginTop: "30px",
        }}
      >
              <div className='Headers'>


              Add Jockey



            </div>
            <div className='form'>
              <form onSubmit={submit}>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input placeholder=' Name' onChange={e => setNameEn(e.target.value)} name='Name' value={NameEn}

                      required
                    ></input><span className="spanForm"> |</span>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} placeholder="اسم " onChange={e => setNameAr(e.target.value)} value={NameAr}></input>

                  </div>

                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input placeholder='Age' onChange={e => setAge(e.target.value)} name='Name' value={Age}
                      required
                      type='number'
                    ></input><span className="spanForm"> |</span>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} type='number' placeholder="اسم المسار"></input>

                  </div>

                </div>
               
                <div className="row mainrow">
                  <div className="col-sm">
                    <input placeholder='Short Name ' onChange={e => setShortNameEn(e.target.value)} name='Name' value={ShortNameEn}
                      required
                      type='text'
                    ></input><span className="spanForm"> |</span>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} onChange={e => setShortNameAr(e.target.value)} type='text' value={ShortNameAr} placeholder="اسم قصير"></input>

                  </div>

                </div>

                 
                <div className="row mainrow">
                  <div className="col-sm">
                    <input placeholder='Remarks ' onChange={e => setRemarks(e.target.value)} name='Name' value={Remarks}
                      required
                      type='text'
                    ></input><span className="spanForm"> |</span>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} type='text' placeholder="اسم قصير"></input>

                  </div>

                </div>
              



                <div className="row mainrow">
                  <div className="col-sm">


<input
        type="text"
        ref={ref}
        onChange={e => setDOB(e.target.value) }
        onFocus={() => (ref.current.type = "date")}
        onBlur={() => (ref.current.type = "text")}
        value={DOB}
        placeholder="Date Of Birth"
      /> 
      
                      
                    <span className="spanForm"> |</span>

                  </div>

                  <div className="col-sm">
                  <input
        type="text"
        ref={ref}
        onChange={(e) => console.log(e.target.value)}
        onFocus={() => (ref.current.type = "date")}
        onBlur={() => (ref.current.type = "text")}
        placeholder="Date Of Birth"
      />    
                  </div>

                </div>
                
            
                <div className="row mainrow">
                  <div className="col-sm">
                  <input
        type="text"
        ref={ref}
        onChange={e => setJockeyLicenseDate(e.target.value)}
        onFocus={() => (ref.current.type = "date")}
        onBlur={() => (ref.current.type = "text")}
        value={JockeyLicenseDate}
        placeholder="Jockey Licence Date"
      /> 


             
                      
                    <span className="spanForm"> |</span>

                  </div>

                  <div className="col-sm">
                  <input
        type="text"
        ref={ref}
        onChange={(e) => console.log(e.target.value)}
        onFocus={() => (ref.current.type = "date")}
        onBlur={() => (ref.current.type = "text")}
        placeholder="Jockey Licence Date"
      />    
                  </div>

                </div>
       
                <div className="row mainrow">
                  <div className="col-sm">
                  <input
        type="number"
        
        onChange={e => setRating(e.target.value)}

        value={Rating}
        placeholder="Rating"
      /> 


             
                      
                    <span className="spanForm"> |</span>

                  </div>

                  <div className="col-sm">
                  <input
        type="number"
        style={{direction:"rtl"}}

        placeholder="تقييم"
      />    
                  </div>

                </div>
                
                <div className="row mainrow">
                  <div className="col-sm">
                  <input
        type="text"
        
        onChange={e => setMiniumumJockeyWeight(e.target.value)}

        value={MiniumumJockeyWeight}
        placeholder="Jockey Minimum Weight"
      /> 


             
                      
                    <span className="spanForm"> |</span>

                  </div>

                  <div className="col-sm">
                  <input
        type="number"
        style={{direction:"rtl"}}

        placeholder="الحد الأدنى لوزن الجوكي"
      />    
                  </div>

                </div>



                <div className='ButtonSection'>
                <div>
            <input type='file' onChange={onSelectFile} className="formInput"/>
            {image &&  <img src={preview}  alt="" className="PreviewImage" /> }
        </div>

                  <button type='submit' className='SubmitButton'>Add Race Course</button>

                </div>
              </form>
            </div>
          </div>


        </div>
      </div>

    </>
    
  );
};

export default NewsForm;
