import React from "react";
import Contactcard from "../components/Contactcard";
import styles from "@/app/styles/contact.module.css";
import Contactfrom from "../components/Contactfrom";
const contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <Contactcard />
        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span>from you</span>
          </h2>
          <Contactfrom />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57317.44499236444!2d85.34513709325267!3d26.120444794549147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10e8a3175529%3A0x7c2d919680f759d!2sMuzaffarpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1687709050526!5m2!1sen!2sin"
        width={100}
        height={450}
        style={{ border: 5 }}
        allowfullscreen=""
        loading="lazy"
        className={styles.mapping}
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
};

export default contact;