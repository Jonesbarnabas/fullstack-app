import axios from 'axios';
import React, { useState, useEffect ,useParams} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Adddrive() {

    let navigate=useNavigate()
    const [drive,setDrive] = useState({
        cmp_name:"",
        date:"",
        description:"",
        off_name:""
    })
  
     const [officer,setOfficer] = useState({
        rollno:"",
        name:"",
        date:"",
        comp_name:"",
        hr_name:"",
        hr_email:"",
        hr_phoneno:"",
        report:""
    })

    const{id}=useParams();

    useEffect(()=>{
        loadOfficer()
    },[]);

    const loadOfficer=async ()=>{
        const result=await axios.get(`http://localhost:8080/officer/${id}`)
        setOfficer(result.data);
    };

    const fetchDrive = async () => {
        try {
          const res = await axios.get(`http://localhost:8080/drive`);
          const fetchDrive = await res.json();
          setDrive(fetchDrive);
        } 
        catch (error) {
          console.log(error);
        }
      };
    const{cmp_name,date,description,off_name}=drive

    const onInputChange=(e)=>{
        setDrive({...drive,[e.target.name]:e.target.value});

    }

    const onSubmit=async(e)=> {
       e.preventDefault();
       await axios.post("http://localhost:8080/drive",drive)
       navigate("/Place_officer")
    };

  return (
    <div className="container">
        <div className="row" style={{marginBottom:'25px'}}>
        <div className="col-md-5 offset-md-4 border rounded mt-5 shadow" style={{background:'lightblue',height:'400px'}} >
                <h2 className="text-center m-4 ">Drive Date Details</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="cmp_name" className="text-align-right form-lable ">Company Name:</label><br/>
                        <input type={"text"} className="form" placeholder="Enter your company name"name="cmp_name"
                        value={cmp_name}
                        onChange={(e)=>onInputChange(e)}
                        />
                        <br></br>
                        <br></br>
                        <label htmlFor="date" className="form-lable">
                            Date: 
                        </label><br/>
                        <input type={"date"}
                        className="form"
                        placeholder="Enter your date"
                        name="date"
                        value={date}
                        onChange={(e)=>onInputChange(e)}
                        />
                        <br></br> 
                        <br></br> 
                        <label htmlFor="description" className="form-lable">
                        Description: 
                        </label><br/>
                        <input type={"description"}
                        className="form"
                        placeholder="Enter description"
                        name="description"
                        value={description}
                        onChange={(e)=>onInputChange(e)}
                        />
                        <br></br> 
                        <br></br> 
                        <label htmlFor="off_name" className="text-align-right form-lable ">Officer Name:</label><br/>
                        <input type={"text"} className="form" placeholder="Enter your company name"name="off_name"
                        value={cmp_name}
                        onChange={(e)=>onInputChange(e)}
                        />
                        <br></br>
                        <br></br>
                    </div>
                    <hr></hr>
                    <button type="submit" className="btn btn-outline-primary" to ="/Place_officer">Submit</button>
                      <Link className="btn btn-outline-danger mx-2" to = "/Place_officer">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
