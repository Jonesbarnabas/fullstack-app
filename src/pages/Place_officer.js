import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './TextAnimation.css';

// import {data } from './data';

import{Link, useParams } from "react-router-dom";

export default function Place_officer() {
  const[officer,setOfficer] = useState([]);

  useEffect(()=>{
    loadOfficer();
  },[]);

  const [drive,setDrive]=useState([]);


useEffect(()=>{
    loadDrive()
},[]);

const loadDrive= async ()=>{
    const result=await axios.get(`http://localhost:8080/drive1`)
    setDrive(result.data);
    console.log(result.data);
};

  const loadOfficer=async()=>{
    const result=await axios.get("http://localhost:8080/officer");
    setOfficer(result.data);
  } 

  const deleteofficer=async(id)=>{
    await axios.delete(`http://localhost:8080/officer/${id}`)
    loadOfficer()
  }
  return (
    <body>
    <div className='place_off_container' style={{marginTop:'3rem'}} ><h1 style={{textAlign:'center'}} >Welcome Officer</h1>
      
    <div className='container' style={{marginLeft:'19%',marginRight:'0',width:'75%'}}>
      <br></br>
      <Link className='btn btn-success mx-2' to ="/addreport">Add Report</Link>
      <Link className='btn btn-success mx-2' to ="/search">search Report</Link>
      <Link className='btn btn-success mx-2' to ="/drive">Update Drive Date</Link>
      <Link className='btn btn-danger' to ="/header" style={{marginLeft:'45rem'}} >Log Out</Link>
      </div>
      <div className='py-4' style={{ width:'60%',marginLeft:'Auto',marginRight:'Auto',}}>
      <table className="table border shadow" style={{border:'hsl(170, 100%, 50%)'}}>
<thead >
  <tr  style={{textAlign: "center",backgroundColor:'red'}}>
    <th scope="col">S.No</th>
    <th scope="col">Id</th>
    <th scope="col">Name</th>
    <th scope="col">Date</th>
    <th scope="col">Company Name</th>
    <th scope="col">Options</th>
 
  </tr>
</thead>
<tbody style={{textAlign: "center"}}>

  {
    
    officer.map((officer,index)=>(
      <tr>
      <th scope="row" key = {index}>{index+1}</th>
      <td>{officer.rollno}</td>
      <td>{officer.name}</td>
      <td>{officer.date}</td>
      <td>{officer.comp_name}</td>
      <td>
        
      <Link className="btn btn-primary mx-2"
            
            to={`/viewreport/${officer.id}`}
            >View</Link>

            <Link className="btn btn-outline-primary mx-2"
            to={`/editreport/${officer.id}`}
            >Edit</Link>
            
            <button className="btn btn-danger mx-2"
            onClick={()=>deleteofficer(officer.id)}
            >Delete</button>

      </td>
     </tr>
     
    ))
  }
</tbody>
</table>

<div style={{display:'flex',justifyContent:'flex-end'}}>


</div>
</div>
<div style={{marginTop:"0"}}>
  <h4 style={{marginLeft:'10%' }}>UPCOMING DRIVES</h4>
  <marquee direction="right" style={{marginLeft:"30%"}} width="40%"><h1>Updated Drives</h1></marquee>
  
    <div className="text-animation" style={{ marginBottom: "30px", marginLeft: "30%", marginRight: "30%", background: "white" ,border: '3px solid red', borderTopLeftRadius: 25, borderTopRightRadius: 25, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
      <h1 style={{ textAlign: "center" }}>Drive Updates</h1>
      <marquee behavior="scroll" direction="up" scrollamount="3" style={{marginLeft:"10%"}} width="90%" > {drive.map((drive, index) => (
     <div key={index} >
       <p style={{marginLeft:"4%"}}>{drive.cmp_name}---{drive.description}---{drive.date}---{drive.description}</p>
      </div>
      ))}</marquee> 
    </div>
  
  </div>
</div>
</body>
)
}
