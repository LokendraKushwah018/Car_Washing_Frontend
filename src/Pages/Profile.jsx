import { Card } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import BASE_URL from '../API/Config'
import Container from '../Component/Container'

const Profile = () => {
  const [getProfile, setgetProfile] = useState('')
  const [Email, setEmail] = useState('')
  const [Date, setDate] = useState('')


  const token = useSelector(state => state.admin.adminlogintoken)

  const profileDetail = () => {
    axios({
      url: `${BASE_URL}adminProfile`,
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response);
      setgetProfile(response.data.data.name)
      setEmail(response.data.data.email)
      setDate(response.data.data.createDate)

    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    profileDetail();
  }, [])

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Profile</title>
      </Helmet>
      <div className='page-wrapper'>
        <div className="page-header">
          <div className="container">
            <div className='card '>
              <div className="row align-items-center">
                <div className="col-auto">
                  <span className="avatar avatar-lg rounded" style={{ backgroundImage: 'url(./static/avatars/003m.jpg)' }} />
                </div>
                <div className="col">
                  <h1 className="fw-bold">{getProfile}</h1>
                  <div className="my-2"> {Email}
                  </div>
                  <div className="my-2">Created Date :- <b>{Date}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-xl">
            <div className="row ">
              <div className="col">                
                    <div className="card timeline-event-card">
                      <div className="card-body">
                        <label class="form-label  ">Name</label>
                        <input type="text" class="form-control mb-3" autocomplete="off" />
                        <label class="form-label ">Email</label>
                        <input type="text" class="form-control" autocomplete="off" />
                      </div>
                    </div>  
              </div>
              <div className="col-lg-4">
                <div className="row row-cards">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title">Basic info</div>
                        <div className="mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2}
                            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" />
                            <path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
                          Went to: <strong>University of Ljubljana</strong>
                        </div>
                        <div className="mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2}
                            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                            <path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>
                          Worked at: <strong>Devpulse</strong>
                        </div>
                        <div className="mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2}
                            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                          Lives in: <strong>Bangalore, India</strong>
                        </div>
                        <div className="mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2}
                            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 11m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                          From: <strong><span className="flag flag-country-in" />
                            India</strong>
                        </div>
                        <div className="mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2}
                            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M16 3l0 4" />
                            <path d="M8 3l0 4" /><path d="M4 11l16 0" /><path d="M11 15l1 0" /><path d="M12 15l0 3" /></svg>
                          Birth date: <strong>13/01/2001</strong>
                        </div>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2}
                            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7l0 5l3 3" /></svg>
                          Time zone: <strong>Europe/Ljubljana</strong>
                        </div>
                      </div>
                    </div>
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

export default Profile
