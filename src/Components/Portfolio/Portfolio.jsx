import React from 'react';
import styles from './Portfolio.module.css';

const projects = [
{
  name: "",
  gitHubRepo: "",
  image: "",
}];

function Portfolio() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center flex-wrap'>
      <div className={styles.container}>
        <h3 className=' fw-bold text-light mb-2 display-4'>PORTFOLIO</h3>
        <h3 className=' fw-bold text-light m-3 display-6'>Here's a list of most of the projects I've been working on lately.</h3>
        <div className='d-flex flex-row flex-wrap justify-content-center'>
          <div className={`${styles.card} ${styles.card0} m-4`}>
            <div className={styles.border}>
              <h2>Rick and morty app</h2>
              <h2 className={`${styles.textStyle} fs-5`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum laborum voluptatibus, voluptatem atque nisi, tempora, dolorum provident ipsa pariatur iusto ratione molestias error doloremque ex excepturi earum blanditiis velit!</h2>
            </div>
          </div>
        
       
          <div className={`${styles.card} ${styles.card0} m-4`}>
            <div className={styles.border}>
              <h2>Rick and morty app</h2>
            </div>
          </div>
          <div className={`${styles.card} ${styles.card0} m-4`}>
            <div className={styles.border}>
              <h2>Rick and morty app</h2>
            </div>
          </div>
          <div className={`${styles.card} ${styles.card0} m-4`}>
            <div className={styles.border}>
              <h2>Rick and morty app</h2>
            </div>
          </div>
          <div className={`${styles.card} ${styles.card0} m-4`}>
            <div className={styles.border}>
              <h2>Rick and morty app</h2>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio