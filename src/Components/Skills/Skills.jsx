import React from 'react'
import styles from './Skills.module.css'


function Skills() {


  return (
    <div className={` ${styles.bgSkills}`} id='skills'>
      <div className='d-flex flex-column justify-content-center py-5 '>
        <h3 className={`display-4 text-center fw-bold ${styles.textStyle}`}>Skills</h3>
        <div className='d-flex flex-row py-1'>
          <h4 className='col-3 text-end me-2 fs-5 text-light fw-bold'>HTML</h4>
          <div className="progress col-7 mt-1">
            <div className="progress-bar w-100 bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='d-flex flex-row py-1'>
          <h4 className='col-3 text-end me-2 fs-5 text-light fw-bold'>CSS</h4>
          <div className="progress col-7 mt-1">
            <div className="progress-bar w-100 bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='d-flex flex-row py-1'>
          <h4 className='col-3 text-end me-2 fs-5 text-light fw-bold'>JavaScript</h4>
          <div className="progress col-7 mt-1">
            <div className="progress-bar w-100 bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='d-flex flex-row py-1'>
          <h4 className='col-3 text-end me-2 fs-5 text-light fw-bold'>Bootstrap</h4>
          <div className="progress col-7 mt-1">
            <div className="progress-bar w-100 bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='d-flex flex-row py-1'>
          <h4 className='col-3 text-end me-2 fs-5 text-light fw-bold'>JQuery</h4>
          <div className="progress col-7 mt-1">
            <div className="progress-bar w-75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='d-flex flex-row py-1'>
          <h4 className='col-3 text-end me-2 fs-5 text-light fw-bold'>SASS</h4>
          <div className="progress col-7 mt-1">
            <div className="progress-bar w-75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='d-flex flex-row py-1'>
          <h4 className='col-3 text-end me-2 fs-5 text-light fw-bold'>React JS</h4>
          <div className="progress col-7 mt-1">
            <div className="progress-bar w-75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='d-flex flex-row py-1'>
          <h4 className='col-3 text-end me-2 fs-5 text-light fw-bold'>MongoDB</h4>
          <div className="progress col-7 mt-1">
            <div className="progress-bar w-50 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='d-flex flex-row py-1'>
          <h4 className='col-3 text-end me-2 fs-5 text-light fw-bold'>Express JS</h4>
          <div className="progress col-7 mt-1">
            <div className="progress-bar w-50 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills