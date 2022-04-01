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
          <Route path='lista_de_viagens'element={<ListTripsPage/>} />
          <Route path='lista_de_viagens/inscrever_se' element={<AplicationFormPage/>}/>
          
          <Route path='login'element={<LoginPage/>} />
          <Route path ='login/pagina_administrativa' element={<AdmHomePage/> }/>
          <Route path='login/pagina_administrativa/criar_viagem' element={<CreateTripPage/>}/>
          <Route path='login/pagina_administrativa/detalhes_da_viagem' element={<TripDetailsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

 
