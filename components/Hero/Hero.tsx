"use client";

import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      {/* Background Image and Overlays */}
      <div 
        className={styles.heroBg} 
        style={{ backgroundImage: `url('/banner-v.jpg')` }}
      />
      <div className={styles.heroOverlay} />
      <div className="grid-overlay" />

      <div className={`container ${styles.heroContent} h-100 px-4 px-md-5 d-flex flex-column justify-content-center`}>
        <div className="row align-items-center h-100">
          <div className="col-lg-9 col-xl-8 text-start mt-5">
            {/* Tagline */}
            <div className={`${styles.tagline} section-badge`}>
              BUILT FOR INDUSTRY. ENGINEERED TO PERFORM.
            </div>

            {/* Main Heading */}
            <h1 className={styles.mainHeading}>
              Stone Crushing Equipment & <br />
              <span className={styles.textAccent}>Custom Engineering</span>
            </h1>

            {/* Subtext */}
            <p className={styles.subtext}>
              Leading manufacturer of stone crushing equipment, custom-engineered solutions,
              and heavy MS fabrication for the mining, quarrying, and bulk-material handling industries.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex align-items-center gap-3 mb-5 flex-wrap">
              <a href="tel:+919059057480" className={styles.btnOrange} aria-label="Call Us Now">
                <i className="bi bi-telephone"></i>
              </a>
              <a href="#about" className={styles.btnOutline} aria-label="Learn More About Us">
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>

            {/* Location & Contact Info */}
            <div className={`${styles.infoStrip} d-flex align-items-center gap-4 flex-wrap`}>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt-fill text-warning"></i>
                <span className={styles.infoText}>Sangareddy, Telangana</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill text-warning"></i>
                <span className={styles.infoText}>+91 90590 57480</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Glassmorphism Card (Floating Bottom Right on Desktop) */}
        <div className={`${styles.statsCard} glass-panel`}>
          <div className={styles.statsNumberContainer}>
            <span className={styles.statsNumber}>15</span>
            <span className={styles.plusSign}>+</span>
          </div>
          <p className={styles.statsText}>
            Years of focused engineering and fabrication expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
