import './contact.scss';
import emailjs from 'emailjs-com';
import React from 'react';
import { init } from 'emailjs-com';
init('user_XeAYvDQF0Ki9JECZtvAfM');
export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_plb3zhj',
        'template_mkomrp6',
        e.target,
        'user_XeAYvDQF0Ki9JECZtvAfM'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className='Contact'>
      <section>
        <form className='contact-form' onSubmit={sendEmail}>
          <input type='text' placeholder='Nome' name='name' />
          <input type='email' placeholder='Indirizzo Email' name='email' />
          <input
            type='text'
            placeholder='N. telefono (facoltativo)'
            name='telefon'
          />
          <input type='text' placeholder='Oggetto' name='subject' />
          <textarea placeholder='Il tuo messaggio' name='message' />
          <input id='contactSubmit' type='submit' value='INVIA MESSAGGIO' />
        </form>
        <br />
        <br />
      </section>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12370.613461177478!2d8.4998378!3d39.1826003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1023ed27ea0d037!2sParco%20Sportivo%20%22LA%20FENICE%22!5e0!3m2!1sen!2sde!4v1632483359620!5m2!1sen!2sde'
        title='myFrame'
        loading='lazy'
      ></iframe>
      <div className='contactInfos'>
        <a href='mailto:sjmanca@gmail.com' target='blank'>
          <p>sjmanca@gmail.com</p>
        </a>
        <a href='tel:+393488733334' target='blank'>
          <p>+393488733334</p>
        </a>
      </div>
    </div>
  );
}
