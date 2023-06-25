import React from "react";
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";
const Herosection = ({ title }) => {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <h1>{title}</h1>
            <p>
              From award-winings drama to blockbaster actions movies,
              webserise.Browse our selection of the latest gretest movies and
              find your new favorite today.{" "}
            </p>
            <Link href={"/movie"}>
              <button>Explore Movies</button>
            </Link>
          </div>
          <div className={heroStyles.hero_image}>
            {/* <Image /> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Herosection;
