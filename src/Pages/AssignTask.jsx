import { Image } from 'antd'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import BASE_URL from '../API/Config'
import Container from '../Component/Container'
import { DownloadTableExcel } from 'react-export-table-to-excel';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const ServiceProviderToast = () => {
  toast.success("Assign task Successfully")
}

const AssignTask = () => {
  const [customerVehicle, setCustomerVehicle] = useState([])
  const [prodata, setProdata] = useState([])
  const [schdule , setSchdule] = useState('')
  const [user, setUser] = useState('')
  const [ID , setID] = useState('')
  const tableRef = useRef(null);


  const token = useSelector(state => state.admin.adminlogintoken)

  const Task = async () => {
    const data = await axios.get(`${BASE_URL}schedule_list`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    console.log(data.data.data)
    console.log(data);
    setCustomerVehicle(data.data.data)
    // setUser(data.data.data.user_id)
    // console.log(data.data.data[0].user_id)
    // setSchdule(data.data.data.id)
    // console.log(data.data.data[0].id)

  }


  const servicedata = async () => {
    const pro = await axios.get(`${BASE_URL}service_providers_list`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    console.log(pro.data.data);
    setProdata(pro.data.data)
    // setID(pro.data.data.id)
    console.log(pro.data.data.id)

  }

// const Assigntask = async() => {
//    
//   const task = await axios.post(`${BASE_URL}assignTask`, {
//     headers: {
//       "Authorization" : `Bearer ${token}`
//     },
//     data : {
//       "schedul_id": schdule,
//       "washer_id": ID,
//       "user_id": user
//     }
   
//   })
//   console.log(task)
// }

const Assigntask = (id, id2 , name ) => {
  console.log( "id" , id , "id2" , id2 )
  axios({
    url: `${BASE_URL}assignTask`,
    method: 'post',
    headers: {
      "Authorization": `Bearer ${token}`
    },
    data: {
      "schedul_id": id,
      "washer_id": id2
     
    }
  }).then((Response) => {
    console.log(Response.status);
    localStorage.setItem("name" , id2)
    // setUser(name)
     if(Response.status){
      ServiceProviderToast()
     }
  }).catch((error) => {
    console.log(error);
  })
}

  useEffect(() => {
     Task();
     servicedata();
    // Assigntask();

  }, [])

  return (
    <Container>
           <ToastContainer
    autoClose={1000}
    position="top-center"
    hideProgressBar
    className="toast-container"
    toastClassName="dark-toast"
    theme="colored"
    toastStyle={{ backgroundColor: '#1a48aa' }}
  />
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
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                <DownloadTableExcel
                                  filename="Customer Vehicle Description"
                                  sheet="Vehicle"
                                  currentTableRef={tableRef.current}
                                >
                                  <button className='btn ' style={{ backgroundColor: '#1a48aa', color: 'white' }}  ><i
                                    className="fa fa-download me-2" width="24" height="24" viewBox="0 0 24 24"
                                    strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"></i>Download </button>
                                </DownloadTableExcel>
                                {/* <DownloadTableExcel
                                  filename="Customer Vehicle Description"
                                  sheet="Vehicle"
                                  currentTableRef={tableRef.current}
                                >
                                  <button className="btn  d-sm-none btn-icon"   aria-label="Create new report" 
                                  style={{ backgroundColor: '#1a48aa', color: 'white' }}  ><i
                                    className="fa fa-download me-2"
                                    width="24" height="24" viewBox="0 0 24 24"
                  strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"></i></button>
                                </DownloadTableExcel>                 */}
             
              
                </div>
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Tasks</h3>
                  </div>
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap datatable" ref={tableRef}>
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
                          <th><span style={{marginLeft: '50px'}}>Action</span> </th>
                          <th/>
                          {/* <th> Download </th> */}
                        </tr>
                      </thead>
                      {customerVehicle.map((assign, index) => {
                        return (
                          <tbody key={index}>
                            <tr >
                              <td><span className="text-muted">{index + 1}</span></td>
                              <td>{assign.address}</td>
                              {/* <td>{assign.createDate}</td> */}
                              <td>{assign.schedule_date}</td>
                              <td>{assign.vehicle_type} </td>
                              <td>{assign.vehicle_title}</td>
                              <td><Image src={assign.image} width={50} height={50} /></td>
                              <td>{assign.vehicle_color}</td>
                              <td>{assign.vehicle_model}</td>
                              <td>{assign.license_num}</td>
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
                        <div className="select-container">
                                   <select className='btn ' onChange={(e) => Assigntask(e.target.value, assign.id , e.target.name )} 
                                   style={{ backgroundColor: '#1a48aa', color: 'white', maxWidth: 'auto' }} >
                                  <option>Choose Service Provider</option>
                                 {prodata.map((datas, index) => {
                                    return (                                   
                                      <option value={datas.id} /* onSelect={(e) => setUser(e.target.name)} */ name={datas.full_name} key={index}  
                                      className='bg-white text-dark' >
                                        {datas.full_name}
                                       </option>                                        
                                    ) 
                                  }                                     
                                  )}                                  
                                </select>
                                </div>
                              </td>
                              <td>                                             
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