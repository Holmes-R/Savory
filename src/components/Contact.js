import React from 'react';
import '../css/Contact.css';

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Whether you have a question, feedback, 
          or want to partner with us, we are always available to assist you.
        </p>
      </div>

      <div className="contact-details">
        <div className="contact-item">
          <h3>Our Location</h3>
          <p> Perumal Nagar, Kovaipudur, Tamil Nadu 641042   </p>
          <div className="map">
            <iframe
              title="Google Maps Location"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.575996454858!2d76.92615110814936!3d10.9399808793812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b8dc0443c9d%3A0xde8004de80b45cc5!2sL%C3%A9%20Infinity!5e0!3m2!1sen!2sin!4v1737729754230!5m2!1sen!2sin" 
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="contact-item">
          <h3>Contact Information</h3>
          <p>
            Email: <a href="mailto:hariharanrameshbabu2004@gmail.com">hariharanrameshbabu2004@gmail.com</a><br />
            Phone: <a href="tel:+1234567890">+91 234 567 890</a><br />
          </p>
        </div>
      </div>

      <div className="contact-form">
        <h3>Get in Touch</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};
