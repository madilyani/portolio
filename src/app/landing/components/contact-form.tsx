"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  crossIcon,
  fiverr,
  github,
  instagram,
  telegram,
  tickIcon,
  whatsapp,
} from "@/app/constants/SVG";
import styles from "../landing.module.scss";
import { FormField } from "@/app/components/form-field";
import { TextField } from "@/app/components/text-field";
import classNames from "classnames";
import { fadeInUp } from "@/app/constants/animation";
interface IForm {
  name: string;
  email: string;
  message: string;
}
const ContactForm = () => {
  const section = useRef(null);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  });
  let contact = useRef(null);
  const [submited, setSubmited] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const updateForm = (data: Partial<IForm>) => {
    setForm((prevForm) => ({ ...prevForm, ...data }));
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "13b18719-1bf4-4bea-a72a-ee52a5c560b9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setSubmited("success");
      setTimeout(() => {
        setSubmited(null);
      }, 5000);
    } else {
      setSubmited("error");
      setTimeout(() => {
        setSubmited(null);
      }, 5000);
    }
  };

  return (
    <section className={styles["contact"]} ref={section}>
      <div className={styles["contact__anchor"]} ref={contact}></div>
      <div className="auto__container">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0, 0.6], [1.2, 1]),
          }}
          className={styles["contact__inner"]}
        >
          <div className={styles["contact__inner-row"]}>
            <div className={styles["contact__inner-content"]} id="contact">
              <div className="title">
                <div className="title__semi">
                  <span style={{ backgroundColor: "#EB8B37" }}></span>
                  Contact me
                </div>
                <h2>
                  Let’s Get in <br />
                  Touch
                </h2>
              </div>
              <p className="ex">Fill the form or follow on:</p>
              <div className={styles["contact__inner-social"]}>
                <a
                  href="https://t.me/madilyani"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Contact"
                >
                  {telegram}
                </a>
                <a
                  href="https://github.com/madilyani/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Contact"
                >
                  {github}
                </a>
                <a
                  href="https://www.instagram.com/dev_madilyani1"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Contact"
                >
                  {instagram}
                </a>
                <a
                  href="https://wa.me/99365817018"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Contact"
                  className={styles["mid"]}
                >
                  {whatsapp}
                </a>
                <a
                  href="https://www.fiverr.com/madilyani/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Contact"
                  className={styles["big"]}
                >
                  {fiverr}
                </a>
              </div>
            </div>
            {submited === "success" ? (
              <div className={styles["contact__inner-thanks"]}>
                <div className={styles["contact__inner-thanks-tick"]}>
                  {tickIcon}
                </div>
                <motion.h3 {...fadeInUp(0.1)}>Thanks </motion.h3>
                <motion.p {...fadeInUp(0.2)}>
                  Thank you for submitting the contact form. I’ll respond to
                  your message as soon as possible.
                </motion.p>
              </div>
            ) : submited === "error" ? (
              <div className={styles["contact__inner-thanks"]}>
                <div
                  className={classNames(
                    styles["contact__inner-thanks-tick"],
                    submited === "error" && styles["error"]
                  )}
                >
                  {crossIcon}
                </div>
                <motion.h3 {...fadeInUp(0.1)}>Oops! </motion.h3>
                <motion.p {...fadeInUp(0.2)}>
                  Something went wrong. Please try again or contact us.
                </motion.p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className={styles["contact__inner-form"]}
              >
                <div className={styles["input"]}>
                  <FormField
                    type="name"
                    placeholder="Name"
                    onChange={(e) => updateForm({ name: e.target.value })}
                  />
                </div>
                <div className={styles["input"]}>
                  <FormField
                    type="email"
                    placeholder="Email"
                    onChange={(e) => updateForm({ email: e.target.value })}
                  />
                </div>
                <div className={styles["input"]}>
                  <TextField
                    row={3}
                    placeholder="Your message"
                    onChange={(e) => updateForm({ message: e.target.value })}
                  />
                </div>
                <button
                  disabled={
                    form.name === "" || form.email === "" || form.message === ""
                  }
                  type="submit"
                  aria-label="Submit contact form"
                  className={styles["contact__inner-btn"]}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export { ContactForm };
