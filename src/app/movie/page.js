import Link from "next/link";
import React from "react";
import Moviecard from "../components/Moviecard";
import styles from "@/app/styles/common.module.css";

const movie = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  const url = process.env.API_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b2e78afcbamsh9c50e9536ffa1f3p1c737bjsn9abdc7ff3137",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  const data = result.titles;
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {data.map((it, i) => (
              <Moviecard key={it.i} {...it} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default movie;