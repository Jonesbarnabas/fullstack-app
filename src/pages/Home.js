import React, { useEffect, useState } from 'react';
import axios from 'axios';
import{Link, useParams } from "react-router-dom";

export default function Home() {

    const [users,setUsers]=useState([]);


    const{id} = useParams()
    const [drive,setDrive]=useState([]);


useEffect(()=>{
    loadDrive()
},[]);

const loadDrive= async ()=>{
    const result=await axios.get(`http://localhost:8080/drive1`)
    setDrive(result.data);
    console.log(result.data);
};

    useEffect(()=>{
      
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users")
        setUsers(result.data);
    };

    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers()
    }
    
  return (
    
    <div className='container' >
      <br></br>
      <Link className='btn btn-success mx-2' to ="/adduser">Add placement officer</Link>
      
      <Link className='btn btn-success mx-2' to ="/D_search">View Report</Link>
      
      <Link className='btn btn-success mx-2' to ="/drive">Drive Date</Link>
      

        <div className='py-4' style={{ textAlign: "center" }}>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user,index)=>(
    <tr>
      <th scope="row" key ={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
            <Link className="btn btn-primary mx-2"
            
            to={`/viewuser/${user.id}`}
            >View</Link>
            <Link className="btn btn-outline-primary mx-2"
            
            to={`/edituser/${user.id}`}
            >Edit</Link>
            <button className="btn btn-danger mx-2"
            
            onClick={()=>deleteUser(user.id)}
            >Delete</button>

      </td>
    </tr>
        ))
        
    }
    
   
  </tbody>
</table>
<div style={{display:'flex',justifyContent:'flex-end'}}>
<Link className='btn btn-danger' to ="/header" >Log Out</Link>
</div>
        </div>
        <div>
        <div style={{marginTop:"0"}}>
  <h4 style={{marginLeft:'10%' }}>UPCOMING DRIVES</h4>
  <marquee direction="right" style={{marginLeft:"30%"}} width="40%"><h1>Updated Drives</h1></marquee>
  
    <div className="text-animation" style={{ marginBottom: "30px", marginLeft: "30%", marginRight: "30%", background: "white" ,border: '3px solid red', borderTopLeftRadius: 25, borderTopRightRadius: 25, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
      <h1 style={{ textAlign: "center" }}>Drive Updates</h1>
      {drive.map((drive, index) => (
      <marquee behavior="scroll" direction="up" scrollamount="3" style={{marginLeft:"10%"}} width="90%" ><div key={index} >
       <p style={{marginLeft:"4%"}}>{drive.cmp_name}---{drive.description}---{drive.date}---{drive.description}</p>
      </div></marquee> 
      ))}
    </div>
  
  </div>
        </div>
    </div>
  )
}
