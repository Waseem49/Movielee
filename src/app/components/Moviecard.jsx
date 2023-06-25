import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
const Moviecard = (it) => {
  const { id, type, title, synopsis } = it.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={it.jawSummary.backgroundImage.url}
            alt={title}
            width={400}
            height={100}
          />
        </div>
        <div className={styles.card_data}>
          <h2>{title.substring(0, 18)}</h2>
          <p>{synopsis.substring(0, 66)} ...</p>
        </div>
        <button>
          <Link href={`/movie/${id}`}>Read More</Link>
        </button>
      </div>
    </>
  );
};

export default Moviecard;
