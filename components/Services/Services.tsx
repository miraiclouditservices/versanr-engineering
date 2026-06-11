"use client";

import React, { useState } from "react";
import styles from "./Services.module.css";

const capabilitiesData = [
  {
    id: "cap-1",
    title: "Custom Equipment Design",
    desc: "Tailor-made designs that address specific stone-crushing problems and site constraints.",
    iconClass: "bi-pencil-square",
  },
  {
    id: "cap-2",
    title: "Manufacturing",
    desc: "In-house production of crushing machinery and spares manufactured to customer specifications.",
    iconClass: "bi-gear-wide-connected",
  },
  {
    id: "cap-3",
    title: "Complete Conveyor Systems",
    desc: "Supply of conveyors, rollers, drum pulleys, and end-to-end conveyor setups.",
    iconClass: "bi-infinity",
  },
  {
    id: "cap-4",
    title: "Material Handling Components",
    desc: "Fabrication of chutes, surge hoppers, feeders, and screens.",
    iconClass: "bi-boxes",
  },
  {
    id: "cap-5",
    title: "Hydrocyclone Systems",
    desc: "Hydrocyclones, hydrocyclone pipes (PU-coated and rubber-lined) for classification and slurry handling.",
    iconClass: "bi-filter-circle",
  },
  {
    id: "cap-6",
    title: "Heavy MS Fabrication",
    desc: "Structural and heavy fabrication works for equipment frames, supports, and ancillary installations.",
    iconClass: "bi-hammer",
  },
];

const productsData = [
  {
    id: "prod-1",
    title: "Stone Crushing Equipment",
    desc: "Primary, secondary, and tertiary crushers designed for reliable throughput and easy maintenance.",
    iconClass: "bi-bricks",
  },
  {
    id: "prod-2",
    title: "Replacement Spares",
    desc: "Wear parts and precision spares manufactured to match or improve original performance.",
    iconClass: "bi-nut",
  },
  {
    id: "prod-3",
    title: "Conveyors & Accessories",
    desc: "Complete conveyor assemblies, idlers, pulleys, and drive components.",
    iconClass: "bi-speedometer",
  },
  {
    id: "prod-4",
    title: "Feed & Storage",
    desc: "Hoppers, chutes, feeders, and surge bins designed for smooth flow and reduced clogging.",
    iconClass: "bi-archive",
  },
  {
    id: "prod-5",
    title: "Screening & Classification",
    desc: "Vibrating screens and hydrocyclone-based classification systems for efficient separation.",
    iconClass: "bi-funnel",
  },
  {
    id: "prod-6",
    title: "Protective Linings",
    desc: "PU-coated and rubber-lined piping and components to extend service life in abrasive applications.",
    iconClass: "bi-shield-shaded",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<"capabilities" | "products">("capabilities");

  const displayData = activeTab === "capabilities" ? capabilitiesData : productsData;

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container px-4 px-md-5">
        {/* Header Area */}
        <div className="row mb-4">
          <div className="col-lg-8 text-start">
            <div className="section-badge">Our Offerings</div>
            <h2 className={styles.sectionHeading}>
              Capabilities & Products engineered to solve quarrying and crushing challenges.
            </h2>
            <p className={styles.sectionSub}>
              We deliver purpose-built stone crushing machinery, material handling conveyor setups, and wear-resistant custom fabrication.
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${activeTab === "capabilities" ? styles.tabButtonActive : ""}`}
            onClick={() => setActiveTab("capabilities")}
          >
            Our Core Capabilities
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === "products" ? styles.tabButtonActive : ""}`}
            onClick={() => setActiveTab("products")}
          >
            Products & Solutions
          </button>
        </div>

        {/* Grid */}
        <div className="row g-4">
          {displayData.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div className={`${styles.serviceCard} hover-lift`}>
                {/* Icon Container */}
                <div className={styles.iconContainer}>
                  <i className={`bi ${item.iconClass}`}></i>
                </div>
                
                {/* Content */}
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                
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
