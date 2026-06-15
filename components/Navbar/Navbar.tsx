"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

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
        <a className={`${styles.logoContainer} navbar-brand d-flex align-items-center`} href={isHome ? "#home" : "/#home"} onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Versan Engineering Logo"
            className={styles.logoImage}
          />
        </a>

        {/* Mobile Action buttons (Visible on Mobile) */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <a className={styles.phoneButtonMobile} href="tel:+919059057480" aria-label="Call Versan Engineering">
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
              <a className={styles.navLink} href={isHome ? "#about" : "/#about"}>About</a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href={isHome ? "#services" : "/#services"}>Services</a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href={isHome ? "#why-choose-us" : "/#why-choose-us"}>Why Choose Us</a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href={isHome ? "#gallery" : "/#gallery"}>Gallery</a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href={isHome ? "#contact" : "/#contact"}>Contact</a>
            </li>
            <li className="nav-item ms-3">
              <a className={styles.phoneButton} href="tel:+919059057480">
                <i className="bi bi-telephone me-2"></i>
                +91 90590 57480
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Glassmorphic Sliding Dropdown Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
        <ul className={styles.mobileNavList}>
          <li>
            <a className={styles.mobileNavLink} href={isHome ? "#about" : "/#about"} onClick={closeMenu}>About</a>
          </li>
          <li>
            <a className={styles.mobileNavLink} href={isHome ? "#services" : "/#services"} onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a className={styles.mobileNavLink} href={isHome ? "#why-choose-us" : "/#why-choose-us"} onClick={closeMenu}>Why Choose Us</a>
          </li>
          <li>
            <a className={styles.mobileNavLink} href={isHome ? "#gallery" : "/#gallery"} onClick={closeMenu}>Gallery</a>
          </li>
          <li>
            <a className={styles.mobileNavLink} href={isHome ? "#contact" : "/#contact"} onClick={closeMenu}>Contact</a>
          </li>
          <li className="mt-3 w-100">
            <a className={styles.mobilePhoneButton} href="tel:+919059057480">
              <i className="bi bi-telephone me-2"></i>
              +91 90590 57480
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
