"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const links = [
    {
      href: "#presentation",
      label: "Présentation",
      aria: "Aller à la section Présentation",
    },
    {
      href: "#competences",
      label: "Compétences",
      aria: "Aller à la section Compétences",
    },
    { href: "#projets", label: "Projets", aria: "Aller à la section Projets" },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 762px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Effet de scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    const wasOpen = isOpen;
    setIsOpen((prev) => !prev);
    if (wasOpen) {
      buttonRef.current?.focus();
    }
  };

  return (
    <header
      className={`${styles.siteHeader} ${isScrolled ? styles.shrink : ""}`}
      aria-label="En-tête du site contenant la navigation principale"
    >
      <nav role="navigation" aria-label="Menu principal" className={styles.nav}>
        {isMobile ? (
          <>
            <button
              ref={buttonRef}
              className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}
              onClick={toggleMenu}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              aria-controls="menu-mobile"
            >
              <span className={styles.burgerBar} aria-hidden="true"></span>
              <span className={styles.burgerBar} aria-hidden="true"></span>
              <span className={styles.burgerBar} aria-hidden="true"></span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  id="menu-mobile"
                  className={styles.navMenu}
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  aria-label="Menu de navigation mobile"
                  role="menu"
                >
                  {links.map(({ href, label, aria }) => (
                    <li key={href} className={styles.navItem} role="none">
                      <a
                        href={href}
                        onClick={toggleMenu}
                        aria-label={aria}
                        role="menuitem"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        ) : (
          <ul
            className={styles.navMenuDesktop}
            aria-label="Menu de navigation desktop"
          >
            {links.map(({ href, label, aria }) => (
              <li key={href} className={styles.navItem}>
                <a href={href} aria-label={aria}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
