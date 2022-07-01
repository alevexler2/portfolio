import React from 'react';
import Avatar from '../../img/avatarale.png';
import 'animate.css'
import styles from '../Main/Main.module.css';

function Main() {
  return (
    <div className={`container-fluid `} id='main'>
      <div className='row align-items-center' style={{height: "93vh"}}>
        <div className={`col-12 text-center ${styles.bgMain} d-flex align-items-center justify-content-center`}>
          <div className='d-flex flex-column animate__animated animate__zoomIn'>
            <img src={Avatar} alt="avatar" className={`img-fluid ${styles.imgSizing} `} />
            <p className={`fw-bold display-4  ${styles.textStyle}`}>FullStack developer</p>
            <p className={`fw-bold display-4  ${styles.textStyle}`}>Stack MERN</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main