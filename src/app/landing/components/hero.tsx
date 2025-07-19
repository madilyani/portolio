import React from "react";
import styles from "../landing.module.scss";
import image from "@/assets/images/hero.webp";
import arrowIcon from "@/assets/images/icons/arrow-right.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft } from "@/app/constants/animation";
const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <div className="auto__container">
        <div className={styles["hero__inner"]}>
          <div className={styles["hero__inner-side"]}>
            <p>Create Digitally</p>
            <span></span>
            <p>2025</p>
          </div>
          <div className={styles["hero__inner-content"]}>
            <div className={styles["hero__inner-content-top"]}>
              <div className={styles["hero__inner-info"]}>
                <div className={styles["heroItem"]}>
                  <div className={styles["heroItem__number"]}>
                    <sup>+</sup>
                    <b>790</b>
                  </div>
                  <p className="sm">Projects completed</p>
                </div>
                <div className={styles["heroItem"]}>
                  <div className={styles["heroItem__number"]}>
                    <sup>+</sup>
                    <b>20</b>
                  </div>
                  <p className="sm">Startup raised</p>
                </div>
              </div>
              <div className={styles["hero__inner-title"]}>
                <motion.h1 {...fadeInLeft(0.3)} id="txt">
                  Hello
                </motion.h1>
                <motion.p {...fadeInLeft(0.5)}>
                  It’s D.madilyani web front end dev. UI/UX expert.
                </motion.p>
              </div>
            </div>

            <a
              href="#about"
              className={styles["hero__inner-scroll"]}
              aria-label="go to section"
            >
              <b>Scroll down</b>
              <span>
                <Image src={arrowIcon} alt="arrow right" />
              </span>
            </a>
          </div>
          <div className={styles["hero__inner-image"]}>
            <Image src={image} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};
export { Hero };
