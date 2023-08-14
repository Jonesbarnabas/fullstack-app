import axios from 'axios';
import React, { useEffect, useState } from 'react'

import{Link, useParams } from "react-router-dom";

export default function Dir_Login() {

  const[officer,setOfficer] = useState([]);

  useEffect(()=>{
    loadOfficer();
    const getofficer=async()=>{
      const res=await fetch('https://e201-223-182-244-152.ngrok-free.app/officer');
      const getofficer = await res.json();
      setOfficer(getofficer);
      console.log(getofficer);
    }
    getofficer();
  },[])



  const loadOfficer=async()=>{
    const result=await axios.get("https://e201-223-182-244-152.ngrok-free.app/officer");
    setOfficer(result.data);
  } 

  const deleteofficer=async(id)=>{
    await axios.delete(`https://e201-223-182-244-152.ngrok-free.app/officer/${id}`)
    loadOfficer()
  }
  return (
    <div className='container'>
      <br></br>
      <Link className='btn btn-success mx-2' to ="/D_search">search Report</Link>
      <div className='py-4'>
      <table className="table border shadow">
<thead>
  <tr>
    <th scope="col">S.No</th>
    <th scope="col">Roll No</th>
    <th scope="col">Name</th>
    <th scope="col">Date</th>
    <th scope="col">Company Name</th>
    <th scope="col">HR Name</th>
    <th scope="col">HR Email</th>
    <th scope="col">HR Phone No</th>
    <th scope="col">Report</th>
    <th scope="col">Action</th>

  </tr>
</thead>
<tbody>

  {
    officer.map((officer,index)=>(
      <tr>
      <th scope="row" key = {index}>{index+1}</th>
      <td>{officer.rollno}</td>
      <td>{officer.name}</td>
      <td>{officer.date}</td>
      <td>{officer.comp_name}</td>
      <td>{officer.hr_name}</td>
      <td>{officer.hr_email}</td>
      <td>{officer.hr_phoneno}</td>
      <td>{officer.report}</td>
      <td>
      <Link className="btn btn-primary mx-2"
            
            to={`/report1/${officer.id}`}
            >View</Link>

      </td>
     </tr>
    ))
  }
</tbody>
</table>
<div style={{display:'flex',justifyContent:'flex-end'}}>
<Link className='btn btn-danger' to ="/header" >Back</Link>
</div>
</div>
</div>
)
}
