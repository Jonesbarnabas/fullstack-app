
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './homepage/Header';
import Home from './pages/Home';
import Dir_Report from './pages/Dir_Report';
import Place_officer from './pages/Place_officer';

import Po_search from './pages/Po_search';
import Dir_search from './pages/Dir_search';
import Report from './officers/Report';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AddUser from './users/AddUser';
import Adddrive from './Drive/Adddrive';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import AddReport from './officers/AddReport';
import EditReport from './officers/EditReport';
import ViewReport from './officers/ViewReport';
import Po_Login from './Po_login';
import Dir_Login from './Dir_Login';

export default function App() {
  return (

    <Router>
      <Routes>
        
        <Route exact path="/header" Component={Header}></Route>
        <Route exact path="/login" element={<Dir_Login/>}/>
      <Route exact path="/login2" element={<Po_Login/>}/>
      <Route exact path="/Home" element={<Home/>}/>
      
        <Route exact path="/Place_officer" element={<Place_officer/>}/>
        <Route exact path="/search" element={<Po_search/>}/>
        <Route exact path="/D_search" element={<Dir_search/>}/>
        <Route exact path="/addreport" element={<AddReport/>}/>
        
        <Route exact path="/dir_report" element={<Dir_Report/>}/>
        <Route exact path="/editreport/:id" element={<EditReport/>}/>
        
        <Route exact path="/report1/:id" element={<Report/>}/>

        <Route exact path="/viewreport/:id" element={<ViewReport/>}/>

        <Route exact path="/drive" element={<Adddrive/>}/>
        <Route exact path="/adduser" element={<AddUser/>}/>
        <Route exact path="/edituser/:id" element={<EditUser/>}/>
        
        <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
      </Routes>
    </Router>
  );
  }