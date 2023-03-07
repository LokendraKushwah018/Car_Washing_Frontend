import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BASE_URL from '../API/Config'
import Container from '../Component/Container'
import { Button, Image, Modal } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const deleteToast = () => {
  toast.success("Service Provider Data Deleted Successfully")
}

const ProviderUpdateToast = () => {
  toast.success("Service Provider Data Updated Successfully")
}

const ProviderAddedToast = () => {
  toast.success("Service Provider Data Added Successfully")
}


const Manageserviceproviders = () => {
  const [getdata, setGetdata] = useState([])
  // const [getBydata,setGetbydata] = useState({fullName: '', email: '', phoneNum: '', address: '',state: '', country: '', city: ''})
  const [id, setID] = useState([])
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNum, setNumber] = useState("")
  const [address, setAddress] = useState("")
  const [image, setImage] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [updateValidate, setUpdateValidate] = useState('')
  // const [Pincode, setPincode] = useState("")
  const [Date, setDate] = useState([])
  const token = useSelector(state => state.admin.adminlogintoken)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const GetProvider = () => {
    axios({
      url: `${BASE_URL}service_providers_list`,
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data.data);
      setGetdata(response.data.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  const GetbyIDProvider = ( id ) => {
    // e.preventDefault()
    axios({
      url: `${BASE_URL}service_providers_ById/${id}`,
      method: 'get',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then((response) =>{
      console.log(response);
      console.log(response.data.data);
      setUpdateValidate(response.data.data)
      const getarticle =response.data.data
      setID(getarticle.id)
      setFullName(getarticle.fullName)
      setEmail(getarticle.email)
      setNumber(getarticle.phoneNum)
      setAddress(getarticle.address)
      setState(getarticle.state)
      setCountry(getarticle.country)
      setCity(getarticle.city)
      setImage(getarticle.image)
      setDate(getarticle.createDate)


    })
  }

  const UpdateProvider = (e) => { 
     console.log(id);
    e.preventDefault()
    const formData = new FormData();
    formData.append("fullName",fullName)
    formData.append("email",email)
    formData.append("phoneNum",phoneNum)
    formData.append("address",address)
    formData.append("image",image)
    formData.append("country",country)
    formData.append("city",city)
    formData.append("state",state)
    formData.append("id",id)
    
    axios({
      url: `${BASE_URL}update_service_providers`,
      method: 'post',
      headers: {
        "Authorization": `Bearer ${token}`
      },
      data: formData,
    }).then((response) => {
      console.log(response.status);
      console.log(response.data.data);
      console.log(response.data);
     
      ProviderUpdateToast();
      GetProvider();
    }).catch((error) => {
      console.log(error);
    })
  }
  useEffect(() => {
    GetProvider();
  }, [])


  return (
 <Container >
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
       <title>Manage Service Providers</title>
      </Helmet>
    <div className="page-wrapper">
    <div className="page-header d-print-none">
          <div className="container-xl">
            <div className="row g-2 align-items-center">
              <div className="col">
                <h2 className="page-title">
                Manage Service Providers
                </h2>
              </div>
              {/* Page title actions */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                <button type="primary" onClick={showModal } style={{backgroundColor: '#1a48aa' , color:'white'}} className="btn  d-none d-sm-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24"
                    strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                Add Service Provider
                </button>
               <button className="btn  d-sm-none btn-icon" onClick={showModal }  aria-label="Create new report" 
                style={{backgroundColor: '#1a48aa' , color:'white'}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24"
                  strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                </button>
                  {/* <a href="#" className="btn  d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report" 
                  style={{backgroundColor: '#1a48aa' , color:'white'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24"
                      strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                    Add Service Provider
                  </a>
                  <a href="#" className="btn  d-sm-none btn-icon" data-bs-toggle="modal" data-bs-target="#modal-report" aria-label="Create new report"
                   style={{backgroundColor: '#1a48aa' , color:'white'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24"
                      strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
       
        {/* Create New Report Start */}

      <Modal title="Add New Service Providers" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}  width={700}>
     
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              {/* <div className="modal-header">
                <h5 className="modal-title">Add New Service Providers</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div> */}
              <form >
              <div className='row'>
              <div class="col-lg-6">
                <div className="m-1">
                  <label className="form-label">User Name</label>
                  <input type="text" className="form-control" name="fullName" />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-1">
                  <label className="form-label">Image</label>
                  <input type="file" className="form-control" name="Image" />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-1">
                  <label className="form-label">Registered Email ID</label>
                  <input type="text" className="form-control" name="Email" />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-1">
                  <label className="form-label">Contact Details</label>
                  <input type="number" className="form-control" name="number" />
                </div>
                </div>
                <div class="col-lg-12">
                <div className="m-1">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" name="Address" />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-1">
                  <label className="form-label">City & State</label>
                  <input type="text" className="form-control" name="city" />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-1">
                  <label className="form-label">Country</label>
                  <input type="text" className="form-control" name="country" />
                </div>
                </div>              
                </div>
                <div className="modal-footer m-2">
                  <button type="button" className="btn w-50 " onClick={handleCancel}
                  style={{backgroundColor: '#1a48aa' , color:'white'}}>Close</button>
                  <button type="submit" className="btn w-50" /* onClick={handleCancel} */
                  style={{backgroundColor: '#1a48aa' , color:'white'}} > Add </button>
                </div>
              </form>
            </div>
          </div>
       
      </Modal>
      
       {/* Create New Report End */}

        <div class="page-body">
          <div class="container-xl">
            <div class="row row-cards">
            <div class="col-lg-12">
                <div class="card">
                <div className="card-header">
                    <h3 className="card-title">Service Providers Data</h3>
                  </div>
                  <div class="table-responsive">
      <table className="table card-table table-vcenter text-nowrap datatable">
        <thead>
          <tr> 
            <th />         
            <th className="w-1">#</th>            
            <th> Name</th>
            <th>&nbsp;&nbsp;&nbsp; Image</th>
            <th><span style={{marginLeft: '50px'}}>Email ID</span></th>
            <th>Contact No.</th>
            <th>Address</th>
            <th>City </th>
            <th>State </th>
            <th>Country</th>
            <th>Create Date</th>            
            
          </tr>
        </thead>
        {getdata.map((data , index) => {
          return(
               <tbody key={index}>
          <tr>  
            <td className="text-end">
              <span className="dropdown">
                <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" 
                data-bs-toggle="dropdown" style={{backgroundColor: '#1a48aa' , color:'white'}} >Actions</button>
                <div className="dropdown-menu dropdown-menu-end">
                  <button className="dropdown-item " data-bs-toggle="modal" data-bs-target="#modal-simple" style={{color: '#1a48aa' }}
                  onClick={() => GetbyIDProvider(data.id)}>
                    Edit
                  </button>
                  <button className="dropdown-item text-red" onClick={() => GetbyIDProvider(data.id)}  data-bs-toggle="modal" data-bs-target="#modal-danger" >
                   Delete
                  </button>
                </div>
              </span>
            </td>        
            <td><span className="text-muted">{index+1}</span></td>
            <td>{data.fullName}</td>
            <td><Image src={data.image} alt='...' width={60} height={60}></Image></td>
            <td><Link className="text-reset" tabIndex={-1} >{data.email}</Link> </td>
            <td>{data.phoneNum} </td>
            <td> {data.address} </td>
            <td>{data.city}</td>
            <td>{data.state}</td>
            <td>{data.country}</td>
            <td>{data.createDate}</td>          
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
       
        {/* <div className="modal modal-blur fade" id="modal-report" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Service Providers</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <form >
                <div className="m-2">
                  <label className="form-label">User Name</label>
                  <input type="text" className="form-control" name="fullName" />
                </div>
                <div className="m-2">
                  <label className="form-label">Image</label>
                  <input type="file" className="form-control" name="Image" />
                </div>
                <div className="m-2">
                  <label className="form-label">Registered Email ID</label>
                  <input type="text" className="form-control" name="Email" />
                </div>
                <div className="m-2">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" name="Address" />
                </div>
                <div className="m-2">
                  <label className="form-label">City & State</label>
                  <input type="text" className="form-control" name="city" />
                </div>
                <div className="m-2">
                  <label className="form-label">Country</label>
                  <input type="text" className="form-control" name="country" />
                </div>
                <div className="m-2">
                  <label className="form-label">Contact Details</label>
                  <input type="number" className="form-control" name="number" />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn me-auto bg-dark text-light" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn bg-dark text-light" data-bs-dismiss="modal" > Update </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
       
</div>


     {/*Edit Customer Table Modal Start */}
     <div className="modal modal-blur fade" id="modal-simple" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Service Provider Data </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form onSubmit={UpdateProvider}>
              <div class="row">
              <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">User Name</label>
                  <input type="text" className="form-control" name="fullName"  value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">Email</label>
                  <input type="text" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">Phone No.</label>
                  <input type="text" className="form-control" name="phoneNum"  value={phoneNum} onChange={(e) => setNumber(e.target.value)}  />
                </div>
                </div>
                <div class="col-lg-6">
                   <div className="m-2">
                  <label className="form-label">Image</label>
                  <input type="file" className="form-control" name="image" onChange={(e) => setImage(e.target.files[0])}  />
                  <img src={image} alt="..." width={40} height={40}></img>
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" name="address"  value={address} onChange={(e) => setAddress(e.target.value)}  />
                </div> 
                </div>     
                <div class="col-lg-6">       
                <div className="m-2">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" name="city"  value={city} onChange={(e) => setCity(e.target.value)}  />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">State</label>
                  <input type="text" className="form-control" name="state"  value={state} onChange={(e) => setState(e.target.value)}  />
                </div>
                </div>
                <div class="col-lg-6">
                <div className="m-2">
                  <label className="form-label">Country</label>
                  <input type="text" className="form-control" name="country"  value={country} onChange={(e) => setCountry(e.target.value)}  />
                </div>
                </div>
                {/* <div className="m-2">
                  <label className="form-label">PinCode</label>
                  <input type="text" className="form-control" name="Pincode"  value={getBydata.pincode}  onChange={(e) => setGetbydata(e.target.value)} />
                </div> */} 
                <div className="modal-footer">
                <div class="col-lg-12 ">
                  <button type="button" className="btn me-auto text-white" data-bs-dismiss="modal" style={{backgroundColor: '#1a48aa' , width:'200px'}} >Close</button>                   
                  {updateValidate.fullName === fullName && updateValidate.email === email && updateValidate.phoneNum === phoneNum &&
                  updateValidate.image === image && updateValidate.address === address && updateValidate.city === city &&  
                  updateValidate.state === state &&  updateValidate.country === country ? <span className='not-allowed'><button className="btn me-auto text-white " 
                  style={{backgroundColor: '#1a48aa' ,width:'200px'}} disabled> Update </button> </span>: 
                  <button type="submit" className="btn me-auto text-white " 
                  style={{backgroundColor: '#1a48aa' ,width:'200px'}} > Update </button>}
                </div>
                </div>
               </div>
              </form>
            </div>
          </div>
        </div>
        {/*Edit Customer Table Modal End */}


              {/*Customer Table Delete Confirmation Modal Start */}
              <div className="modal modal-blur fade" id="modal-danger" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close" />
              <div className="modal-status " style={{backgroundColor: '#1a48aa'}}/>
              <div className="modal-body text-center py-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon mb-2 icon-lg" style={{color: '#1a48aa'}} width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 9v2m0 4v.01" /><path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" /></svg>
                <h3>Are you sure?</h3>
                <div className="text-muted">Do you really want to remove this Customer Data? What you've done cannot be undone.</div>
              </div>
              <div className="modal-footer">
                <div className="w-100">
                  <div className="row">
                    <div className="col"><a href="#" className="btn w-100" data-bs-dismiss="modal" style={{backgroundColor: '#1a48aa' ,color:'white'}}>
                      Cancel
                    </a></div>
                    <div className="col"><button className="btn btn-danger w-100" data-bs-dismiss="modal" 
                    onClick={async() =>{
                      let userdelete = await axios.delete(`${BASE_URL}delete_service_providers/${id}`,{
                        headers: {
                          "Authorization": `Bearer ${token}`
                        }
                      })
                      console.log(userdelete);  
                      deleteToast();                   
                      console.log(userdelete.data.message);

                      // if(userdelete.data.message === "One Resident Delete Successfully"){
                      //   deleteToast();
                      // }
                      GetProvider();
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
             
    </div>
 </Container>
  )
}

export default Manageserviceproviders
