import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AccountType from './layouts/auth/AccountType';
import Login from './layouts/auth/Login';
import './App.css';
import Forgot from './layouts/auth/Forgot';
import Code from './layouts/auth/code';
import Reset from './layouts/auth/reset';
import ReceptionHome from './layouts/Reception/ReceptionHome';

function App() {
  return (
    <>
      <Router>
        <>
          <Routes>
            <Route exact path='/' element={<AccountType />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/Forgot' element={<Forgot />} />
            <Route exact path='/code' element={<Code />} />
            <Route exact path='/reset' element={<Reset />} />
            <Route exact path='/home' element={<ReceptionHome />} />





          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
