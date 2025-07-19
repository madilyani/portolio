"use client";
import { arrowRight } from "@/app/constants/SVG";
import React, { useState } from "react";
import styles from "../landing.module.scss";
import { ITestimonialItem, testimonialsList } from "@/app/constants/modul";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import { fadeIn, fadeInLeft, fadeInUp } from "@/app/constants/animation";
const ReviewItem = ({
  itemData,
  active,
  setActive,
}: {
  active: string | null;
  itemData: ITestimonialItem;
  setActive: (value: string | null) => void;
}) => {
  return (
    <motion.div
      {...fadeInUp(0.2)}
      className={classNames(styles["testimonialsItem"], {
        [styles.active]: active === itemData.id,
      })}
    >
      <div
        className={styles["testimonialsItem__head"]}
        onClick={() => {
          if (active === itemData.id) {
            setActive(null);
          } else {
            setActive(itemData.id);
          }
        }}
      >
        <div className={styles["testimonialsItem__num"]}>
          <h5>{itemData.id}</h5>
        </div>
        <div className={styles["testimonialsItem__info"]}>
          <div className={styles["testimonialsItem__avatar"]}>
            <Image width={80} height={80} src={itemData.avatar} alt="avatar" />
          </div>
          <div className={styles["testimonialsItem__name"]}>
            <h5>{itemData.name}</h5>
            <p className="ex">{itemData.profession}</p>
          </div>
        </div>
        <div className={styles["testimonialsItem__button"]}>
          <h5>{active ? "Close" : "Read review"}</h5>
          {arrowRight}
        </div>
      </div>
      <AnimatePresence>
        {active === itemData.id && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, height: 0 }}
            className={styles["testimonialsItem__body"]}
          >
            <p className="sm">{itemData.text}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
const Reviews = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section className={styles["testimonials"]}>
      <div className="auto__container">
        <div className={styles["testimonials__inner"]}>
          <div className="title">
            <motion.h5 {...fadeInLeft(0.2)}>
              <span style={{ backgroundColor: "#934FF0" }}></span>
              Testimonials
            </motion.h5>
            <h2>
              <motion.span {...fadeInLeft(0.3)}>Hear from</motion.span>{" "}
              <motion.span {...fadeInLeft(0.4)}>My Clients</motion.span>
            </h2>
          </div>
          <div className={styles["testimonials__inner-content"]}>
            {testimonialsList.map((item, index) => {
              return (
                <ReviewItem
                  active={active}
                  setActive={setActive}
                  itemData={item}
                  key={index}
                />
              );
            })}
          </div>
          <motion.div {...fadeInUp(0.4)}>
            <a
              target="_blank"
              href="https://www.fiverr.com/madilyani"
              aria-label="Contact"
              className={styles["testimonials__inner-btn"]}
            >
              Show more reviews
              {arrowRight}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export { Reviews };
