"use client";

import React from "react";
import styles from "./WhyChooseUs.module.css";

const reasonsData = [
  {
    id: "customer-design",
    title: "Customer-Centric Design",
    desc: "Solutions engineered to resolve specific operational problems and optimize productivity.",
    iconClass: "bi-person-gear",
  },
  {
    id: "end-to-end",
    title: "End-to-End Service",
    desc: "From initial site assessment and design to fabrication, supply, and technical support.",
    iconClass: "bi-gear-wide-connected",
  },
  {
    id: "quality-mfg",
    title: "Quality Manufacturing",
    desc: "Robust fabrication standards, material selection, and finishing that ensure durability.",
    iconClass: "bi-shield-check",
  },
  {
    id: "flexibility",
    title: "Flexibility",
    desc: "Capacity to manufacture one-off bespoke equipment as well as larger production runs.",
    iconClass: "bi-shuffle",
  },
  {
    id: "expertise",
    title: "Expertise",
    desc: "Experienced engineering and fabrication teams familiar with heavy-duty, abrasive environments.",
    iconClass: "bi-award",
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
              Why Choose Versan Engineering
            </h2>
            <p className={styles.sectionSub}>
              We engineer custom solutions to resolve specific operational challenges, optimizing your productivity and equipment lifespan in heavy-duty environments.
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
