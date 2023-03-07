import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Container = ({children}) => {
  return (
    <div className="page">      
        <Sidebar />
        <Navbar />
      {children}
      <Footer/>
    </div>
  )
}

export default Container
