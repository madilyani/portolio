"use client";
import { expList, IExpItem } from "@/app/constants/modul";
import classNames from "classnames";
import React, { useState } from "react";
import styles from "../landing.module.scss";
import { arrowRight } from "@/app/constants/SVG";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, fadeInLeft, fadeInUp } from "@/app/constants/animation";
const ExperienceItem = ({
  itemData,
  isActive,
  setIsActive,
  index,
}: {
  itemData: IExpItem;
  isActive: string | null;
  setIsActive: (value: string | null) => void;
  index: number;
}) => {
  return (
    <motion.div
      {...fadeInUp(index * 0.1)}
      className={styles["experienceItem"]}
      onClick={() => {
        if (itemData.id === isActive) {
          setIsActive(null);
        } else {
          setIsActive(itemData.id);
        }
      }}
    >
      <div
        className={classNames(styles["experienceItem__head"], {
          [styles.active]: itemData.id === isActive,
        })}
      >
        <div className={styles["experienceItem__title"]}>
          <div className={styles["experienceItem__title-semi"]}>
            {itemData.title}
          </div>
          <p>{itemData.time}</p>
        </div>
        <div className={styles["experienceItem__head-row"]}>
          {itemData.skills.map((item, index) => {
            return (
              <div className={styles["experienceItem__tag"]} key={index}>
                {item.value}
              </div>
            );
          })}
          <button
            aria-label="Open or close experience item"
            type="button"
            className={styles["experienceItem__arrow"]}
          >
            {arrowRight}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isActive === itemData.id && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, height: 0 }}
            className={styles["experienceItem__body"]}
          >
            <div className={styles["experienceItem__row"]}>
              {itemData.icons.map((item, index) => {
                return (
                  <div className={styles["experienceItem__image"]} key={index}>
                    <div className={styles["experienceItem__image-inner"]}>
                      {item.icon}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles["experienceItem__text"]}>
              {itemData.description}
            </div>
            <button
              type="button"
              aria-label="Open or close experience item"
              className={styles["experienceItem__arrow"]}
            >
              {arrowRight}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
const Experience = () => {
  const [isActive, setIsActive] = useState<string | null>(null);

  return (
    <section className={styles["experience"]}>
      <div className="auto__container">
        <div className={styles["experience__inner"]}>
          <div className={styles["experience__inner-top"]}>
            <div className="title">
              <motion.h5 {...fadeInLeft(0.2)}>
                <span style={{ backgroundColor: "#CF3266" }}></span>
                Experience
              </motion.h5>
              <h2>
                <motion.span {...fadeInLeft(0.3)}>Explore my</motion.span>{" "}
                <motion.span {...fadeInLeft(0.4)}>Journey</motion.span>
              </h2>
            </div>
            <motion.div
              {...fadeIn(0.6)}
              className={styles["experience__inner-text"]}
            >
              <p className="sm">
                As a top-rated seller on Fiverr i had opportunitoes like:
                building custom websites, optimizing user experiences, or
                solving complex coding challenges, I take pride in providing
                solutions that meet both business goals and user needs.
              </p>
              <a
                href="#contact"
                className={styles["experience__inner-link"]}
                aria-label="go to section"
              >
                <b>Book a call</b>
                <span>{arrowRight}</span>
              </a>
            </motion.div>
          </div>
          <div className={styles["experience__inner-content"]}>
            {expList.map((item, index) => {
              return (
                <ExperienceItem
                  isActive={isActive}
                  setIsActive={setIsActive}
                  itemData={item}
                  index={index}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export { Experience };
