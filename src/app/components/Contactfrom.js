"use client";

import { useState } from "react";
import styles from "@/app/styles/contact.module.css";
const Contactfrom = () => {
  const initialdata = {
    username: "",
    email: "",
    phone: "",
    message: "",
  };
  const [user, setUser] = useState(initialdata);

  const [status, setStatus] = useState(null);

  const handlechnage = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form className={styles.contact_form} onSubmit={handlesubmit}>
      <div className={styles.input_field}>
        <lable htmlFor="username" className={styles.label}>
          Enter your name
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            value={user.username}
            required
            onChange={handlechnage}
          />
        </lable>
      </div>
      <div className={styles.input_field}>
        <lable htmlFor="email" className={styles.label}>
          Enter your email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            value={user.email}
            required
            onChange={handlechnage}
          />
        </lable>
      </div>
      <div className={styles.input_field}>
        <lable htmlFor="number" className={styles.label}>
          Enter your number
          <input
            type="number"
            name="phone"
            id="number"
            placeholder="1234567890"
            value={user.phone}
            required
            onChange={handlechnage}
          />
        </lable>
      </div>
      <div className={styles.input_field}>
        <lable htmlFor="message" className={styles.label}>
          Message
          <textarea
            rows={5}
            name="message"
            id="message"
            placeholder="Enter your message"
            value={user.message}
            required
            onChange={handlechnage}
          />
        </lable>
      </div>
      <div>
        {status === "success" && (
          <p className={styles.success_msg}>Thank you for your message!</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There was an error submitting your message. Please try again.
          </p>
        )}
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default Contactfrom;
