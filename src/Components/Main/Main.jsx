import React from 'react';
import Avatar from '../../img/avataaars.svg';
import 'animate.css';
import styles from '../Main/Main.module.css';

function Main() {
  return (
    <div className={`container-fluid ${styles.bgMain}`}>
      <div className='row align-items-center' style={{height: "93vh"}}>
      <div className='col-sm-12 col-lg-6 text-center '>
        <img src={Avatar} alt="avatar" />
      </div>
      <div className='col-sm-12 col-lg-6 text-center'>
        <p className={`fw-bold display-4 text-light animate__animated animate__lightSpeedInLeft ${styles.textShadow}`}>FullStack developer</p>
        <p className={`fw-bold display-4 text-light animate__animated animate__lightSpeedInRight ${styles.textShadow}`}>Stack MERN</p>
      </div>
      </div>
    </div>
  )
}

export default Main