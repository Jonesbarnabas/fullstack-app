import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import the Link component from React Router
import axios from 'axios';

export default function Po_search(props) {
  const [search, setSearch] = useState('');
  const [officerData, setOfficerData] = useState([]);

  useEffect(() => {
    const getOfficer = async () => {
      const res = await fetch('http://localhost:8080/officer');
      const officerData = await res.json();
      setOfficerData(officerData);
    };

    getOfficer();
  }, []);

  return (
    <div className='App'>
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
                return search === '' ? item : item.comp_name.toLowerCase().includes(search.toLowerCase());
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
        {/* Add some text or content inside the Link component */}
        <Link className="btn btn-danger" to={"/Place_officer"}>Back</Link>
      </Container>
    </div>
  );
}
