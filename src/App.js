import React,{useState} from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import { Navi } from './component/Navi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './page/Login'
import { Register } from './page/Register';
import data from './data/tutorData.json'
import Tutor  from './page/Tutor';
function App() {
  const tutorData = JSON.parse(JSON.stringify(data.initialTutorData))
  return (
      <BrowserRouter>
      <Navi/>
        <Routes >
              <Route index element={<Home tutorData={tutorData}/>}/>
              <Route path='/teacher/login' element={<Login userData={""}/>}/>
              <Route path='/student/login' element={<Login userData={""}/>}/>
              <Route path='/student/register' element={<Register userData={""}/>}/>
              <Route path='/student/register' element={<Register userData={""}/>}/>
              <Route path='/tutor' element={<Tutor tutorData={tutorData}/>}/>
             
        </Routes>
    </BrowserRouter>
  );
}

export default App;
