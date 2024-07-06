import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const UserPublic = () => {
    const token = localStorage.getItem("Usertoken")
    return token ? <Navigate to={'/'} /> : <Outlet />
}
export default UserPublic

