"use client";

import React, { useState } from "react";
import styles from "./Gallery.module.css";

const projectsData = [
  {
    id: 1,
    title: "Precision Lathe Machining",
    category: "Machining & Lathe",
    imageUrl: "/v1.png",
  },
  {
    id: 2,
    title: "Heavy-Duty Boring & Milling",
    category: "Machining & Lathe",
    imageUrl: "/v2.png",
  },
  {
    id: 3,
    title: "Heavy MS Structural Welding",
    category: "Heavy Fabrication",
    imageUrl: "/v4.png",
  },
  {
    id: 4,
    title: "Industrial Structure Assembly",
    category: "Heavy Fabrication",
    imageUrl: "/v6.png",
  },
  {
    id: 5,
    title: "Conveyor Rotary Drum Spares",
    category: "Conveyor Systems",
    imageUrl: "/v8.png",
  },
  {
    id: 6,
    title: "Crushing Machinery Refurbishment",
    category: "Site Work & Assemblies",
    imageUrl: "/v12.png",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className="container px-4 px-md-5">
        {/* Header Block */}
        <div className="row mb-5 align-items-end">
          <div className="col-lg-6 text-start">
            <div className="section-badge">Project Gallery</div>
            <h2 className={styles.sectionHeading}>
              A closer look at our industrial capabilities.
            </h2>
          </div>
          <div className="col-lg-6 text-lg-end mt-3 mt-lg-0">
            <p className={styles.sectionSub}>
              From fabrication floors to active quarry sites, our work is built on precision, 
              coordination, and industrial strength.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className={styles.galleryItem}
              onClick={() => setSelectedImage(project.imageUrl)}
            >
              {/* Image */}
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className={styles.projectImage}
              />
              
              {/* Hover Overlay */}
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.projectCategory}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.viewIcon}>
                    <i className="bi bi-zoom-in"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-5">
          <a href="/gallery" className={styles.viewAllBtn}>
            View Gallery
            <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>

      {/* Lightbox / Modal for Zooming */}
      {selectedImage && (
        <div 
          className={styles.lightbox} 
          onClick={() => setSelectedImage(null)}
        >
          <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
            <i className="bi bi-x-lg"></i>
          </button>
          <img src={selectedImage} alt="Enlarged view" className={styles.lightboxImg} />
        </div>
      )}
    </section>
  );
}

