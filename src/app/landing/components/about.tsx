import React from "react";
import styles from "../landing.module.scss";
import earthIcon from "@/assets/images/icons/earth.svg";
import about from "@/assets/images/photos/2.webp";
import starBg from "@/assets/images/icons/star-circle.svg";
import curvedArrow from "@/assets/images/curved-arrow.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, fadeInLeft } from "@/app/constants/animation";
const About = () => {
  return (
    <section className={styles["about"]}>
      <div className="auto__container">
        <div className={styles["about__inner"]}>
          <div className={styles["about__inner-col"]}>
            <div className={styles["about__inner-title"]}>
              <motion.h2 {...fadeInLeft(0.2)}>About me</motion.h2>
              <motion.p {...fadeInLeft(0.4)}>
                Hi, I'm Madilyani a passionate and creative front-end developer
                with a love for crafting engaging and visually stunning user
                experiences. With a strong eye for design and a deep
                understanding of modern web technologies, I bring ideas to life
                through clean, responsive, and interactive code.
              </motion.p>
            </div>
            <motion.div
              {...fadeIn(0.6)}
              className={styles["about__inner-arrow"]}
            >
              <Image src={curvedArrow} alt="curved arrow" />
            </motion.div>
          </div>
          <div className={styles["aboutCard"]} id="card">
            <div className="aboutCard__icon">
              <Image width={24} height={24} src={earthIcon} alt="earthIcon" />
            </div>
            <h2>35%</h2>
            <p>
              World domination on Fiverr platform as top rated seller last 4+
              years.
            </p>
            <div className={styles["aboutCard__image"]}>
              <Image src={about} alt="about" />
            </div>
          </div>
          <div className={styles["about__inner-col"]}>
            <ul>
              <motion.li {...fadeIn(0.2)}>
                <span>
                  <Image
                    width={33}
                    height={33}
                    style={{ height: "auto" }}
                    src={starBg}
                    alt="star icon"
                  />
                </span>
                <p>
                  With over 5+ years in web front-end development, I’ve honed my
                  skills in building responsive, accessible, and visually
                  captivating websites.
                </p>
              </motion.li>
              <motion.li {...fadeIn(0.4)}>
                <span>
                  <Image width={33} height={33} src={starBg} alt="star icon" />
                </span>
                <p>
                  As a top-rated seller on Fiverr, I’ve had the privilege of
                  working with clients from around the world, delivering
                  high-quality front-end development services that consistently
                  exceed expectations
                </p>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export { About };
