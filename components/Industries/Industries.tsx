"use client";

import React from "react";
import styles from "./Industries.module.css";

const industriesData = [
  { id: "01", name: "Manufacturing" },
  { id: "02", name: "Construction" },
  { id: "03", name: "Warehousing" },
  { id: "04", name: "Industrial Plants" },
  { id: "05", name: "Engineering Companies" },
];

export default function Industries() {
  return (
    <section id="industries" className={styles.industriesSection}>
      <div className="container px-4 px-md-5">
        {/* Header Block */}
        <div className="row align-items-center mb-5 gy-4">
          <div className="col-lg-7 text-start">
            <div className="section-badge">Industries We Serve</div>
            <h2 className={styles.sectionHeading}>
              Serving sectors where performance, safety, and precision matter most.
            </h2>
          </div>
          <div className="col-lg-5 text-start text-lg-end">
            <p className={styles.sectionSub}>
              Our solutions support businesses across a wide range of industrial and infrastructure-driven environments.
            </p>
          </div>
        </div>

        {/* 5-Column Industries List */}
        <div className={styles.industriesWrapper}>
          <div className="row g-0">
            {industriesData.map((ind) => (
              <div key={ind.id} className={`${styles.industryCol} col`}>
                <div className={styles.contentCard}>
                  <span className={styles.industryNum}>{ind.id}</span>
                  <h3 className={styles.industryName}>{ind.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
