"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled || isOpen ? styles.scrolled : ""} navbar navbar-expand-lg fixed-top`}>
      <div className="container px-4 px-md-5">
        {/* Brand Logo */}
        <a className={`${styles.logoContainer} navbar-brand d-flex align-items-center`} href="#home" onClick={closeMenu}>
          <div className={styles.logoBadge}>V</div>
          <div className="d-flex flex-column ms-2 text-start">
            <span className={styles.brandName}>Versan Engineering</span>
          </div>
        </a>

        {/* Mobile Action buttons (Visible on Mobile) */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <a className={styles.phoneButtonMobile} href="tel:+917942534385" aria-label="Call Versan Engineering">
            <i className="bi bi-telephone-fill"></i>
          </a>
          <button 
            className={styles.menuToggle} 
            onClick={toggleMenu} 
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            <i className={`bi ${isOpen ? "bi-x" : "bi-list"}`}></i>
          </button>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="collapse navbar-collapse justify-content-end d-none d-lg-flex" id="navbarNav">
          <ul className={`${styles.navList} navbar-nav align-items-center gap-4`}>
            <li className="nav-item">
              <a className={styles.navLink} href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href="#why-choose-us">Why Choose Us</a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href="#gallery">Projects</a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href="#contact">Contact</a>
            </li>
            <li className="nav-item ms-3">
              <a className={styles.phoneButton} href="tel:+917942534385">
                <i className="bi bi-telephone me-2"></i>
                +91 7942534385
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Glassmorphic Sliding Dropdown Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
        <ul className={styles.mobileNavList}>
          <li>
            <a className={styles.mobileNavLink} href="#about" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a className={styles.mobileNavLink} href="#services" onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a className={styles.mobileNavLink} href="#why-choose-us" onClick={closeMenu}>Why Choose Us</a>
          </li>
          <li>
            <a className={styles.mobileNavLink} href="#gallery" onClick={closeMenu}>Projects</a>
          </li>
          <li>
            <a className={styles.mobileNavLink} href="#contact" onClick={closeMenu}>Contact</a>
          </li>
          <li className="mt-3 w-100">
            <a className={styles.mobilePhoneButton} href="tel:+917942534385">
              <i className="bi bi-telephone me-2"></i>
              +91 7942534385
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
