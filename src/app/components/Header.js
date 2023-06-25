import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/app/styles/navbar.module.css";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src="/next.svg" alt="logo" width={150} height={40} />
        </Link>
      </div>
      <nav className={styles.navbar}>
        <div>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <Link className={styles.navbarLink} href={"/"}>
                Home
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link className={styles.navbarLink} href={"/about"}>
                About
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link className={styles.navbarLink} href={"/movie"}>
                Movie
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link className={styles.navbarLink} href={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
