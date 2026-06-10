"use client";

import React from "react";
import styles from "./WhyChooseUs.module.css";

const reasonsData = [
  {
    id: "quality",
    title: "Quality Assured",
    desc: "Processes and workmanship guided by uncompromising quality standards.",
    iconClass: "bi-shield-check",
  },
  {
    id: "team",
    title: "Experienced Team",
    desc: "Hands-on professionals with deep industrial and engineering experience.",
    iconClass: "bi-people",
  },
  {
    id: "delivery",
    title: "Timely Delivery",
    desc: "Careful planning and execution that keeps projects moving on schedule.",
    iconClass: "bi-clock",
  },
  {
    id: "pricing",
    title: "Competitive Pricing",
    desc: "Value-focused solutions without compromising on performance or quality.",
    iconClass: "bi-currency-rupee",
  },
  {
    id: "satisfaction",
    title: "Customer Satisfaction",
    desc: "Responsive collaboration and dependable support at every stage.",
    iconClass: "bi-hand-thumbs-up",
  },
  {
    id: "expertise",
    title: "Technical Expertise",
    desc: "Sound engineering judgement applied to real-world industrial challenges.",
    iconClass: "bi-diagram-3",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className={styles.whySection}>
      {/* Background Grid Pattern Overlay */}
      <div className="grid-overlay" />
      
      <div className="container position-relative px-4 px-md-5 z-2">
        <div className="row align-items-center gy-5">
          {/* Left Column - Heading */}
          <div className="col-lg-5 text-start">
            <div className="section-badge">Why Choose Us</div>
            <h2 className={styles.sectionHeading}>
              A dependable engineering partner for every challenge.
            </h2>
            <p className={styles.sectionSub}>
              Our approach is defined by technical clarity, accountable execution, and a commitment 
              to delivering lasting value to every client.
            </p>
          </div>

          {/* Right Column - Reasons Grid */}
          <div className="col-lg-7">
            <div className={styles.reasonsGrid}>
              <div className="row g-0">
                {reasonsData.map((reason, index) => (
                  <div 
                    key={reason.id} 
                    className={`col-sm-6 ${styles.gridItem}`}
                  >
                    <div className={styles.contentWrapper}>
                      {/* Icon */}
                      <div className={styles.iconBox}>
                        <i className={`bi ${reason.iconClass}`}></i>
                      </div>
                      
                      {/* Title & Desc */}
                      <h3 className={styles.reasonTitle}>{reason.title}</h3>
                      <p className={styles.reasonDesc}>{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
