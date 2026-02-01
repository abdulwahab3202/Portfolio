import React, { useRef, useState } from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been successfully sent.',
            background: '#1e293b',
            color: '#fff',
            confirmButtonColor: '#06b6d4'
          });
          e.target.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error('FAILED...', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to send message. Please try again later.',
            background: '#1e293b',
            color: '#fff',
            confirmButtonColor: '#ef4444'
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="py-20 px-5 text-white" id="contact">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 drop-shadow-sm">
          Contact Me
        </h2>
        <div className="h-1.5 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-[700px] mx-auto p-8 rounded-2xl border border-gray-700 bg-slate-900/50 backdrop-blur-md shadow-2xl"
      >
        <div className="flex flex-wrap gap-5 justify-between mb-8">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abdulwahab142006@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 py-3 px-5 border border-gray-600 rounded-lg hover:bg-slate-800 transition-colors text-gray-300 hover:text-white hover:border-cyan-500"
          >
            <FaEnvelope className="text-cyan-400" /> <span className="text-sm md:text-base">abdulwahab142006@gmail.com</span>
          </a>

          <a
            href="https://wa.me/918838070934"
            className="flex-1 flex items-center justify-center gap-3 py-3 px-5 border border-gray-600 rounded-lg hover:bg-slate-800 transition-colors text-gray-300 hover:text-white hover:border-green-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-green-500 size-5" /> <span className="text-sm md:text-base">WhatsApp</span>
          </a>
        </div>

        <p className="text-center text-gray-400 mb-8 flex items-center justify-center gap-4 before:h-[1px] before:w-16 before:bg-gray-600 after:h-[1px] after:w-16 after:bg-gray-600">
          Or send a message
        </p>

        <form className="flex flex-col gap-5" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-slate-800/80 border border-gray-700 text-white p-4 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-slate-800/80 border border-gray-700 text-white p-4 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className="w-full bg-slate-800/80 border border-gray-700 text-white p-4 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-500 resize-none"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;