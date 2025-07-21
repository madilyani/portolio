"use client";
import React, { useRef } from "react";
import styles from "../landing.module.scss";
import { arrowRight } from "@/app/constants/SVG";
import { IServiceItem, servicesList } from "@/app/constants/modul";
import asteriks from "@/assets/images/icons/asterisk.svg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, fadeInLeft, fadeInUp } from "@/app/constants/animation";
const ServiceItem = ({
  itemData,
  index,
  scrollYProgress,
}: {
  itemData: IServiceItem;
  index: number;
  scrollYProgress: any;
}) => {
  return (
    <motion.div
      style={{
        y: useTransform(scrollYProgress, [0, 0.8], [0, index * 100]),
      }}
      className={styles["servicesCard"]}
    >
      <div className={styles["servicesCard__title"]}>
        <span style={{ backgroundColor: itemData.iconColor }}></span>
        <b>{itemData.title}</b>
      </div>
      <p className="sm">{itemData.description}</p>
      <ul>
        {itemData.features.map((item, index) => {
          return (
            <li key={index}>
              <span>
                <Image src={asteriks} alt="asteriks" />
              </span>
              <p className="sm">{item}</p>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
const Services = () => {
  const section = useRef(null);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  });
  return (
    <section className={styles["services"]} id="services" ref={section}>
      <div className="auto__container">
        <div className={styles["services__inner"]}>
          <div className={styles["services__inner-top"]}>
            <div className="title">
              <motion.div {...fadeInLeft(0.2)} className="title__semi">
                <span style={{ backgroundColor: "#4BAE80" }}></span>
                Services
              </motion.div>
              <h2>
                <motion.span {...fadeInLeft(0.3)}>Build. Design.</motion.span>{" "}
                <motion.span {...fadeInLeft(0.4)}>Optimize.</motion.span>
              </h2>
            </div>
            <motion.div
              {...fadeIn(0.4)}
              style={{
                y: useTransform(scrollYProgress, [0, 0.8], [0, 100]),
              }}
              className={styles["services__inner-text"]}
            >
              <p className="sm">
                As a creative front-end developer, I provide a range of services
                designed to bring your digital vision to life. From custom
                website development to seamless user experiences, I specialize
                in building high-quality, responsive, and engaging websites
                tailored to meet your unique needs.
              </p>
              <a
                href="#contact"
                aria-label="go to section"
                className={styles["services__inner-link"]}
              >
                <b>Book a call</b>
                <span>{arrowRight}</span>
              </a>
            </motion.div>
          </div>
          <div className={styles["services__inner-row"]}>
            {servicesList.map((item, index) => {
              return (
                <ServiceItem
                  scrollYProgress={scrollYProgress}
                  index={index}
                  key={index}
                  itemData={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export { Services };
