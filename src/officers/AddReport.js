import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate, useEffect } from 'react-router-dom';

export default function AddReport() {

    let navigate=useNavigate()
    // const[officer1,setOfficer1] = useState([]);
    const [officer,setOfficer] = useState({
        // rollno:"",
        // name:"",
        date:"",
        comp_name:"",
        hr_name:"",
        hr_email:"",
        hr_phoneno:"",
        report:""
    })
    // useEffect(() => {
    
    //     fetchOfficers();
    //   }, []);
    const fetchOfficers = async () => {
        try {
          const res = await axios.get(`https://e201-223-182-244-152.ngrok-free.app/officer`);
          const fetchOfficers = await res.json();
          setOfficer(fetchOfficers);
        } catch (error) {
          console.log(error);
        }
      };
    const{date,comp_name,hr_name,hr_email,hr_phoneno,report}=officer

    const onInputChange=(e)=>{
        setOfficer({...officer,[e.target.name]:e.target.value});

    }

    const onSubmit=async(e)=> {
       e.preventDefault();
       await axios.post("https://e201-223-182-244-152.ngrok-free.app/officer",officer)
       navigate("/Place_officer")
    };

  return (
    <div className="container">
        <div className="row" style={{marginBottom:'50px'}}>
        <div className="col-md-5 offset-md-4 border rounded mt-5 shadow" style={{background:'lightblue',height:'600px'}} >
                <h2 className="text-center m-4 ">Register Report</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="rollno" className="text-align-right form-lable ">Id</label>
                        <input type={"text"} className="form" placeholder="Enter your id"name="rollno"
                        value={fetchOfficers.rollno}
                        onChange={(e)=>onInputChange(e)}
                        />
                        <br></br>
                        <br></br>
                        <label htmlFor="name" className="form-lable">
                            Name
                        </label>
                        <input type={"text"}
                        className="form"
                        placeholder="Enter your name"
                        name="name"
                        value={officer.name}
                        onChange={(e)=>onInputChange(e)}
                        />
                        <br></br>
                        <br></br>
                        <label htmlFor="date" className="form-lable">
                            Date
                        </label>
                        <input type={"date"}
                        className="form"
                        placeholder="Enter date"
                        name="date"
                        value={date}
                        onChange={(e)=>onInputChange(e)}
                        />
                        <br></br>
                        <br></br>
                        <label htmlFor="comp_name" className="form-lable">
                            Company Name  
                        </label>
                        <input type={"text"}
                        className="form"
                        placeholder="Enter company name"
                        name="comp_name"
                        value={comp_name}
                        onChange={(e)=>onInputChange(e)}
                        />
                        <br></br><br></br>
                        <label htmlFor="hr_name" className="form-lable">
                            HR Name
                        </label>
                        <input type={"text"}
                        className="form"
                        placeholder="Enter HR Name"
                        name="hr_name"
                        value={hr_name}
                        onChange={(e)=>onInputChange(e)}
                        />
                        <br></br><br></br>
                        <label htmlFor="hr_email" className="form-lable">
                            HR Email
                        </label>
                        <input type={"text"}
                        className="form"
                        placeholder="Enter HR mail"
                        name="hr_email"
                        value={hr_email}
                        onChange={(e)=>onInputChange(e)}
                        />
                        <br></br><br></br>
                        <label htmlFor="hr_phoneno" className="form-lable">
                            HR Phone no
                        </label>
                        <input type={"text"}
                        className="form"
                        placeholder="Enter your HR Phone No"
                        name="hr_phoneno"
                        value={hr_phoneno}
                        onChange={(e)=>onInputChange(e)}
                        />
                        <br></br><br></br>
                        <label htmlFor="report" className="form-lable">
                            Report
                        </label>
                        <input type={"text"}
                        className="form"
                        placeholder="Enter your Report"
                        name="report"
                        value={report}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary" to ="/Place_officer">Submit</button>
                      <Link className="btn btn-outline-danger mx-2" to = "/Place_officer">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
