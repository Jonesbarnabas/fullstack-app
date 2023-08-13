import React from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { Link,useEffect, useState } from 'react';

export default function Dir_search() {
    const [search, setSearch] = useState('');
    const [officerData, setOfficerData] = useState([]);
  
    useEffect(() => {
      const getOfficer = async () => {
        const res = await fetch('http://localhost:8080/officer1');
        const officerData = await res.json();
        setOfficerData(officerData);
      }
       
      getOfficer();
    }, [])

//   const list=setOfficer
  return (
    <div style={{marginLeft:'auto',marginRight:'auto',width:'60%',marginTop:'5%'}}>

    <div className='App'>
        
        
        {/* <Container> */}
        
            <h1>Report</h1>

            <Form>
                <InputGroup className='my-3'>
                    <Form.Control onChange={(e)=>setSearch(e.target.value)} placeholder='search'/>
                </InputGroup> 
                
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
    <th scope="col">S.No</th>
    <th scope="col">Id</th>
    <th scope="col">Name</th>
    <th scope="col">Date</th>
    <th scope="col">Company Name</th>
    <th scope="col">Action</th>
                    </tr>

                </thead>
                <tbody>
                    {officerData.filter((item)=>{
                        return search===''
                        ? item
                        : item.rollno.includes(search);
                        
                    }).map((item,index)=>(
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.rollno}</td>
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>{item.comp_name}</td>
                            <td>
      {/* <Link className="btn btn-primary mx-2"
            
            to={`/report1/${item.id}`}
            >View</Link> */}

      </td>
                        </tr>
                    ))}
                    <tr>
                        
                    </tr>
                </tbody>
            </Table>
            
        {/* </Container> */}
        
        </div>
        {/*  */}
    </div>
  )
}
