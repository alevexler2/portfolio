import React from 'react'
import styles from './Skills.module.css'

function Skills() {
  return (
    <div className={`container-fluid ${styles.bgSkills}`}>
      <h2 className={`display-4 text-center fw-bold ${styles.textStyle}`}>Skills</h2>
      <div className='row'>
          <h4 className='col-3 text-end me-3 text-light fw-bold'>HTML</h4>
          <div class="progress col-7 mt-2">
            <div class="progress-bar w-75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className='col-3 text-end me-3 text-light fw-bold'>CSS</h4>
          <div class="progress col-7 mt-2">
            <div class="progress-bar w-75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className='col-3 text-end me-3 text-light fw-bold'>JavaScript</h4>
          <div class="progress col-7 mt-2">
            <div class="progress-bar w-75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className='col-3 text-end me-3 text-light fw-bold'>Bootstrap</h4>
          <div class="progress col-7 mt-2">
            <div class="progress-bar w-75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className='col-3 text-end me-3 text-light fw-bold'>React js</h4>
          <div class="progress col-7 mt-2">
            <div class="progress-bar w-75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className='col-3 text-end me-3 text-light fw-bold'>MongoDB</h4>
          <div class="progress col-7 mt-2">
            <div class="progress-bar w-75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className='col-3 text-end me-3 text-light fw-bold'>ExpressJs</h4>
          <div class="progress col-7 mt-2">
            <div class="progress-bar w-75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className='col-3 text-end me-3 text-light fw-bold'>Sass</h4>
          <div class="progress col-7 mt-2">
            <div class="progress-bar w-75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className='col-3 text-end me-3 text-light fw-bold'>JQuery</h4>
          <div class="progress col-7 mt-2 mb-5">
            <div class="progress-bar w-75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
      </div>
    </div>
  )
}

export default Skills