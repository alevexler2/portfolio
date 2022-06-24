import React from 'react';
import styles from './Portfolio.module.css';


function Portfolio() {
  return (
    <div>
      <div className='d-flex flex-row justify-content-center'>
        <div>
          <img src="https://conceptodefinicion.de/wp-content/uploads/2014/03/codigo-.jpg" alt="" className={`my-4 ${styles.imageSize}`}/>
        </div>
      </div>
    </div>
  )
}

export default Portfolio