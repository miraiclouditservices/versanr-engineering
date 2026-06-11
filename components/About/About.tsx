"use client";

import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container px-4 px-md-5">
        <div className="row align-items-center gy-5">
          {/* Text Content Column */}
          <div className="col-lg-6">
            <div className="section-badge">About Versan</div>

            <h2 className={styles.sectionHeading}>
              Leading manufacturer of stone crushing equipment & custom-engineered solutions.
            </h2>

            <p className={styles.paragraphPrimary}>
              Welcome to Versan Engineering. We are a leading manufacturer of stone crushing equipment and custom-engineered solutions for the mining, quarrying, and bulk-material handling industries.
            </p>

            <p className={styles.paragraphSecondary}>
              We design, manufacture, and supply complete crushing systems, replacement spares, and heavy MS fabrication to meet each customer’s unique requirements and solve onsite crushing challenges effectively.
            </p>

            {/* Three Pillars Grid */}
            <div className="row mt-5 g-4">
              <div className="col-md-4">
                <div className={styles.pillarCard}>
                  <h3 className={styles.pillarTitle}>Custom Design</h3>
                  <p className={styles.pillarDesc}>Tailor-made designs for site-specific constraints.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.pillarCard}>
                  <h3 className={styles.pillarTitle}>Manufacturing</h3>
                  <p className={styles.pillarDesc}>In-house machinery and spare production.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.pillarCard}>
                  <h3 className={styles.pillarTitle}>Heavy Fabrication</h3>
                  <p className={styles.pillarDesc}>Structural MS fabrication built to last.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-6 position-relative d-flex justify-content-center justify-content-lg-end">
            <div className={styles.imageContainer}>
              {/* Offset Orange Border */}
              <div className={styles.orangeOutlineBorder} />

              {/* Main Image */}
              {/* Note: Using project-gallery-6.jpg or fallback, we can styled it beautifully */}
              <img
                src="/about-v.jpg"
                alt="Engineers working in fabrication facility"
                className={styles.aboutImage}
              />

              {/* End-to-End Floating Badge */}
              <div className={styles.floatingBadge}>
                <h4 className={styles.badgeTitle}>End-to-End</h4>
                <p className={styles.badgeDesc}>
                  Engineering support from planning through execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
