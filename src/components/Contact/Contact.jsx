import React, { useRef } from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import { ReactComponent as Phone } from '../../svgs/phone.svg';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formCurrent = form.current;

    // Check user fill out all input
    if (
      !formCurrent.user_name.value ||
      !formCurrent.user_email.value ||
      !formCurrent.message.value
    ) {
      alert('Please fill out all📝  ');

      return;
    }

    // Send email
    emailjs
      .sendForm(
        'portfolio_mail',
        'template_w4jc52k',
        form.current,
        'DrTfcAZlbqO1Il1Kl'
      ) //
      .then(
        () => {
          alert(
            `your message has been sent successfully! I'll reply to you soon🥰`
          );

          // Clear all input
          form.current.reset();
        },
        (err) => {
          alert(err);
        }
      );
  };

  return (
    <section className={styles.section}>
      <h1>Contact</h1>
      <div className={styles.mainContainer}>
        <div className={styles.formContainer}>
          <form ref={form}>
            <span>
              <label> Name</label>
              <input type="text" name="user_name" />
            </span>
            <span>
              <label> Email</label> <input type="email" name="user_email" />
            </span>

            <span>
              <label>Message</label> <textarea name="message" />
            </span>
            <button onClick={sendEmail} className={styles.button}>
              Send
            </button>
          </form>
        </div>
        <Phone className={styles.phone} />
      </div>
    </section>
  );
}

export default Contact;
