
import { Fragment ,useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/postReducer/PostHorse';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Select from 'react-select'
import {STATUSES} from '../../redux/getReducer/getHorseSlice'
    
const Verdict = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const { data: horse, status } = useSelector((state) => state.horse);
  
    // useEffect(() => {
    //   dispatch(fetchHorse());
    // }, [dispatch]);
    
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [map , setmap] = useState([]);


  console.log(map , "data")
    // const addTodo = id => {
    //   const newTodos = [...todos, { id }];
    //   setTodos(newTodos);
  
    // };
    
    
    let horseoptions = horse.map(function (item) {
      return {
        id:item._id,
        value: item.NameEn,
        label: item.NameEn,
        jockeyvalue: item.JockeyData.map((item) => item.Name),
      };
    });
    
   
    const handlesubmit = async event => {
      event.preventDefault()
      const formData = new FormData();
      formData.append("RaceKind", 'Flat');
      formData.append("raceName", 'Testing');
      formData.append("Description", 'Description');
      formData.append("DayNTime", 'DayNTime');
      formData.append("Weather", 'Weather');
      formData.append("RaceStatus", 'RaceStatus');
      formData.append("RaceCourse", '6348007b244c9900161902ec');
      formData.append("Horses",( selectedOption1.id))
      formData.append("Horses", selectedOption2.id)
      formData.append("Horses", selectedOption3.id)
 
      dispatch(add(formData));
    }

  const onClick = ()=>{


 const data =    <Tab eventKey="1" title="Verdict # 1"><div className="myselecthorse">
                <div className="myselecthorsedata">
                    <span>Gate #</span>
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
                    <span>{selectedOption1 === '' ? (
                        <p>N/A</p>
                      ) : (
                        <p>{selectedOption1.jockeyvalue[0]}</p>
                      )}</span>
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
                    <span>{selectedOption2 === '' ? (
                        <p>N/A</p>
                      ) : (
                        <p>{selectedOption2.jockeyvalue[0]}</p>
                      )}</span>
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
                    <span>{selectedOption3 === '' ? (
                        <p>N/A</p>
                      ) : (
                        <p>{selectedOption3.jockeyvalue[0]}</p>
                      )}</span>
                </div>
            
            
                <div className="sbmtbtn">
                  <button onClick={handlesubmit}>Save & Publish </button>
                </div>
            </div>
    
    </Tab>
    console.log(map.props)
    setmap(data)
    console.log(map.props)
    

}
  
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
    <Fragment>
             <div className="page">
             <div className="rightsidedata" >
    <div className="Header" style={{marginTop:"2px" , marginLeft:"12px"}}>
    <h4>Verdict Selection</h4>
    <button onClick={onClick}>Add Verdict</button>
  </div>
  
    <Tabs
    defaultActiveKey="1"
    id="justify-tab-example"
    className="mb-3"
 
  >

{
  map.length === 0 ? <>N/A</> :
  
  <Tab> 
  {
 
  map.map((item)=>(
  <h1>hello</h1>

  ))}

</Tab>
  
}


    <Tab eventKey="2" title="Verdict # 2"><div className="myselecthorse">
                <div className="myselecthorsedata">
                    <span>Gate #</span>
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
                    <span>{selectedOption1 === '' ? (
                        <p>N/A</p>
                      ) : (
                        <p>{selectedOption1.jockeyvalue[0]}</p>
                      )}</span>
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
                    <span>{selectedOption2 === '' ? (
                        <p>N/A</p>
                      ) : (
                        <p>{selectedOption2.jockeyvalue[0]}</p>
                      )}</span>
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
                    <span>{selectedOption3 === '' ? (
                        <p>N/A</p>
                      ) : (
                        <p>{selectedOption3.jockeyvalue[0]}</p>
                      )}</span>
                </div>
               
                <div className="sbmtbtn">
                  <button onClick={handlesubmit}>Save & Publish </button>
                </div>
            </div>
      
    </Tab>
    <Tab eventKey="3" title="Verdict # 3">
        <div className="myselecthorse">
                <div className="myselecthorsedata">
                    <span>Gate #</span>
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
                    <span>{selectedOption1 === '' ? (
                        <p>N/A</p>
                      ) : (
                        <p>{selectedOption1.jockeyvalue[0]}</p>
                      )}</span>
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
                    <span>{selectedOption2 === '' ? (
                        <p>N/A</p>
                      ) : (
                        <p>{selectedOption2.jockeyvalue[0]}</p>
                      )}</span>
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
                    <span>{selectedOption3 === '' ? (
                        <p>N/A</p>
                      ) : (
                        <p>{selectedOption3.jockeyvalue[0]}</p>
                      )}</span>
                </div>
            
            
                <div className="sbmtbtn">
                  <button onClick={handlesubmit}>Save & Publish </button>
                </div>
            </div>
  
    </Tab>
   
  </Tabs>
  
  </div>
  </div>
  </Fragment>
  
  )
}

export default Verdict