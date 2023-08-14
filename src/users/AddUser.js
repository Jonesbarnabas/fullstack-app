import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {

    let navigate = useNavigate()

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })

    const {name,username,email}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});

    }

    const onSubmit=async(e)=> {
        e.preventDefault();
        await axios.post("https://e201-223-182-244-152.ngrok-free.app/user",user)
        navigate("/Home")
    };
  return (
    <div className="container">
        <div className="row" style={{marginTop:'5rem'}}>
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{background:'lightblue',height:'450px'}}>
                <h2 className="text-center m-4 ">Register Placement officer</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                <label htmlFor="Name" className="form-lable">
                    Id:
                </label>
                <input
                 type={"text"}
                 className="form-control"
                 placeholder="Enter your id"
                 name="name"
                 value={name}
                 onChange={(e)=>onInputChange(e)}
                 />
                 

                </div>
                <div className="mb-3">
                <label htmlFor="Username" className="form-lable">
                    Name:
                </label>
                <input
                 type={"text"}
                 className="form-control"
                 placeholder="Enter your username"
                 name="username"
                 value={username}
                 onChange={(e)=>onInputChange(e)}
                 />

                </div>
            <div className="mb-3">
                <label htmlFor="Email" className="form-lable">
                    Email:
                </label>
                <input
                 type={"text"}
                 className="form-control"
                 placeholder="Enter your e-mail id"
                 name="email"
                 value={email}
                 onChange={(e)=>onInputChange(e)}
                 />

            </div>
            <button type="submit" className="btn btn-outline-primary" to ="/Home">Submit</button>
            
            <Link className="btn btn-outline-danger mx-2" to = "/Home">Cancel</Link>
            </form>

            </div>
        </div>
    </div>
  )
}
