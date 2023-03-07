import { Image } from 'antd'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import BASE_URL from '../API/Config'
import Container from '../Component/Container'
import { DownloadTableExcel } from 'react-export-table-to-excel';


const AssignTask = () => {
  const [customerVehicle, setCustomerVehicle] = useState([])
  const [prodata, setProdata] = useState([])
  const tableRef = useRef(null);          

  const token = useSelector(state => state.admin.adminlogintoken)

  const Task = async() => {
    const data = await axios.get(`${BASE_URL}schedule_list`,{
      headers: {
        "Authorization": `Bearer ${token}`        
      }     
    }) 
    console.log(data.data.data)
    console.log(data);
    setCustomerVehicle(data.data.data)
  }


  const servicedata = async() => {
    const pro = await axios.get(`${BASE_URL}service_providers_list`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    console.log(pro.data.data);
    setProdata(pro.data.data)
  }
  useEffect(()=> {
    Task();
    servicedata();
  },[])

  return (
    <Container>
    <Helmet>
       <meta charSet="utf-8" />
       <title>Assign Task</title>
      </Helmet>
    <div className="page-wrapper">
    <div className="page-header d-print-none">
          <div className="container-xl">
            <div className="row g-2 align-items-center">
              <div className="col">
                <h2 className="page-title">
                Manage & AssignTask
                </h2>
              </div>
              {/* <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                <button type="primary"  style={{backgroundColor: '#1a48aa' , color:'white'}} className="btn  d-none d-sm-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24"
                    strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                Add Service Provider
                </button>
               <button className="btn  d-sm-none btn-icon"   aria-label="Create new report" 
                style={{backgroundColor: '#1a48aa' , color:'white'}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24"
                  strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                </button>            
                </div>
              </div> */}
         <div className="col-12">
  <div className="card">
    <div className="card-header">
      <h3 className="card-title">Tasks</h3>
    </div>
    <div className="table-responsive">
      <table className="table card-table table-vcenter text-nowrap datatable">
        <thead>
          <tr> 
               
            <th className="w-1">S No. </th>
            <th>Location/Address</th>
            {/* <th>Create Date</th> */}
            <th>Schedule Date</th>
            <th>Vehicle Type</th>
            <th>Vehicle Title</th>
            <th>Vehicle Image</th>
            <th>Color</th>
            <th>Model</th>
            <th>License No.</th>
            {/* <th>Parking No.</th> */}           
            <th>Action </th>
            <th> Download </th> 
          </tr>
        </thead>
        {customerVehicle.map((assign , index)=> {
          return(
               <tbody key={index}>
          <tr ref={tableRef}> 
         
            <td><span className="text-muted">{index+1}</span></td>
            <td>{assign.address}</td>
            {/* <td>{assign.createDate}</td> */}
            <td>{assign.schedule_date}</td>
            <td>{assign.customer_vehilce.vehicle_type} </td>
            <td>{assign.customer_vehilce.vehicle_title}</td>
            <td><Image src={assign.customer_vehilce.image} width={50} height={50} /></td>
            <td>{assign.customer_vehilce.vehicle_color}</td>
            <td>{/*  <span className="badge bg-primary me-1" /> */}  {assign.customer_vehilce.vehicle_model}</td>
            <td>{assign.customer_vehilce.license_num}</td>
            {/* <td>{assign.customer_vehilce.parking_num}</td>          */}  
            <td className="text-end"> 
               {/* <span className="dropdown">
                <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" 
                data-bs-toggle="dropdown" style={{backgroundColor: '#1a48aa' , color:'white'}}  onClick={() => servicedata(assign)}>Assign To</button>
                 <div className="dropdown-menu dropdown-menu-end">
                {prodata.map((datas,index) => {
                  return (                   
                  <button key={index} className="dropdown-item" style={{color: '#1a48aa' }} >
                   {datas.fullName}
                  </button>         
               
                  )
                })} 
                </div>
              </span>  */}
              <select className='btn ' style={{backgroundColor: '#1a48aa', color: 'white', width: '160px  '}}>
                <option value='null' >Choose Provider</option>
               
                {prodata.map((datas,index) => {
                  return(
                <option value='data' className='bg-white text-dark'>{datas.fullName}</option>
               
                )
               
                })} 
               
              </select>
                </td>  
             <td className="text-end">
              {/* <span className="dropdown">
                <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" 
                data-bs-toggle="dropdown" style={{backgroundColor: '#1a48aa' , color:'white'}} >Actions</button>
                <div className="dropdown-menu dropdown-menu-end">
                               
                  <DownloadTableExcel className="btn dropdown-toggle align-text-top"
              filename="Customer Vehicle Description"
              sheet="Vehicle"
                currentTableRef={tableRef.current.id}
            >
              <button className="dropdown-item" style={{color: '#1a48aa'}}  ><i
                class="fa fa-download me-2"></i>Export</button>
            </DownloadTableExcel>
          
                </div>
              </span> */}
              
              <DownloadTableExcel 
              filename="Customer Vehicle Description"
              sheet="Vehicle"
              //  currentTableRef={tableRef.current.id}
            >
              <button className='btn ' style={{backgroundColor: '#1a48aa', color: 'white'}}  ><i
                className="fa fa-download me-2"></i>Export</button>
            </DownloadTableExcel>
           
            </td>  
        
          </tr>
        </tbody>
          )
        })}     
      </table>
    </div>
  </div>
</div>
        </div>
          </div>
        </div>
        </div>

    </Container>
  )
}

export default AssignTask
