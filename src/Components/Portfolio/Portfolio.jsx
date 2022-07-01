import React from 'react';
import styles from './Portfolio.module.css';


function Portfolio() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center flex-wrap' id='portfolio' on>
      <div className={styles.container} >
        <h3 className=' fw-bold text-light mb-2 display-4'>PORTFOLIO</h3>
        <h3 className=' fw-bold text-light m-3 display-6'>Here's a list of most of the projects I've been working on lately.</h3>
        <div className='d-flex flex-row flex-wrap justify-content-center' id='cardCointainer'>
          <a href='https://github.com/alevexler2/Rick-and-morty-App' target='_blank'>
            <div className={`${styles.card} ${styles.card0} m-4`}>
              <div className={`d-flex flex-column justify-content-between ${styles.border}`}>
                <h2 className={`${styles.textStyle} fs-3 fw-bold`}>Rick and morty app</h2>
                <h2 className={`${styles.textStyle} fs-5`}>React JS & Ajax</h2>
              </div>
            </div>
          </a>
          <a href='https://codepen.io/alevexler2/pen/mdqbGYX' target='_blank'>
            <div className={`${styles.card} ${styles.card1} m-4`}>
              <div className={`d-flex flex-column justify-content-between ${styles.border}`}>
                <h2 className={`${styles.textStyle} fs-3 fw-bold`}>MASK</h2>
                <h2 className={`${styles.textStyle} fs-5`}>HTML - CSS & JavaScript vanilla</h2>
              </div>
            </div>
          </a>
          <div className={`${styles.card} ${styles.card2} m-4`}>
            <div className={`d-flex flex-column justify-content-between ${styles.border}`}>
              <h2 className={`${styles.textStyle} fs-3 fw-bold`}>TARANTINO MOVIE PAGE</h2>
              <h2 className={`${styles.textStyle} fs-5`}>HTML - CSS & JavaScript vanilla</h2>
            </div>
          </div>
          <a href='https://codepen.io/alevexler2/full/MWVWrBN' target='_blank'>
            <div className={`${styles.card} ${styles.card3} m-4`}>
              <div className={`d-flex flex-column justify-content-between ${styles.border}`}>
                <h2 className={`${styles.textStyle} fs-3 fw-bold`}>Arkanoid Game</h2>
                <h2 className={`${styles.textStyle} fs-5`}>HTML - CSS & JavaScript vanilla</h2>
              </div>
            </div>
          </a>       
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio