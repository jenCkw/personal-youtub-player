import { Routes, Route } from "react-router-dom";
import './App.css';
import React, { useEffect } from "react";
import {gapi} from 'gapi-script';
import Detailsvideo from './components/Detailsvideo';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Navbar from "./components/Navbar";
import Lastvideos from "./Lastvideos";

const Layout = ()=> {
  
  return (
    <>
      <Navbar />
      <div className="sidebar-lastvideo">
        <div className="lastvideo-sidebar">
          <Sidebar/>
        </div>
        <div className="lastvideo-list">
          <Lastvideos/>
        </div>
      </div>
    </>
  );
}
function App(){

  const idClient =
    "423778706232-cb737upob0v31h4is24dcc561eh5fuju.apps.googleusercontent.com";
    useEffect(() => {
      function start () {
        gapi.client.init({
          idClient: idClient,
          scope:"",
        })
       
      }
      gapi.load("client: auth2", start);
    })
  return (
    <div className="App">
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/lastVideo" element={<Layout/>} />
            <Route path="/detailsVideo" element={<Detailsvideo />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
  

export default App;
