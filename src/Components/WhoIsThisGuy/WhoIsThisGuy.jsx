import React from 'react'
import styles from './WhoIsThisGuy.module.css'
import 'animate.css';







function WhoIsThisGuy() {
  
  window.addEventListener('scroll', ()=>{
    document.getElementById('whoIsThisGuyContainer1').classList.add('animate__fadeInLeft')
    document.getElementById('whoIsThisGuyContainer2').classList.add('animate__fadeInRight')
  })

  return (
    <div className={styles.bgImg} >
      <div className='container-fluid'>
        <div className='row justify-content-end'>
          <div className='col-sm-12 col-lg-6 text-center mt-4' >
            <h3 className={`display-5 fw-bold mt-4 ${styles.textColor} headline`}>WHO`S THIS GUY?</h3>
            <hr />
            <div className={`card ${styles.cardBg} animate__animated`}  id='whoIsThisGuyContainer1'>
              <div className='card-body'>
                <h4 className={`cardt-title mb-2 ${styles.textColor}`}>My name is Alejandro</h4>
                <p className={`card-text fs-5 ${styles.textColor}`} >I am a Full Stack web developer (Stack MERN) based in the beautiful city of Tucuman, Argentina.</p>
                <p className={`card-text fs-5 ${styles.textColor}`}>I really enjoy finding the fastest way to solve problems. I love to learn new things. I also have a passion for cooking. A hobby that led me to live the experience of working as a cook in another country</p>
              </div>
            </div>
            <h3 className={`display-5 fw-bold mt-4 ${styles.textColor}`} >What does he do?</h3>
            <hr />
            <div className={`card mb-5 ${styles.cardBg} animate__animated`}  id='whoIsThisGuyContainer2'>
              <div className='card-body'>
                <h4 className={`cardt-title mb-2 ${styles.textColor}`}>I'm a Full Stack Web Developer.</h4>
                <p className={`card-text fs-5 ${styles.textColor}`}>For front-end I usually work with HTML, CSS and JavaScript, including frameworks like Bootstrap, JQuery, Reactjs and Redux.</p>
                <p className={`card-text fs-5 ${styles.textColor}`}>For the back-end Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro corrupti architecto necessitatibus fugit. Nobis recusandae odio delectus laborum quo quam accusantium incidunt doloremque nam, hic, illum, cumque a illo voluptates?</p>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default WhoIsThisGuy