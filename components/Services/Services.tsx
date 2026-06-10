"use client";

import React from "react";
import styles from "./Services.module.css";

const servicesData = [
  {
    id: "fab",
    title: "Industrial Fabrication",
    desc: "Robust fabrication solutions engineered for strength, accuracy, and operational longevity.",
    iconClass: "bi-tools",
  },
  {
    id: "eng",
    title: "Engineering Services",
    desc: "Practical engineering expertise that transforms requirements into efficient, buildable solutions.",
    iconClass: "bi-rulers",
  },
  {
    id: "mfg",
    title: "Manufacturing Solutions",
    desc: "Reliable manufacturing support designed to improve performance and reduce downtime.",
    iconClass: "bi-cpu",
  },
  {
    id: "exe",
    title: "Project Execution",
    desc: "Disciplined execution with a clear focus on timelines, quality, and client expectations.",
    iconClass: "bi-clipboard-check",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container px-4 px-md-5">
        {/* Header Area */}
        <div className="row mb-5">
          <div className="col-lg-8 text-start">
            <div className="section-badge">Our Services</div>
            <h2 className={styles.sectionHeading}>
              Integrated engineering solutions for demanding industrial needs.
            </h2>
            <p className={styles.sectionSub}>
              We bring together fabrication skill, engineering discipline, and project execution expertise 
              to support clients across multiple industrial sectors.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row g-4 mt-2">
          {servicesData.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-3">
              <div className={`${styles.serviceCard} hover-lift`}>
                {/* Icon Container */}
                <div className={styles.iconContainer}>
                  <i className={`bi ${service.iconClass}`}></i>
                </div>
                
                {/* Content */}
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                
                {/* Bottom Orange Accent Line */}
                <div className={styles.orangeBar} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
