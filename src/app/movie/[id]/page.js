import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const details = async ({ params }) => {
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve();
  //   }, 2000)
  // );
  const { id } = params;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b2e78afcbamsh9c50e9536ffa1f3p1c737bjsn9abdc7ff3137",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  const data = result[0].details;
  console.log(result[0].details);

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        Netflix\<span>{data.type}</span>
      </h2>
      <div className={styles.card_section}>
        <div>
          <Image
            src={data.backgroundImage.url}
            alt={data.title}
            width={600}
            height={300}
          />
        </div>
        <div>
          <h1>{data.title}</h1>
          <p>{data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default details;
