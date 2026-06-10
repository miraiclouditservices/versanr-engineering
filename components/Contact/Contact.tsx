"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Submitting contact form:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <>
      <section id="contact" className={styles.contactSection}>
      <div className="container px-4 px-md-5">
        <div className="row gy-5 mb-5">
          {/* Info Side */}
          <div className="col-lg-5 text-start">
            <div className="section-badge">Contact Us</div>
            <h2 className={styles.sectionHeading}> Let's build something strong together.</h2>
            <p className={styles.sectionSub}>
              Have a project in mind, need a quote, or want to discuss technical specifications? 
              Reach out to our engineering team today.
            </p>

            <div className={`${styles.infoCards} mt-4`}>
              {/* Card 1: Location */}
              <div className={styles.infoCard}>
                <div className={styles.iconContainer}>
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="ms-3">
                  <h4 className={styles.cardTitle}>Our Facility</h4>
                  <p className={styles.cardDetail}>Sangareddy, Telangana, India</p>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className={styles.infoCard}>
                <div className={styles.iconContainer}>
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="ms-3">
                  <h4 className={styles.cardTitle}>Call Us Directly</h4>
                  <a href="tel:+917942534385" className={styles.cardLink}>+91 7942534385</a>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className={styles.infoCard}>
                <div className={styles.iconContainer}>
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="ms-3">
                  <h4 className={styles.cardTitle}>Email Inquiry</h4>
                  <a href="mailto:info@versanengineering.com" className={styles.cardLink}>info@versanengineering.com</a>
                </div>
              </div>

              {/* Card 4: Hours */}
              <div className={styles.infoCard}>
                <div className={styles.iconContainer}>
                  <i className="bi bi-clock"></i>
                </div>
                <div className="ms-3">
                  <h4 className={styles.cardTitle}>Working Hours</h4>
                  <p className={styles.cardDetail}>Mon - Sat: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="col-lg-7">
            <div className={styles.formWrapper}>
              <h3 className={styles.formHeading}>Send a Message</h3>
              
              {submitted ? (
                <div className="alert alert-success d-flex align-items-center" role="alert">
                  <i className="bi bi-check-circle-fill me-2 fs-5"></i>
                  <div>
                    <strong>Thank you!</strong> Your message has been received. Our team will contact you shortly.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-md-6 text-start">
                    <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`${styles.formInput} form-control`} 
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="col-md-6 text-start">
                    <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`${styles.formInput} form-control`} 
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="col-md-6 text-start">
                    <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${styles.formInput} form-control`} 
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="col-md-6 text-start">
                    <label htmlFor="subject" className={styles.formLabel}>Inquiry Type</label>
                    <select 
                      name="subject" 
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`${styles.formInput} form-select`}
                    >
                      <option value="">Select an option</option>
                      <option value="quote">Request a Quote</option>
                      <option value="fabrication">Industrial Fabrication</option>
                      <option value="engineering">Engineering Services</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>
                  <div className="col-12 text-start">
                    <label htmlFor="message" className={styles.formLabel}>Message Details</label>
                    <textarea 
                      name="message" 
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className={`${styles.formInput} form-control`} 
                      placeholder="Describe your project requirements here..."
                    ></textarea>
                  </div>
                  <div className="col-12 text-start mt-4">
                    <button type="submit" className={styles.submitBtn}>
                      Submit Inquiry
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Footer Section */}
      <footer className={styles.footerSection}>
        <div className="container px-4 px-md-5">
          <div className={styles.footerContainer}>
            <div className="row gy-4 pb-4 align-items-start">
              {/* Footer Column 1: Brand Info */}
              <div className="col-md-6 col-lg-5 text-start">
                <h3 className={styles.footerBrand}>Versan Engineering</h3>
                <p className={styles.footerDesc}>
                  Reliable industrial engineering and fabrication solutions from Sangareddy, Telangana.
                </p>
              </div>

              {/* Footer Column 2: Quick Links */}
              <div className="col-md-6 col-lg-4 text-start">
                <h4 className={styles.footerHeader}>Quick Links</h4>
                <div className={styles.footerLinks}>
                  <a href="#about" className={styles.footerLink}>About</a>
                  <a href="#services" className={styles.footerLink}>Services</a>
                  <a href="#gallery" className={styles.footerLink}>Projects</a>
                  <a href="#contact" className={styles.footerLink}>Contact</a>
                </div>
              </div>

              {/* Footer Column 3: Direct Phone */}
              <div className="col-md-12 col-lg-3 text-start text-lg-end mt-4 mt-lg-0">
                <h4 className={styles.footerHeader}>Contact</h4>
                <a href="tel:+917942534385" className={styles.footerPhone}>+91 7942534385</a>
              </div>
            </div>

            {/* Bottom Divider Line */}
            <div className={styles.footerDivider} />

            {/* Footer Bottom copyright & location */}
            <div className="row align-items-center pt-4 gy-2">
              <div className="col-md-6 text-start">
                <span className={styles.copyright}>
                  &copy; {new Date().getFullYear()} Versan Engineering. All rights reserved.
                </span>
              </div>
              <div className="col-md-6 text-start text-md-end">
                <span className={styles.footerLocation}>
                  Sangareddy, Telangana, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
