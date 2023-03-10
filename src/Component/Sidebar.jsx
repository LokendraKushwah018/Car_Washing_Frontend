import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { IconBellFilled , IconFileDescription, IconHome2, IconLogout } from '@tabler/icons-react';
import { IconUser } from '@tabler/icons-react';
import { IconZoomMoney } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { adminlogout } from '../Auth/AdminSlice';

const Sidebar = () => {
  const dispatch = useDispatch()
  const Navigate = useNavigate()


const LogOut = () => {

  dispatch(adminlogout())
  Navigate('/')
}

  return (
 <aside className="navbar navbar-vertical navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar-menu" aria-controls="sidebar-menu" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <h1 className="navbar-brand ">
      <Link to="#">
        <img src="BlueCarWash.png" width={150} height={150} alt="Tabler" /* className="navbar-brand-image" */  />
      </Link>
       {/* <h1>Gaadi<span style={{color: 'green'}}>scrub</span></h1> */}

       {/* For Understanding top right bottom left */}
    </h1><hr style={{marginBottom: '-0.5rem', marginTop: '-0.5rem'}} />
    <div className="navbar-nav flex-row d-lg-none">
      <div className="nav-item d-none d-lg-flex me-3">
        {/* <div className="btn-list">
          <a href="https://github.com/tabler/tabler" className="btn" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
            Source code
          </a>
          <a href="https://github.com/sponsors/codecalm" className="btn" target="_blank" rel="noreferrer">         
            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-pink" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
            Sponsor
          </a>
        </div> */}
      </div>
      {/* <div className="d-none d-lg-flex">
        <Link to="?theme=dark" className="nav-link px-0 hide-theme-dark" title="Enable dark mode" data-bs-toggle="tooltip" data-bs-placement="bottom">       
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
          fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
        </Link>
        <Link to="?theme=light" className="nav-link px-0 hide-theme-light" title="Enable light mode" data-bs-toggle="tooltip" data-bs-placement="bottom">        
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
          fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>
        </Link>
        <div className="nav-item dropdown d-none d-md-flex me-3">
          <a href="#" className="nav-link px-0" data-bs-toggle="dropdown" tabIndex={-1} aria-label="Show notifications">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} 
            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
            <span className="badge bg-red" />
          </a>
          <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Last updates</h3>
              </div>
              <div className="list-group list-group-flush list-group-hoverable">
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto"><span className="status-dot status-dot-animated bg-red d-block" /></div>
                    <div className="col text-truncate">
                      <a href="#" className="text-body d-block">Example 1</a>
                      <div className="d-block text-muted text-truncate mt-n1">
                        Change deprecated html tags to text decoration classes (#29604)
                      </div>
                    </div>
                    <div className="col-auto">
                      <a href="#" className="list-group-item-actions">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width={24} height={24} viewBox="0 0 24 24" 
                        strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z"
                         fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto"><span className="status-dot d-block" /></div>
                    <div className="col text-truncate">
                      <a href="#" className="text-body d-block">Example 2</a>
                      <div className="d-block text-muted text-truncate mt-n1">
                        justify-content:between ⇒ justify-content:space-between (#29734)
                      </div>
                    </div>
                    <div className="col-auto">
                      <a href="#" className="list-group-item-actions show">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon text-yellow" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2}
                        stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>           
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="nav-item dropdown">
        <Link  className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
          <span className="avatar avatar-sm" style={{backgroundImage: 'url(./static/avatars/000m.jpg)'}} />
          {/* <div className="d-none d-xl-block ps-2">
            <div>Car Washing</div>
            <div className="mt-1 small text-muted">Admin</div>
          </div> */}
        </Link>
        <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          {/* <Link to="#" className="dropdown-item">Status</Link> */}
          <Link to="/Profile" className="dropdown-item">Profile</Link>        
          <div className="dropdown-divider" style={{backgroundColor: '#1a48aa' }} />
          <Link to={LogOut} className="dropdown-item">Logout</Link>
        </div>
      </div>
    </div>
    <div className="collapse navbar-collapse" id="sidebar-menu">
      <ul className="navbar-nav pt-lg-3" style={{fontSize: '14px', fontWeight: 'bold'}}>
        <li className="nav-item">
          <Link className="nav-link" to="/Dashboard">
            <span className="nav-link-icon d-md-none d-lg-inline-block">
              <IconHome2 />
            </span>
            <span className="nav-link-title" >
            Manage Residents
            </span>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link " to="/Manageserviceproviders" >
            <span className="nav-link-icon d-md-none d-lg-inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-8 4.5" /></svg>
            </span>
            <span className="nav-link-title">
            Manage service providers
            </span>
          </Link>        
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AssignTask">
            <span className="nav-link-icon d-md-none d-lg-inline-block">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
              fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11l3 3l8 -8" />
              <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg> */}
              <i class='fas fa-tasks' style={{fontSize:'16px'}}></i>

            </span>
            <span className="nav-link-title">
            Manage & Assign tasks
            </span>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link " to="#" >
            <span className="nav-link-icon d-md-none d-lg-inline-block">
            <IconFileDescription />
            </span>
            <span className="nav-link-title">
            Manage Reports
            </span>
          </Link>        
        </li>
        <li className="nav-item  dropdown">
          <Link className="nav-link " to="#" >
            <span className="nav-link-icon d-md-none d-lg-inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
               fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
               <path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
               <path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
               <path d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>
            </span>
            <span className="nav-link-title">
            Manage Complaints
            </span>
          </Link>        
        </li>      
        <li className="nav-item dropdown">
        <Link className="nav-link " to="#" >
            <span className="nav-link-icon d-md-none d-lg-inline-block">
              <IconZoomMoney />
            </span>
            <span className="nav-link-title">
            Manage Payments
            </span>
          </Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link " to="#" >
            <span className="nav-link-icon d-md-none d-lg-inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
              fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M15 15l3.35 3.35" /><path d="M9 15l-3.35 3.35" /><path d="M5.65 5.65l3.35 3.35" />
              <path d="M18.35 5.65l-3.35 3.35" /></svg>
            </span>
            <span className="nav-link-title">
            Content Management system
            </span>
          </Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link " to="#" >
            <span className="nav-link-icon d-md-none d-lg-inline-block">
               <IconBellFilled />
            </span>
           
            <span className="nav-link-title">
            Push Notifications
            </span>
          </Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link " to="/Profile" >
            <span className="nav-link-icon d-md-none d-lg-inline-block">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
              fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M15 15l3.35 3.35" /><path d="M9 15l-3.35 3.35" /><path d="M5.65 5.65l3.35 3.35" />
              <path d="M18.35 5.65l-3.35 3.35" /></svg> */}
            <IconUser/>
            </span>
            <span className="nav-link-title">
            My Profile
            </span>
          </Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link " to={LogOut} >
            <span className="nav-link-icon d-md-none d-lg-inline-block">
            {/* <i class="fa fa-sign-out" /> */}
           
            <IconLogout/>
            </span>
            <span className="nav-link-title">
           LogOut
            </span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</aside>
  )
}

export default Sidebar













  

  
