import { Card } from 'antd'
import  axios  from 'axios'
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
          <span className="avatar avatar-lg rounded" style={{backgroundImage: 'url(./static/avatars/003m.jpg)'}} />
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
  {/* <div className="page-body">
  <div className="container-xl">
    <div className="row g-3">
      <div className="col">
        <ul className="timeline">
          <li className="timeline-event">
            <div className="timeline-event-icon bg-twitter-lt">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2}
               stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" /></svg>
            </div>
            <div className="card timeline-event-card">
              <div className="card-body">
                <div className="text-muted float-end">10 hrs ago</div>
                <h4>+1150 Followers</h4>
                <p className="text-muted">You’re getting more and more followers, keep it up!</p>
              </div>
            </div>
          </li>
          <li className="timeline-event">
            <div className="timeline-event-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} 
              stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>
            </div>
            <div className="card timeline-event-card">
              <div className="card-body">
                <div className="text-muted float-end">2 hrs ago</div>
                <h4>+3 New Products were added!</h4>
                <p className="text-muted">Congratulations!</p>
              </div>
            </div>
          </li>
          <li className="timeline-event">
            <div className="timeline-event-icon bg-facebook-lt">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} 
              stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
            </div>
            <div className="card timeline-event-card">
              <div className="card-body">
                <div className="text-muted float-end">1 day ago</div>
                <h4>+290 Page Likes</h4>
                <p className="text-muted">This is great, keep it up!</p>
              </div>
            </div>
          </li>
          <li className="timeline-event">
            <div className="timeline-event-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} 
              stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 11h6m-3 -3v6" /></svg>
            </div>
            <div className="card timeline-event-card">
              <div className="card-body">
                <div className="text-muted float-end">2 days ago</div>
                <h4>+3 Friend Requests</h4>
                <div className="avatar-list mt-3">
                  <span className="avatar" style={{backgroundImage: 'url(./static/avatars/000m.jpg)'}}>
                    <span className="badge bg-success" /></span>
                  <span className="avatar">
                    <span className="badge bg-success" />JL</span>
                  <span className="avatar" style={{backgroundImage: 'url(./static/avatars/002m.jpg)'}}>
                    <span className="badge bg-success" /></span>
                </div>
              </div>
            </div>
          </li>
        </ul>
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
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">About Me</h2>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid beatae eaque eius
                    esse fugit, hic id illo itaque modi molestias nemo perferendis quae rerum soluta. Blanditiis
                    laborum minima molestiae molestias nemo nesciunt nisi pariatur quae sapiente ut. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

</div>

    </Container>
  )
}

export default Profile
