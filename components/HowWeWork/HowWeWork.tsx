"use client";

import React from "react";
import styles from "./HowWeWork.module.css";

const stepsData = [
  {
    stepNum: "01",
    title: "Consult & Assess",
    desc: "Understand site conditions, production targets, and pain points.",
    iconClass: "bi-chat-left-text",
  },
  {
    stepNum: "02",
    title: "Design & Propose",
    desc: "Deliver engineered drawings and solution proposals tailored to the customer.",
    iconClass: "bi-vector-pen",
  },
  {
    stepNum: "03",
    title: "Manufacture & Test",
    desc: "In-house fabrication with quality checks and pre-delivery testing.",
    iconClass: "bi-gear-wide",
  },
  {
    stepNum: "04",
    title: "Install & Support",
    desc: "Assistance with installation, commissioning, and after-sales service.",
    iconClass: "bi-tools",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className={styles.howSection}>
      <div className="container px-4 px-md-5">
        {/* Section Header */}
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-lg-8">
            <div className="section-badge justify-content-center">Our Process</div>
            <h2 className={styles.sectionHeading}>How We Work</h2>
            <p className={styles.sectionSub}>
              From first assessment to long-term site support, our structured workflow ensures transparent execution and premium quality.
            </p>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className={styles.timelineContainer}>
          <div className="row g-4 position-relative">
            {/* Connecting line (Desktop only) */}
            <div className={styles.connectingLine} />

            {stepsData.map((step, index) => (
              <div key={step.stepNum} className="col-sm-6 col-lg-3">
                <div className={`${styles.stepCard} hover-lift`}>
                  {/* Step Number Badge */}
                  <span className={styles.stepNumber}>{step.stepNum}</span>

                  {/* Icon Box */}
                  <div className={styles.iconContainer}>
                    <i className={`bi ${step.iconClass}`}></i>
                  </div>

                  {/* Content */}
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
