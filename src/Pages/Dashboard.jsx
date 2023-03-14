import React, { useEffect, useState } from 'react'
import Container from '../Component/Container'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import BASE_URL from '../API/Config'
import { UserDataUpdate } from '../AdminAPI/Dashboard'
import {Helmet} from 'react-helmet'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Modal } from 'antd';

const deleteToast = () => {
  toast.success("Customer Data Deleted Successfully")
}

const CustomerUpdateToast = () => {
  toast.success("Customer Data Updated Successfully")
}

const CustomerAddedToast = () => {
  toast.success("Customer Data Added Successfully")
}


const Dashboard = () => {
  const [user, setUser] = useState([])
  // const [vehicles, setVehicles] = useState([])
  const [ID, setID] = useState([])
  const [fullName, setFullName] = useState("")
  const [Email, setEmail] = useState("")
  const [Number, setNumber] = useState("")
  const [Address, setAddress] = useState("")
  const [Wing, setWing] = useState("")
  const [Society, setSociety] = useState("")
  const [City, setCity] = useState("")
  const [State, setState] = useState("")
  const [Pincode, setPincode] = useState("")
  const [Date, setDate] = useState([])
  const [getupdatevalidate, setGetupdatevalidate] = useState([])
  // const [addUser,setAddUser] = useState({name: '' , email: '', number: '', address: '', wing: '', society: '', state:'', city: '' , pin: ''})
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = useSelector(state => state.admin.adminlogintoken);  

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };  

  const GetUserdata = () => {
    axios({
      url: `${BASE_URL}customers`,
      method: 'get',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data.data);
      setUser(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }

// const display = (e) => {
 
//   setAddUser({...addUser , [e.target.name]: e.target.value})

// }

//   const AddUserData = (e) => {
//     e.preventDefault();
//     axios({
//       url: `${BASE_URL}addResidents`,
//       method: 'POST',
//       headers : {
//         "Authorization" : `Bearer ${token}`
//     },
//     data: {
//       fullName : addUser.name,
//       email: addUser.email,
//       phoneNum: addUser.number,
//       address: addUser.address,
//       wing: addUser.wing,
//       society: addUser.society,
//       state: addUser.state,
//       city: addUser.city,
//       pincode: addUser.pin

//     }
//     }).then((response) => {
//       console.log(response);
//       setAddUser({name: '' , email: '', number: '', address: '', wing: '', society: '', state:'', city: '' , pin: ''});
//      GetUserdata();
      
//     }).catch((error) => {
//       console.log(error);
    
//     })
//   }

  // const GetUserVehicle = () => {
  //   axios({
  //     url: `${BASE_URL}vehicles`,
  //     method: 'GET',
  //     headers: {
  //       "Authorization": `Bearer ${token}`
  //     }
  //   }).then((res) => {
  //     console.log(res);
  //     setVehicles(res.data.data)
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }


  const GetUserDatabyID = (id) => {
    axios({
      url: `${BASE_URL}getCustomer/${id}`,
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data.data);
      setGetupdatevalidate(response.data.data);
      const article = response.data.data
      setFullName(article.fullName)
      setID(article.id)
      setEmail(article.email)
      setNumber(article.phone_num)
      setAddress(article.address)
      setWing(article.wing)
      setSociety(article.society)
      setCity(article.city)
      setState(article.state)
      setPincode(article.pincode)
      setDate(article.creatDate)
    }).catch((error) => {
      console.log(error);
    })
  }

  const UserUpdate = async (e) => {
    e.preventDefault();
    GetUserdata();
    const updateSubmit = {
      customerId: ID,
      fullName: fullName,
      email: Email,
      phone_num: Number,
      address: Address,
      wing: Wing,
      society: Society,
      state: State,
      city: City,
      pincode: Pincode
    }

    //   const Update = await UserDataUpdate( token , updateSubmit)
    //  console.log(Update);
    axios({
      url: `${BASE_URL}updateCustomer`,
      method: 'post',
      data: updateSubmit,
      headers: {
        "Authorization": `Bearer ${token}`
      }

    }).then((response) => {
      console.log(response);
      if(response.data.message === "Customer Updated Successfuly"){
        CustomerUpdateToast();
      }
    }).catch((error) => {
      console.log(error);
    
    })
    GetUserdata();
  }

  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    window.history.go(1);
  };

  useEffect(() => {
    GetUserdata();
    // GetUserVehicle();
  }, [])

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      // .min(10, 'mobile number should be 10 digit')
      // .max(15, 'max 15 digit mobile number')
      .email("Invalid email address format")
      .required('Please enter Email ID'),
      name: Yup.string()
      // .min(3, 'password should be minimum 3 character')
      // .max(6, 'password must be max 6 characters')
      .required('Please enter name'),
      number: Yup.string()
      .min(10, 'Mobile number should be 10 digit')
      .max(12, 'Mobile must be max 12 character')
      .required('Required'),
      address: Yup.string().required('Required'),
      wing: Yup.string()
      .min(4, 'Wing should be minimum 4 character')
      .required('Required'),
      society: Yup.string()
      .min(4, 'Society should be minimum 4 character')
      .required('Required'),
      city: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      pin: Yup.string()
      .min(6, 'Pincode should be 6 digit')
      .max(6, 'Pincode must be 6 characters')
      // .min(6, 'password should be minimum 3 character')
      .required('Required'),
  });

//   function handleCloseModal(e){
//     e.preventDefault()
//     document.getElementByAll(".modal-report").classList.remove("show");
   
// }

  // console.log(token);
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
       <title>Dashboard</title>
      </Helmet>
      <div className="page-wrapper">
        {/* Page header */}
        <div className="page-header d-print-none">
          <div className="container-xl">
            <div className="row g-2 align-items-center">
              <div className="col">
                {/* Page pre-title */}
                {/* <div className="page-pretitle">
              Overview
            </div> */}
                <h2 className="page-title">
                  Dashboard
                </h2>
                {/* <button>{data}</button> */}
              </div>
              {/* Page title actions */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list"> 
                <button  className="btn d-none d-sm-inline-block " onClick={showModal } style={{backgroundColor: '#1a48aa' , color:'white'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24"
                      strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                   Add New Customer
                  </button>
                  <button  className="btn  d-sm-none btn-icon" onClick={showModal } aria-label="Create new report" style={{backgroundColor: '#1a48aa' , color:'white'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24"
                      strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                  </button>
                  {/* <button  className="btn d-none d-sm-inline-block " data-bs-toggle="modal" data-bs-target="#modal-report" style={{backgroundColor: '#1a48aa' , color:'white'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24"
                      strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                   Add New Customer
                  </button>
                  <button  className="btn  d-sm-none btn-icon" data-bs-toggle="modal" data-bs-target="#modal-report" aria-label="Create new report" style={{backgroundColor: '#1a48aa' , color:'white'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24"
                      strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page body */}
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-deck row-cards">
              <div className="col-sm-6 col-lg-3 ">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">Sales</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <Link className="dropdown-toggle text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</Link>
                          <div className="dropdown-menu dropdown-menu-end">
                            <Link className="dropdown-item active" to="#">Last 7 days</Link>
                            <Link className="dropdown-item" to="#">Last 30 days</Link>
                            <Link className="dropdown-item" to="#">Last 3 months</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h1 mb-3">75%</div>
                    <div className="d-flex mb-2">
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">Revenue</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <Link className="dropdown-toggle text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</Link>
                          <div className="dropdown-menu dropdown-menu-end">
                            <Link className="dropdown-item active" to="#">Last 7 days</Link>
                            <Link className="dropdown-item" to="#">Last 30 days</Link>
                            <Link className="dropdown-item" to="#">Last 3 months</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 me-2">$4,300</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">New clients</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <Link className="dropdown-toggle text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</Link>
                          <div className="dropdown-menu dropdown-menu-end">
                            <Link className="dropdown-item active" to="#">Last 7 days</Link>
                            <Link className="dropdown-item" to="#">Last 30 days</Link>
                            <Link className="dropdown-item" to="#">Last 3 months</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-3 me-2">6,782</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">Active users</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <Link className="dropdown-toggle text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</Link>
                          <div className="dropdown-menu dropdown-menu-end">
                            <Link className="dropdown-item active" to="#">Last 7 days</Link>
                            <Link className="dropdown-item" to="#">Last 30 days</Link>
                            <Link className="dropdown-item" to="#">Last 3 months</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-3 me-2">2,986</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Table Start */}

              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Customer Data</h3>
                  </div>
                  {/* <div className="card-body border-bottom py-3">
                <div className="d-flex">
                  <div className="text-muted">
                    Show
                    <div className="mx-2 d-inline-block">
                      <input type="text" className="form-control form-control-sm" defaultValue={8} size={3} aria-label="Invoices count" />
                    </div>
                    entries
                  </div>
                  <div className="ms-auto text-muted">
                    Search:
                    <div className="ms-2 d-inline-block">
                      <input type="text" className="form-control form-control-sm" aria-label="Search invoice" />
                    </div>
                  </div>
                </div>
              </div> */}
                  <div className="table-responsive scrollit">
                    <table className="table card-table table-vcenter text-nowrap datatable">
                      <thead > 
                        <tr>                           
                          <th className="w-1">#
                          </th>
                          <th className="w-1">Customer Name</th>
                          {/* <th><span style={{ marginLeft: '25px' }}>Email</span></th>
                          <th>Phone No.</th> */}
                          <th className="w-1">Address</th>
                          {/* <th>Wing</th>
                          <th>Society</th>
                          <th>City</th>
                          <th>State</th>
                          <th>PinCode</th> */}
                          {/* <th><span style={{ marginLeft: '30px' }}>Create Date</span></th> */}
                         <th className="w-1"/>
                        </tr>
                      </thead>
                      {user.map((userdata, index) => {
                        return (
                          <tbody key={index}>
                            <tr>                           
                              <td><span className="text-muted">{index + 1}</span></td>
                              <td> {userdata.fullName === null ? <b>Null</b> :<div>{/* <span className="flag flag-country-in"/> */} {userdata.fullName} </div>}
                              <div>{userdata.email === null ? <b>Null</b> : <Link to="#" className="text-reset" tabindex="-1">{userdata.email}</Link>}</div>
                             <div> {userdata.phone_num === null ? <b>Null</b> : <span>{userdata.phone_num}</span>} </div></td>
                              <td>{userdata.address === null ? <b>Null</b> : <span> {userdata.address}</span>}
                             <div> {userdata.wing === null ? <b>Null</b> : <span>{userdata.wing}</span>}</div>
                              <div>{userdata.society === null ? <b>Null</b> : <span>{userdata.society}</span>}</div>
                              <div>{userdata.city === null ? <b>Null</b> : <span>{userdata.city}</span>} </div>
                              <div>{userdata.state === null ? <b>Null</b> : <span>{userdata.state} </span>}, 
                              {userdata.pincode === null ? <b>Null</b> : <span> {userdata.pincode}</span>}</div></td>
                              {/* <td>{userdata.creatDate === null ? <b>Null</b> : <span>{userdata.creatDate}</span>} </td> */}
                                 <td className="text-end">
                                <span className="dropdown">
                                  <button className="btn dropdown-toggle align-text-top " data-bs-boundary="viewport" 
                                  data-bs-toggle="dropdown" style={{backgroundColor: '#1a48aa' , color:'white'}}  >Actions</button>
                                  <div className="dropdown-menu dropdown-menu-end" >
                                    <button className="dropdown-item " to="#" onClick={() => GetUserDatabyID(userdata.id)} 
                                      style={{ color: '#1a48aa' }} data-bs-toggle="modal" data-bs-target="#modal-simple">
                                      Edit
                                    </button>
                                    <button className="dropdown-item" onClick={() => GetUserDatabyID(userdata.id)}  style={{ color: 'red' }} data-bs-toggle="modal" data-bs-target="#modal-danger">
                                      Delete
                                    </button>
                                  </div>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        )
                      })}
                    </table>
                  </div>
                </div>
              </div>
              {/* Customer Table End */}


              {/*Customer Vehicle Table Start */}

              {/* <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Customer Vehicles</h3>
                  </div>
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap datatable">
                      <thead>
                        <tr>
                          <th className="w-1">#
                          </th>
                          <th>Vehicle Type</th>
                          <th>Vehicle Title</th>
                          <th>Image</th>
                          <th>Model</th>
                          <th>Color</th>
                          <th>License No.</th>
                          <th>Parking No.</th>
                          <th><span style={{ marginLeft: '30px' }}>Create Date</span></th>
                          <th />
                        </tr>
                      </thead>
                      {vehicles.map((vehiclesData, index) => {
                        return (
                          <tbody key={index}>
                            <tr>
                              <td><span className="text-muted">{index + 1}</span></td>
                              <td> {vehiclesData.vehicle_type === null ? <b>Null</b> : <span>{vehiclesData.vehicle_type}</span>}</td>
                              <td>{vehiclesData.vehicle_title === "" ? <b>Null</b> : <span>{vehiclesData.vehicle_title}</span>}</td>
                              <td>{vehiclesData.image === null ? <b>Null</b> : <img src={vehiclesData.image} alt="..." />}</td>
                              <td>{vehiclesData.vehicle_model === null ? <b>Null</b> : <span> {vehiclesData.vehicle_model}</span>}</td>
                              <td>{vehiclesData.vehicle_color === null ? <b>Null</b> : <span>{vehiclesData.vehicle_color}</span>}</td>
                              <td>{vehiclesData.license_num === null ? <b>Null</b> : <span>{vehiclesData.license_num}</span>}</td>
                              <td>{vehiclesData.parking_num === null ? <b>Null</b> : <span>{vehiclesData.parking_num}</span>} </td>
                              <td>{vehiclesData.createDate === null ? <b>Null</b> : <span>{vehiclesData.createDate}</span>} </td>
                              <td className="text-end">
                                <span className="dropdown">
                                  <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <button className="dropdown-item " to="#" style={{ color: 'green' }}>
                                      Edit
                                    </button>
                                    <button className="dropdown-item" to="#" style={{ color: 'red' }} data-bs-toggle="modal" data-bs-target="#modal-small">
                                      Delete
                                    </button>
                                  </div>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        )
                      })}
                    </table>
                  </div>


                </div>
              </div> */}

              {/*Customer Vehicle Table End */}



            </div>
          </div>
        </div>

        {/* Add Customer Data Start */}
        <Modal title="Add New Customers" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}  width={800}>
        {/* <div className="modal modal-blur fade" id="modal-report" tabIndex={-1} role="dialog" aria-hidden="true"> */}
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              {/* <div className="modal-header">
                <h5 className="modal-title">Add New Customers</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  />
              </div>               */}
      <Formik
         initialValues={{
          name: '' , 
          email: '',
          number: '',
          address: '', 
          wing: '', 
          society: '', 
          state:'', 
          city: '' , 
          pin: ''
         
        }}
        
        validationSchema={SignupSchema}
        onSubmit={(value , { resetForm }) => {
          console.log(value.name);
          axios({
            url: `${BASE_URL}addResidents`,
            method: 'POST',
            headers : {
              "Authorization" : `Bearer ${token}`
          },
          data: {
            fullName : value.name,
            email: value.email,
            phone_num: value.number,
            address: value.address,
            wing: value.wing,
            society: value.society,
            state: value.state,
            city: value.city,
            pincode: value.pin
      
          }
          }).then((response) => {
            console.log(response);
            // console.log(response.data.status);
            // console.log(response.status);
            setIsModalOpen(false);
            if(response.status === 200){            
              CustomerAddedToast();             
              resetForm({ values: ''  });
            }
           GetUserdata();            
          }).catch((error) => {
            console.log(error);          
          })  
        }}
        >       
       {({ errors, touched }) => (
              <Form  noValidate > 
              <div className='row'>
              <div class="col-lg-6">
                <div className="m-2">  
                <label className="form-label" >User Name</label>
                  <Field type="text" className="form-control" name="name"  />
                </div>               
                {errors.name && touched.name ? (
                      <div className="" style={{ color: '#9D0305',fontSize:'14px', margin:'8px' }}>{errors.name}</div>
                    ) : null}
                     </div>
                     <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">Email</label>
                  <Field type="text" className="form-control" name="email" />
                </div>
                {errors.email && touched.email ? (
                      <div className="" style={{ color: '#9D0305',fontSize:'14px',margin:'8px' }}>{errors.email}</div>
                    ) : null}
                    </div>
                    <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">Phone No.</label>
                  <Field type="text" className="form-control" name="number" />
                </div>
                {errors.number && touched.number ? (
                      <div className="" style={{ color: '#9D0305',fontSize:'14px',margin:'8px' }}>{errors.number}</div>
                    ) : null}
                    </div>
                    <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">PinCode</label>
                  <Field type="text" className="form-control" name="pin" />
                </div>
                {errors.pin && touched.pin ? (
                      <div className="" style={{ color: '#9D0305',fontSize:'14px', margin:'8px' }}>{errors.pin}</div>
                    ) : null}
                    </div>
                    <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">Wing</label>
                  <Field type="text" className="form-control" name="wing" />
                </div>
                {errors.wing && touched.wing ? (
                      <div className="" style={{ color: '#9D0305',fontSize:'14px',margin:'8px' }}>{errors.wing}</div>
                    ) : null}
                    </div>
                    <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">Society</label>
                  <Field type="text" className="form-control" name="society"  />
                </div>
                {errors.society && touched.society ? (
                      <div className="" style={{ color: '#9D0305',fontSize:'14px',margin:'8px' }}>{errors.society}</div>
                    ) : null}
                    </div>
                    <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">City</label>
                  <Field type="text" className="form-control" name="city" />
                </div>
                {errors.city && touched.city ? (
                      <div className="" style={{ color: '#9D0305',fontSize:'14px',margin:'8px' }}>{errors.city}</div>
                    ) : null}
                    </div>
                    <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">State</label>
                  <Field type="text" className="form-control" name="state" />
                </div>
                {errors.state && touched.state ? (
                      <div className="" style={{ color: '#9D0305',fontSize:'14px',margin:'8px' }}>{errors.state}</div>
                    ) : null}
                    </div> 
                      </div>                  
                <div className="m-2">
                  <label className="form-label">Address</label>
                  <Field type="text" className="form-control" name="address" />
                </div>
                {errors.address && touched.address ? (
                      <div className="" style={{ color: '#9D0305',fontSize:'14px',margin:'8px' }}>{errors.address}</div>
                    ) : null}                    
                    <div class="d-grid gap-2 col-6 mx-auto">
                <div className="modal-footer ">
                  <button type="button" className="btn me-auto  text-light " onClick={handleCancel} style={{backgroundColor: '#1a48aa'}}>Close</button>
                  <button type="submit" className="btn me-auto text-light" style={{backgroundColor: '#1a48aa' }} > Add Customer </button>
                </div>
                </div>                
              </Form>
       )}
               </Formik>
            </div> 
            </div> 
          
    </Modal>
     {/* Add Customer Data End */}

        </div>


       

        {/*Edit Customer Table Modal Start */}
        <div className="modal modal-blur fade" id="modal-simple" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Customer Data </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form onSubmit={UserUpdate}>
              <div class="row">
              <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">User Name</label>
                  <input type="text" className="form-control" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">Email</label>
                  <input type="text" className="form-control" name="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">Phone No.</label>
                  <input type="text" className="form-control" name="Number" value={Number} onChange={(e) => setNumber(e.target.value)} />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" name="Address" value={Address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">Wing</label>
                  <input type="text" className="form-control" name="Wing" value={Wing} onChange={(e) => setWing(e.target.value)} />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">Society</label>
                  <input type="text" className="form-control" name="Society" value={Society} onChange={(e) => setSociety(e.target.value)} />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" name="City" value={City} onChange={(e) => setCity(e.target.value)} />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">State</label>
                  <input type="text" className="form-control" name="State" value={State} onChange={(e) => setState(e.target.value)} />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">PinCode</label>
                  <input type="text" className="form-control" name="Pincode" value={Pincode} onChange={(e) => setPincode(e.target.value)} />
                </div>
                </div>
                <div className="modal-footer">
                <div class="col-lg-6">
                  <button type="button" className="btn me-auto  w-50" data-bs-dismiss="modal"
                  style={{backgroundColor: '#1a48aa' , color:'white'}}>Close</button>
                  {getupdatevalidate.fullName === fullName && getupdatevalidate.email === Email && getupdatevalidate.phone_num === Number &&
                    getupdatevalidate.address === Address && getupdatevalidate.wing === Wing && getupdatevalidate.society === Society &&
                    getupdatevalidate.city === City && getupdatevalidate.state === State && getupdatevalidate.pincode === Pincode ?
                    <span className='not-allowed'><button type="submit" className="btn  w-50" disabled 
                    style={{backgroundColor: '#1a48aa' , color:'white'}} > Update </button></span>
                    :
                    <button type="submit" className="btn  w-50" data-bs-dismiss="modal" 
                    style={{backgroundColor: '#1a48aa' , color:'white'}} > Update </button>}
                </div>
              </div>
              </div></form>
            </div>
          </div>
        </div>
        {/*Edit Customer Table Modal End */}

        {/*Customer Table Delete Confirmation Modal Start */}
        <div className="modal modal-blur fade" id="modal-danger" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close" />
              <div className="modal-status " style={{backgroundColor: '#1a48aa' }}/>
              <div className="modal-body text-center py-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon mb-2  icon-lg" style={{color: '#1a48aa' }}
                 width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 9v2m0 4v.01" />
                  <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" /></svg>
                <h3>Are you sure?</h3>
                <div className="text-muted">Do you really want to remove this Customer Data? What you've done cannot be undone.</div>
              </div>
              <div className="modal-footer">
                <div className="w-100">
                  <div className="row">
                    <div className="col"><a href="#" className="btn w-100" data-bs-dismiss="modal" style={{backgroundColor: '#1a48aa' , color: 'white'}}>
                      Cancel
                    </a></div>
                    <div className="col"><button className="btn btn-danger w-100" data-bs-dismiss="modal" 
                    onClick={async() =>{
                      let userdelete = await axios.delete(`${BASE_URL}deleteResidents/${ID}`,{
                        headers: {
                          "Authorization": `Bearer ${token}`
                        }
                      })
                      console.log(userdelete);                     
                      console.log(userdelete.data.message);

                      if(userdelete.data.message === "One Resident Delete Successfully"){
                        deleteToast();
                      }
                       GetUserdata();
                    }
                   
                    }>
                      Delete
                    </button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Customer Table Delete Confirmation Modal End */}


        {/* Customer Vehicles Delete Confirmation Modal Start */}
        {/* <div className="modal modal-blur fade" id="modal-small" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="modal-title">Are you sure?</div>
                <div>If you proceed, you will lose this Customer Vehicle data.</div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-link link-secondary me-auto" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete Data</button>
              </div>
            </div>
          </div>
        </div> */}


        {/* Customer Vehicles Delete Confirmation Modal End */}
    
    </Container>
  )
}

export default Dashboard
