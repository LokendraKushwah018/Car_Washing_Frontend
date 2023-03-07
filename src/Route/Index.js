import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Adminlogin from '../Auth/Adminlogin'
import AdminPrivateRoute from '../Auth/AdminPrivateRoute'
import Profile from '../Pages/Profile'
import Manageserviceproviders from '../Pages/Manageserviceproviders'
import Dashboard from '../Pages/Dashboard'
import AssignTask from '../Pages/AssignTask'


const Index = () => {
  return (
    <div>
      <Routes>        
        <Route path='/' element={<Adminlogin />} />
        <Route element={<AdminPrivateRoute />} >
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Manageserviceproviders' element={<Manageserviceproviders />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/AssignTask' element={<AssignTask />}></Route>

        </Route>
      </Routes>
    </div>
  )
}

export default Index
