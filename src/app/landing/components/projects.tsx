"use client";
import { IProjectItem, projectsList } from "@/app/constants/modul";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import styles from "../landing.module.scss";
import { Navigation } from "swiper/modules";
import { arrowRight, chevronLeft, chevronRight } from "@/app/constants/SVG";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp } from "@/app/constants/animation";
import classNames from "classnames";
const ProjectsItem = ({ itemData }: { itemData: IProjectItem }) => {
  return (
    <div className={styles["projectsItem"]}>
      <div className={styles["projectsItem__image"]}>
        <Image
          width={260}
          height={240}
          src={itemData.image}
          alt="React frontend project"
        />
        <a
          href={itemData.link}
          target="_blank"
          aria-label={itemData.title}
          className={styles["projectsItem__link"]}
        ></a>
      </div>
      <div className={styles["projectsItem__content"]}>
        <div className={styles["projectsItem__content-title"]}>
          {itemData.title}
        </div>
        <p>{itemData.text}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className={styles["projects"]}>
      <div className="auto__container">
        <div className={styles["projects__inner"]}>
          <div className="title">
            <motion.div className="title__semi" {...fadeInLeft(0.2)}>
              <span style={{ backgroundColor: "#ebc23a" }}></span>
              <b>Portfolio</b>
            </motion.div>

            <h2>
              <motion.span {...fadeInLeft(0.3)}>Bringing Ideas</motion.span>{" "}
              <motion.span {...fadeInLeft(0.4)}>to Life</motion.span>
            </h2>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              1024: {
                spaceBetween: 20,
                slidesPerView: 3,
              },
            }}
            className={styles["projects__inner-slider"]}
          >
            {projectsList.map((item, index) => {
              return (
                <SwiperSlide>
                  <ProjectsItem itemData={item} key={index} />
                </SwiperSlide>
              );
            })}
            <div className={styles["arrows"]}>
              <button
                className={styles["arrow"]}
                aria-label="Previous slide"
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                {chevronLeft}
              </button>
              <button
                className={classNames(styles["arrow"], styles["next"])}
                aria-label="Next slide"
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
              >
                {chevronRight}
              </button>
            </div>
          </Swiper>
        </div>
        <motion.div {...fadeInUp(0.4)}>
          <a
            target="_blank"
            href="https://www.fiverr.com/madilyani"
            aria-label="Contact"
            className={styles["projects__inner-btn"]}
          >
            Show more projects
            {arrowRight}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export { Projects };
