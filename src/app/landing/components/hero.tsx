"use client";
import React, { useEffect, useState } from "react";
import styles from "../landing.module.scss";
import image from "@/assets/images/hero.webp";
import imageMobile from "@/assets/images/heroMobile.webp";

import arrowIcon from "@/assets/images/icons/arrow-right.svg";
import Image from "next/image";
import { fadeInLeft } from "@/app/constants/animation";
import { arrowRight } from "@/app/constants/SVG";
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
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
                  <p className="sm">Web Projects Delivered</p>
                </div>
                <div className={styles["heroItem"]}>
                  <div className={styles["heroItem__number"]}>
                    <sup>+</sup>
                    <b>20</b>
                  </div>
                  <p className="sm">Startups Funded via My Wor</p>
                </div>
              </div>
              <div className={styles["hero__inner-title"]}>
                <h1 id="txt">Hello</h1>
                <div className={styles["hero__inner-semi"]}>
                  I'm D. Madilyani, Frontend Developer & UI Designer
                </div>
                <div className={styles["hero__inner-text"]}>
                  I build <strong>lightning-fast websites</strong> with Next.js
                  and craft <strong>conversion-focused designs</strong> in Figma
                  for startups and businesses.
                </div>
                <div className="sr-only" aria-hidden="true">
                  <h2>React Developer Portfolio</h2>
                  <p>
                    Freelance web developer and UI designer available for hire
                  </p>
                  <p>
                    Services: Website development, Figma design, UX consulting
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#about"
              className={styles["hero__inner-scroll"]}
              aria-label="View my frontend development portfolio projects"
            >
              <b>Explore My Work</b>
              <span>
                <Image src={arrowIcon} alt="arrow right" />
              </span>
            </a>
          </div>
          <div className={styles["hero__inner-image"]}>
            <Image
              src={isMobile ? imageMobile : image}
              alt={
                isMobile
                  ? "D. Madilyani - Frontend developer working on mobile design"
                  : "D. Madilyani - Professional web developer workspace setup"
              }
              fetchPriority="high"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export { Hero };
