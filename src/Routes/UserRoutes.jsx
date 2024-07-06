import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import SignUpPage from '../Pages/SignUpPage/SignUpPage';
import ProtectRoutes from './ProtectRoutes/UserProtect';
import UserPublic from './PublicRoutes/UserPublic';

function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectRoutes />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/login" element={<UserPublic />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="/signup" element={<UserPublic />}>
          <Route index element={<SignUpPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default UserRoutes
