"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Arrow from "../../public/icons/arrow.svg";
import Button from "../Button/Button";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    setIsOverlayVisible(!isOverlayVisible);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (window.innerWidth <= 968 && isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

    const handleResize = () => {
      setIsOpen(false);
      window.addEventListener("resize", handleResize);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const navItems = [
    {
      text: "Our Solutions",
      href: "/",
    },
    {
      text: "About Us",
      href: "/",
    },
    {
      text: "Blog",
      href: "/",
    },
    {
      text: "Docs",
      href: "/",
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoBox}>
          <Link href='/' className={styles.logo}>
            Firm & Focused
          </Link>
        </div>
        <ul
          className={
            isOpen === false
              ? styles.navMenu
              : `${styles.navMenu} ${styles.active}`
          }
        >
          {navItems.map((navItem, index) => (
            <li
              key={index}
              className={styles.navItem}
              onClick={() => setIsOpen(false)}
            >
              <Link href={navItem.href} className={styles.navItem}>
                <Arrow className={styles.icon} />
                {navItem.text}
              </Link>
            </li>
          ))}
          <div className={styles.btnContainer}>
            <Button btnType='primary' text='Request Demo' href='/' />
          </div>
        </ul>
        {isOpen && (
          <div
            className={`${styles.overlay} ${
              isOverlayVisible ? styles.visible : ""
            }`}
            onClick={() => {
              setIsOpen(false);
              setIsOverlayVisible(false);
            }}
          ></div>
        )}
        <span
          className={
            isOpen === false
              ? styles.hamburger
              : `${styles.hamburger} ${styles.active}`
          }
          onClick={openMenu}
        >
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
        </span>
      </nav>
    </header>
  );
}
export default Nav;
