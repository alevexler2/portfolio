import React from 'react'
import styles from './WhoIsThisGuy.module.css'

function WhoIsThisGuy() {
  return (
    <div className={styles.bgImg}>
      <div className='container-fluid'>
        <div className='row justify-content-end'>
          <div className='col-sm-12 col-lg-6 text-center mt-4'>
            <h2 className={`display-5 fw-bold mt-4 ${styles.textColor}`}>WHO`S THIS GUY?</h2>
            <hr />
            <div className={`card ${styles.cardBg}`}>
              <div className='card-body'>
                <h4 className={`cardt-title mb-2 ${styles.textColor}`}>My name is Alejandro</h4>
                <p className={`card-text fs-5 ${styles.textColor}`}>I am a Full Stack web developer (Stack MERN) based in the beautiful city of Tucuman, Argentina.</p>
                <p className={`card-text fs-5 ${styles.textColor}`}>I really enjoy finding the fastest way to solve problems. I love to learn new things. I also have a passion for cooking. A hobby that led me to live the experience of working as a cook in another country</p>
              </div>
            </div>
            <h2 className={`display-5 fw-bold mt-4 ${styles.textColor}`}>What does he do?</h2>
            <hr />
            <div className={`card mb-5 ${styles.cardBg}`}>
              <div className='card-body'>
                <h4 className={`cardt-title mb-2 ${styles.textColor}`}>I'm a Full Stack Web Developer.</h4>
                <p className={`card-text fs-5 ${styles.textColor}`}>For front-end I usually work with HTML, CSS and JavaScript, including frameworks like Bootstrap, JQuery, Reactjs and Redux.</p>
                <p className={`card-text fs-5 ${styles.textColor}`}>For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).</p>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default WhoIsThisGuy