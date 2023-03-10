import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='page-wrapper'>
<footer className="footer footer-transparent d-print-none">
  <div className="container-xl">
    <div className="row text-center align-items-center flex-row-reverse">
      <div className="col-lg-auto ms-lg-auto">
        {/* <ul className="list-inline list-inline-dots mb-0">
          <li className="list-inline-item"><Link href="#" className="link-secondary">Documentation</Link></li>
          <li className="list-inline-item"><Link href="#" className="link-secondary">License</Link></li>
          <li className="list-inline-item"><Link href="#" className="link-secondary">Source code</Link></li>
          <li className="list-inline-item">
            <Link  to="#" className="link-secondary" >
              <svg xmlns="#" className="icon text-pink icon-filled icon-inline" width={24} height={24} viewBox="0 0 24 24" 
              strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
              Sponsor
            </Link>
          </li>
        </ul> */}
      </div>
      <div className="col-12 col-lg-auto mt-3 mt-lg-0">
        <ul className="list-inline list-inline-dots mb-0">
          <li className="list-inline-item">
            Copyright © 2023
            <Link to="#" className="link-secondary"> Car Washing</Link>.
            All rights reserved.
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

</div>

  )
}

export default Footer
