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
              Engineering capability that turns complex requirements into dependable outcomes.
            </h2>

            <p className={styles.paragraphPrimary}>
              Versan Engineering delivers dependable industrial engineering, fabrication, and manufacturing
              support for businesses that require precision, durability, and consistent execution.
            </p>

            <p className={styles.paragraphSecondary}>
              From concept to completion, our team combines practical experience with a disciplined approach
              to quality, helping clients achieve reliable results across every stage of their project.
            </p>

            {/* Three Pillars Grid */}
            <div className="row mt-5 g-4">
              <div className="col-md-4">
                <div className={styles.pillarCard}>
                  <h3 className={styles.pillarTitle}>Precision</h3>
                  <p className={styles.pillarDesc}>Detail-led engineering from start to finish.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.pillarCard}>
                  <h3 className={styles.pillarTitle}>Reliability</h3>
                  <p className={styles.pillarDesc}>Solutions built to perform under pressure.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.pillarCard}>
                  <h3 className={styles.pillarTitle}>Commitment</h3>
                  <p className={styles.pillarDesc}>A partner mindset on every project.</p>
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
