import React from 'react';
import "./App.css"
import Dashboard from './Components/Dashboard';
import Portal from './Components/portal';
import Login from './Components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateOrganisation from './Components/createOrganisation';
import CreateAdmin from './Components/createAdmin';


function App() {

  return (
    <>
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
      <Route path="/portal" element={<Portal/>}>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="createorganisation" element={<CreateOrganisation/>}/>
      <Route path="createadmin" element={<CreateAdmin/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
 
    </>
  );
}

export default App;