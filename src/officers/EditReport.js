import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";

export default function EditReport() {

    let navigate = useNavigate();
    
    const {id}=useParams()

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

  const{rollno,name,date,comp_name,hr_name,hr_email,hr_phoneno,report}=officer

    const onInputChange=(e)=>{
        setOfficer({...officer,[e.target.name]:e.target.value});

    };

    useEffect(()=>{
        loadOfficer()
    },[]);

    const onSubmit=async(e)=> {
        e.preventDefault();
        await axios.put(`https://e201-223-182-244-152.ngrok-free.app/officer/${id}`,officer)
        navigate("/Place_officer")
    };

    const loadOfficer=async()=>{
        const result=await axios.get(`https://e201-223-182-244-152.ngrok-free.app/officer/${id}`)
        setOfficer(result.data)
    }
  return (
    <div className="container_2" >
        <div className="row" style={{marginTop:'5%',marginBottom:'50px'}}>
            <div className="col-md-5 offset-md-4 border rounded p-2 mt-2 shadow" style={{background:'lightblue'}}>
                <h2 className="text-center m-4 ">Edit Report</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                <label htmlFor="rollno" className="form-lable">
                    Id
                </label>
                <input
                 type={"text"}
                 className="form-control"
                 placeholder="Enter your id"
                 name="rollno"
                 value={rollno}
                 />
                 

                </div>
                <div className="mb-3">
                <label htmlFor="name" className="form-lable">
                    Name
                </label>
                <input
                 type={"text"}
                 className="form-control"
                 placeholder="Enter your name"
                 name="name"
                 value={name}
                 />

                </div><div className="mb-3">
                <label htmlFor="date" className="form-lable">
                    Date
                </label>
                <input
                 type={"date"}
                 className="form-control"
                 placeholder="Enter date"
                 name="date"
                 value={date}
                 onChange={(e)=>onInputChange(e)}
                 />

                </div><div className="mb-3">
                <label htmlFor="comp_name" className="form-lable">
                    Company Name
                </label>
                <input
                 type={"text"}
                 className="form-control"
                 placeholder="Enter Company Name"
                 name="comp_name"
                 value={comp_name}
                 onChange={(e)=>onInputChange(e)}
                 />

                </div><div className="mb-3">
                <label htmlFor="hr_name" className="form-lable">
                    HR Name
                </label>
                <input
                 type={"text"}
                 className="form-control"
                 placeholder="Enter HR Name"
                 name="hr_name"
                 value={hr_name}
                 onChange={(e)=>onInputChange(e)}
                 />

                </div><div className="mb-3">
                <label htmlFor="hr_email" className="form-lable">
                    HR Email
                </label>
                <input
                 type={"text"}
                 className="form-control"
                 placeholder="Enter HR Email"
                 name="hr_email"
                 value={hr_email}
                 onChange={(e)=>onInputChange(e)}
                 />

                </div><div className="mb-3">
                <label htmlFor="hr_phoneno" className="form-lable">
                    HR Phone NO
                </label>
                <input
                 type={"text"}
                 className="form-control"
                 placeholder="Enter HR Phone No"
                 name="hr_phoneno"
                 value={hr_phoneno}
                 onChange={(e)=>onInputChange(e)}
                 />

                </div><div className="mb-3">
                <label htmlFor="report" className="form-lable">
                    Report
                </label>
                <input
                 type={"text"}
                 className="form-control"
                 placeholder="Enter Report"
                 name="report"
                 value={report}
                 onChange={(e)=>onInputChange(e)}
                 />

                </div>
            <button type="submit" className="btn btn-outline-success" >Submit</button>
            
            <Link className="btn btn-outline-danger mx-2" to = "/Place_officer">Cancel</Link>
            </form>

            </div>
        </div>
    </div>
  )
}
