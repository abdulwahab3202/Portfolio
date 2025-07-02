import React, { useRef } from 'react';
import './Contact.css';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_u590897',
        'template_3gatmc7',
        form.current,
        'gijG8v5MztiYYAaWY'
      )
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been successfully sent.',
          });
          e.target.reset();
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to send message. Please try again later.',
          });
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-box">
        <div className="contact-top">
          <a
            href="mailto:abdulwahab142006@gmail.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope /> abdulwahab142006@gmail.com
          </a>
          <a
            href="https://wa.me/918838070934"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        <p className="or-text">Or send a message</p>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
