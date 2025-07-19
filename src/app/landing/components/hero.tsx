"use client";
import React, { useEffect, useState } from "react";
import styles from "../landing.module.scss";
import image from "@/assets/images/hero.webp";
import imageMobile from "@/assets/images/heroMobile.webp";

import arrowIcon from "@/assets/images/icons/arrow-right.svg";
import Image from "next/image";
import { fadeInLeft } from "@/app/constants/animation";
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
                <h1 id="txt">Hello</h1>
                <div className={styles["hero__inner-semi"]}>
                  {" "}
                  It’s D.madilyani, Frontend Developer & UI Designer
                </div>
                <div>
                  I build fast, responsive websites with <strong>React</strong>{" "}
                  and design user interfaces in <strong>Figma</strong>.
                </div>
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
            <Image
              src={isMobile ? imageMobile : image}
              alt={isMobile ? "Mobile content" : "Desktop content"}
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
