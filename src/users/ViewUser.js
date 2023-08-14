import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ViewUser() {

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    });

    const{id}=useParams();

    useEffect(()=>{
        loadUsers()
    },[]);

    const loadUsers=async ()=>{
        const result=await axios.get(`https://e201-223-182-244-152.ngrok-free.app/user/${id}`)
        setUser(result.data);
    };



  return (

        <div className="container">
        <div className="row" style={{marginTop:'5rem'}}>
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{background:'lightblue',height:'350px'}}>
                <h2 className="text-center m-4 ">Placement officer details</h2>
                <div className="card">
                    <div className="card-header">
                        Details of Placement officer: 
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Id: </b>
                                 {user.name}
                            </li>
                            <li className="list-group-item">
                                <b>Name: </b>
                                 {user.username}
                            </li>
                            <li className="list-group-item">
                                <b>Email: </b>
                                 {user.email}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/Home"}>
                    Back
                </Link>
             </div>
        </div>
    </div>
  );
}
