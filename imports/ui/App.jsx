import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginForm from './Login';
import RegistrationForm from './Register';
import BorrowerDashboard from './BorrowerDashboard';
import LenderDashboard from './LenderDashboard';



export const App = () => (
 <BrowserRouter>
 <Routes>
  <Route path="/login" element={<LoginForm/>}/>
  <Route path="/register" element={<RegistrationForm/>}/>
  <Route path="/borrower/:useremail" element={<BorrowerDashboard/>}/>
  <Route path="/lender" element={<LenderDashboard/>}/>
 
 </Routes>
 </BrowserRouter>
);
