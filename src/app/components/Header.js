"use client";
import Image from "next/image";
import Link from "next/link";
import { CgCloseR, CgMenu } from "react-icons/cg";
import { useState } from "react";
import styles from "@/app/styles/navbar.module.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={300} height={200} />
        </Link>
      </div>
      <nav className={styles.navbar}>
        <div className={openMenu ? `${styles.active}` : ""}>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                href="/"
                onClick={() => setOpenMenu(false)}>
                Home
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                href="/about"
                onClick={() => setOpenMenu(false)}>
                About
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                onClick={() => setOpenMenu(false)}
                href="/movie">
                Movie
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                onClick={() => setOpenMenu(false)}
                href="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* //nav icon */}
          <div className={styles["mobile-navbar-btn"]}>
            <CgMenu
              name="menu-outline"
              className={styles["mobile-nav-icon"]}
              onClick={() => setOpenMenu(true)}
            />
            <CgCloseR
              name="close-outline"
              className={`${styles["mobile-nav-icon"]} ${styles["close-outline"]}`}
              onClick={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
