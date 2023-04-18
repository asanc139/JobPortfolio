import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';
export const Email = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0a8pssn',
        'template_cuoq3qc',
        e.target,
        'ISH1xYHymriZZ2TWZ'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.form
      action=""
      ref={ref}
      className="contactForm"
      initial={{ x: '-10vw', opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: '-10vw', opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      onSubmit={sendEmail}
    >
      <h4 className="contentTitle">Message Me</h4>
      <div
        className="col-12 col-md-6 formGroup"
        style={{ display: 'inline-block' }}
      >
        <input
          type="text"
          className="formControl"
          // onChange={handleChange}
          //value={formData.name}
          id="contactName"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div
        className="col-12 col-md-6 formGroup"
        style={{ display: 'inline-block' }}
      >
        <input
          type="email"
          className="formControl"
          //onChange={handleChange}
          //value={formData.email}
          id="contactEmail"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <input
          type="text"
          className="formControl"
          //onChange={handleChange}
          //value={formData.subject}
          id="contactSubject"
          name="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <textarea
          className="formControl"
          //onChange={handleChange}
          //value={formData.message}
          name="message"
          id="contactMessage"
          rows="5"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="col-12 formGroup formSubmit">
        <button className="btn">Send Message</button>
      </div>
    </motion.form>
  );
};
export default Email;
