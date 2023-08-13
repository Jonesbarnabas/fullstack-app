import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Report() {

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



  return (

        <div className="container">
            
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4 ">Report details</h2>
                <div className="card">
                    <div className="card-header">
                        Details of Report :
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Id: </b>
                                 {officer.rollno}
                            </li>
                            <li className="list-group-item">
                                <b>Name: </b>
                                 {officer.name}
                            </li>
                            <li className="list-group-item">
                                <b>Date: </b>
                                 {officer.date}
                            </li>
                             <li className="list-group-item">
                                <b>company Name: </b>
                                 {officer.comp_name}
                            </li>
                            <li className="list-group-item">
                                <b>HR Name: </b>
                                 {officer.hr_name}
                            </li>
                            <li className="list-group-item">
                                <b>HR Email: </b>
                                 {officer.hr_email}
                            </li>
                            <li className="list-group-item">
                                <b>HR Phone No: </b>
                                 {officer.hr_phoneno}
                            </li>
                            <li className="list-group-item">
                                <b>Report: </b>
                                 {officer.report}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/dir_report"}>
                    Back
                </Link>
             </div>
        </div>
    </div>
  );
}
