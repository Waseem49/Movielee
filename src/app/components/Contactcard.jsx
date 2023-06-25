import React from "react";
import styles from "@/app/styles/contact.module.css";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import Link from "next/link";
const Contactcard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
            <i>
              <MdEmail />{" "}
            </i>
            <h2>Email</h2>
            <p>Monday to Friday Expected </p>
            <p className={styles.last_para}>response time: 72 hours </p>
            <button>
              <Link href="mailto:mdwaseem0603@gmail.com">
                Send Email <span>-&gt;</span>
              </Link>
            </button>
          </div>

          <div className={styles.grid_card}>
            <i>
              <MdVoiceChat />{" "}
            </i>
            <h2>Live Chat</h2>
            <p>Weekdays: 9 AM — 6 PM ET</p>
            <p className={styles.last_para}>Weekends: 9 AM — 5 PM ET </p>
            <button>
              <Link href="tel:+918109608048">
                Call Now <span>-&gt;</span>
              </Link>
            </button>
          </div>

          <div className={styles.grid_card}>
            <i>
              <MdForum />{" "}
            </i>
            <h2>Community Forum</h2>
            <p>Monday to Friday Expected </p>
            <p className={styles.last_para}>response time: 72 hours </p>
            <button>
              <Link
                href="https://chat.whatsapp.com/KvzIxSWreDREzcfStCy8pB"
                className={styles.anchorLink}>
                Ask The Community <span>-&gt;</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactcard;
