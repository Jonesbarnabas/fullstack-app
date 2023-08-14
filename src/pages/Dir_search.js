import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import the Link component from React Router
import axios from 'axios';

export default function Dir_search(){
  const [search, setSearch] = useState('');
  const [officerData, setOfficerData] = useState([]);

  useEffect(() => {
    const getOfficer = async () => {
      const res = await fetch('https://e201-223-182-244-152.ngrok-free.app/officer1');
      const officerData = await res.json();
      setOfficerData(officerData);
    };

    getOfficer();
  }, []);

  return (
    <div className='App'  style={{marginTop:'5rem'}}>
      <Container>
        <h1>Report</h1>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='search' />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope='col'>S.No</th>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Date</th>
              <th scope='col'>Company Name</th>
              <th scope='col'>HR Name</th>
              <th scope='col'>HR Email</th>
              <th scope='col'>HR Phone No</th>
              <th scope='col'>Report</th>
            </tr>
          </thead>
          <tbody>
            {officerData
              .filter((item) => {
                return search === '' ? true : (item.name && item.name.toLowerCase().includes(search.toLowerCase()));
              })
              .map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.rollno}</td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.comp_name}</td>
                  <td>{item.hr_name}</td>
                  <td>{item.hr_email}</td>
                  <td>{item.hr_phoneno}</td>
                  <td>{item.report}</td>
                </tr>
              ))}
            <tr></tr>
          </tbody>
        </Table>
        {/* Add the correct import for Link and the back button */}
        <Link className="btn btn-danger" to={"/Home"}>Back</Link>
      </Container>
    </div>
  );
}
