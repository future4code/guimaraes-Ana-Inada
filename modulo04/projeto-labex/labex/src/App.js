import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AdmHomePage from "./pages/AdminHomePage";
import AplicationFormPage from "./pages/ApplicationFormPage";
import HomePage from "./pages/HomePage";
import ListTripsPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import CreateTripPage from "./pages/CreateTripPage";


export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<HomePage/>} />
          <Route path='/trips/list'element={<ListTripsPage/>} />
          <Route path='/trips/application' element={<AplicationFormPage/>}/>
          
          <Route path='/login'element={<LoginPage/>} />
          <Route path ='/admin/trips/list' element={<AdmHomePage/> }/>
          <Route path='/admin/trips/create' element={<CreateTripPage/>}/>
          <Route path='/admin/trips/:id' element={<TripDetailsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

 
