import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminPrivateRoute = () => {
    const token = useSelector(state=> state.admin.adminlogintoken)
  return (
    <div>
      {token ? <Outlet/> : <Navigate to='/Dashboard' /> };
    </div>
  )
}

export default AdminPrivateRoute
