import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

function Navbar() {
  return (
  <div className='fixed-top'>
    <div className='collapse' id='navbarToggleExternalContent'>
      <div className='bg-dark p-2 text-center d-flex flex-row justify-content-center flex-wrap'>
        <a className='text-white text-decoration-none ms-4' href='#main'>Home</a>
        <a className='text-white text-decoration-none ms-4' href='#whoIsThisGuy'>Who's this guy?</a>
        <a className='text-white text-decoration-none ms-4' href='#skills'>Skills</a>
        <a className='text-white text-decoration-none ms-4' href='#portfolio'>Portfolio</a>
        <a className='text-white text-decoration-none ms-4' href='#contactMe'>Certifications</a>
        <a className='text-white text-decoration-none ms-4' href='#contactMe'>Contact me</a>
      </div>
    </div>
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid'>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarToggleExternalContent' aria-controls='navbarToggleExternalContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
      </div>
    </nav>
  </div>
  )
}

export default Navbar