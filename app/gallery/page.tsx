"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import styles from "./gallery-page.module.css";

// 27 project images mapping (excluding v25)
const allProjects = [
  // Precision Machining
  { id: "v1", title: "Heavy Shaft Turning", category: "Precision Machining", imageUrl: "/v1.png" },
  { id: "v2", title: "Large Bore Lathe Alignment", category: "Precision Machining", imageUrl: "/v2.png" },
  { id: "v3", title: "Heavy-Duty Milling Work", category: "Precision Machining", imageUrl: "/v3.png" },
  { id: "v5", title: "Precision Drilling & Facing", category: "Precision Machining", imageUrl: "/v5.png" },
  { id: "v9", title: "Heavy Duty Machining Centers", category: "Precision Machining", imageUrl: "/v9.png" },
  { id: "v17", title: "Heavy Gear Turning & Boring", category: "Precision Machining", imageUrl: "/v17.png" },
  { id: "v18", title: "Spindle End Milling & Boring", category: "Precision Machining", imageUrl: "/v18.png" },

  // Heavy Fabrication
  { id: "v4", title: "Industrial Base Frame Welding", category: "Heavy Fabrication", imageUrl: "/v4.png" },
  { id: "v6", title: "Heavy MS Structural Scaffold", category: "Heavy Fabrication", imageUrl: "/v6.png" },
  { id: "v10", title: "MS Chute Structural Welding", category: "Heavy Fabrication", imageUrl: "/v10.png" },
  { id: "v11", title: "Main Machinery Underframe", category: "Heavy Fabrication", imageUrl: "/v11.png" },
  { id: "v14", title: "Large Hopper Shell Assembly", category: "Heavy Fabrication", imageUrl: "/v14.png" },
  { id: "v15", title: "Equipment Support Frames", category: "Heavy Fabrication", imageUrl: "/v15.png" },
  { id: "v16", title: "Custom Feed Hopper Fabrication", category: "Heavy Fabrication", imageUrl: "/v16.png" },
  { id: "v24", title: "High-Capacity Surge Hopper", category: "Heavy Fabrication", imageUrl: "/v24.png" },

  // Conveyor Systems & Spares
  { id: "v7", title: "Conveyor Tail Pulley Assembly", category: "Conveyor Systems & Spares", imageUrl: "/v7.png" },
  { id: "v8", title: "Conveyor Rotary Drum Spares", category: "Conveyor Systems & Spares", imageUrl: "/v8.png" },
  { id: "v13", title: "Heavy Conveyor Drum Pulley", category: "Conveyor Systems & Spares", imageUrl: "/v13.png" },
  { id: "v19", title: "Rubber-Lagged Drive Pulley", category: "Conveyor Systems & Spares", imageUrl: "/v19.png" },
  { id: "v20", title: "Heavy Duty Pulley Shafting", category: "Conveyor Systems & Spares", imageUrl: "/v20.png" },
  { id: "v21", title: "Industrial Conveyor Rollers", category: "Conveyor Systems & Spares", imageUrl: "/v21.png" },

  // Site Work & Assemblies
  { id: "v12", title: "Quarry Crusher Overhaul", category: "Site Work & Assemblies", imageUrl: "/v12.png" },
  { id: "v22", title: "Crushing Station Structural Erecting", category: "Site Work & Assemblies", imageUrl: "/v22.png" },
  { id: "v23", title: "Crusher Frame Site Setting", category: "Site Work & Assemblies", imageUrl: "/v23.png" },
  { id: "v26", title: "Conveyor Runway Site Support", category: "Site Work & Assemblies", imageUrl: "/v26.png" },
  { id: "v27", title: "Primary Crushing Plant Setup", category: "Site Work & Assemblies", imageUrl: "/v27.png" },
  { id: "v28", title: "Rotary Screen Installation", category: "Site Work & Assemblies", imageUrl: "/v28.png" },
];

const categories = [
  "All",
  "Heavy Fabrication",
  "Precision Machining",
  "Conveyor Systems & Spares",
  "Site Work & Assemblies",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return allProjects;
    return allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Navbar />

      <main className={styles.mainWrapper}>
        <section className={styles.galleryPageHeader}>
          <div className="container px-4 px-md-5">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <div className="section-badge justify-content-center">Gallery Archive</div>
                <h1 className={styles.pageTitle}>Engineering Excellence in Action</h1>
                <p className={styles.pageSubtitle}>
                  Explore our complete collection of manufactured machinery, custom fabrications, 
                  high-precision machining works, and heavy-duty site assemblies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Navigation */}
        <section className={styles.filterSection}>
          <div className="container px-4 px-md-5">
            <div className={styles.filterTabs}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterTab} ${activeCategory === cat ? styles.filterTabActive : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Grid */}
        <section className={styles.gridSection}>
          <div className="container px-4 px-md-5">
            <div className={styles.galleryGrid}>
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={styles.galleryItem}
                  onClick={() => setSelectedImage(project.imageUrl)}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={styles.projectImage}
                    loading="lazy"
                  />
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

            {filteredProjects.length === 0 && (
              <div className="text-center py-5">
                <p className="text-muted">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
            <i className="bi bi-x-lg"></i>
          </button>
          <img src={selectedImage} alt="Enlarged project view" className={styles.lightboxImg} />
        </div>
      )}

      {/* Standard site-wide Footer/Contact section */}
      <Contact />
    </>
  );
}
