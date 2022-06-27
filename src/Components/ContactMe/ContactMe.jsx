import React  from 'react';
import { useForm } from 'react-hook-form';
import styles from './ContactMe.module.css';
import emailjs from '@emailjs/browser';


  function ContactMe() {
    const templateParams = {
      from_name: '',
      message: '',
      reply_to: ''
    };
    const handleSendEmail = ()=>{
      setTimeout(()=>{
        emailjs.send('service_p97n5bq','template_b9cvcnu', templateParams, 'MqHnGFUIj1gCv6kIq')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });
      }, 1000)
      setTimeout(()=>{
        console.log("recargando");
        window.location.reload()
      },2000)
    }
    

  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    templateParams.from_name = `${data.FirstName} ${data.LastName}`;
    templateParams.message = data.Message;
    templateParams.reply_to = data.Email;
    
    console.log(data)};
  console.log(errors);
  
  return (
    <div className={`${styles.bgContactMe} container-fluid pb-5`}>
      <div className='row'>
        <div className='col-10 col-lg-6 mt-5'>
          <h3 className={`fw-bold display-4 text-center mb-5`}>CERTIFICATIONS</h3>
          <ul className='mt-5'>
            <li className='fs-4 my-4'><a target='_blank' className={`${styles.textStyle} text-decoration-none fw-bold fs-4`} href='https://www.freecodecamp.org/espanol/certification/alevexler/responsive-web-design'>RESPONSIVE WEB DESIGN - FREECODECAMP</a></li>
            <li className='fs-4 my-4'><a target='_blank' className={`${styles.textStyle} text-decoration-none fw-bold fs-4`} href='https://www.freecodecamp.org/certification/alevexler/javascript-algorithms-and-data-structures'>JAVASCRIPT ALGORITHMS & DATA STRUCTURES - FREECODECAMP</a></li>
            <li className='fs-4 my-4'><a target='_blank' className={`${styles.textStyle} text-decoration-none fw-bold fs-4`} href='https://www.sololearn.com/Certificate/1097-24382243/pdf/'>REACT & REDUX - SOLOLEARN</a></li>
            <li className='fs-4 my-4'><a target='_blank' className={`${styles.textStyle} text-decoration-none fw-bold fs-4`} href='https://www.sololearn.com/certificates/course/en/24382243/1024/landscape/png'>JAVASCRIPT - SOLOLEARN</a></li>
          </ul>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={`d-flex flex-column m-5 card p-5  bg-dark col-10 col-lg-3`}>
          <h3 className='display-5 text-light mb-5 fw-bold text-center'>CONTACT ME</h3>
          <p className='fs-5 text-light mb-5 fw-bold'>Please, use the form below or send an email to alevexler2@gmail.com</p>
          <input className='my-2' type="text" placeholder="First name" {...register("FirstName", {required: true, maxLength: 80})} />
          <input className='my-2' type="text" placeholder="Last name" {...register("LastName", {required: true, maxLength: 100})} />
          <input className='my-2' type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
          <textarea className='my-2' type="text" placeholder="Message" {...register("Message", {required: true, maxLength: 250})} />
          <button className='my-5 btn btn-outline-secondary' type="submit" onClick={handleSendEmail}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;