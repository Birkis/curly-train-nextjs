import { useState } from 'react';
import styles from '../styles/contact.module.scss'

import { useForm } from 'react-hook-form';
 
import  supabase from '../config/supabaseClient'

export default function Contact() {

    const {register, handleSubmit, reset, watch, formState: { errors }} = useForm();

    const onSubmit = async (form) => {
  
      const {name, email, message} = form

      const {data, error} = await supabase
      .from('contactForm')
      .insert([{name, email, message }])

      if(error) {
      console.log("There was an error: " + JSON.stringify(error))
      } 
      if (data) {
        console.log(data)
        reset()
      }
    }
    
    // const [name, setName] = useState('')
    // const [email, setEmail]  = useState('')
    // const [message, setMessage] = useState('')

    return (
      <main>
        <section id={styles.getInTouchWrapper}>
          <div className={styles.getInTouchContainer}>
            <div className={styles.topBorder}></div>
            <h2 className={styles.title}>Get in Touch</h2>
            <p className="body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              totam aut vel minus libero? Quod saepe reiciendis quasi
              reprehenderit, a aspernatur vel. Aspernatur repudiandae doloremque
              provident excepturi nesciunt magni facere ratione quo dignissimos
              ab autem, dolores perferendis tempore ullam iusto similique velit.
              Natus tempora quibusdam, praesentium ex eius deserunt aut!
            </p>
            <div className={styles.socialIcons}>
              <img src="/icons/linkedin.svg" alt="" />
              <img src="/icons/twitter.svg" alt="" />
              <img src="/icons/github.svg" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className={styles.contactMeWrapper}>
            <div className={styles.topBorder}></div>
            <h2 className={styles.title}>Contact Me</h2>
            <div className={styles.formWrapper}>
              <form action="" onSubmit={handleSubmit(onSubmit)}  >
                <div  className={`${styles.formInput} body-2`}>
                  <label className={styles.formLabel} htmlFor="name">Name</label>
                  <input 
                        {...register("name", {required: true})}
                        className={styles.inputField} 
                        placeholder="Your esteemed name" 
                        name='name' 
                        type="text" />
                         {errors.name && <span> This field is required  </span> }
                </div>
                <div  className={`${styles.formInput} body-2`}>
                  <label className={styles.formLabel} htmlFor="email">Email</label>
                  <input 
                        {...register('email', {required: true})}
                        className={styles.inputField}  
                        placeholder="Your email" 
                        name='email' 
                        type="email" />
                        {errors.email && <span> This field is required  </span> }

                </div>
                <div  className={`${styles.formInput} body-2`}>
                  <label className={styles.formLabel} htmlFor="message">Message</label>
                  <textarea 
                        {...register('message', {minLength: 8, maxLength: 99})}
                        className={styles.textArea}  
                        name='message' 
                        type="text" 
                        placeholder='Tis was the best of times, tis was the worst of times' />
                        {errors.message && <span>The message must be more than 8 characters, but not more than 99 ☝🏻</span>}
                </div>

                <button className={`button-primary ${styles.formButton}`}  >
                       <input className='body-2' type="submit" name="" id="submitButtton" />
                </button>

              </form>
            </div>
          </div>
        </section>
      </main>
    );
}