import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='admin' element={<AdminHomePage/>}/>
        <Route path='application' element={<ApplicationFormPage/>}/>
        <Route path='create' element={<CreateTripPage/>}/>
        <Route path='list' element={<ListTripsPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='details/:tripId' element={<TripDetailsPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router