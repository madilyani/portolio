import React from "react";
import styles from "../landing.module.scss";
import { arrowRight } from "@/app/constants/SVG";
import { IServiceItem, servicesList } from "@/app/constants/modul";
import asteriks from "@/assets/images/icons/asterisk.svg";
import Image from "next/image";
const ServiceItem = ({ itemData }: { itemData: IServiceItem }) => {
  return (
    <div className={styles["servicesCard"]}>
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
    </div>
  );
};
const Services = () => {
  return (
    <section className={styles["services"]} id="services">
      <div className="auto__container">
        <div className={styles["services__inner"]}>
          <div className={styles["services__inner-top"]}>
            <div className="title">
              <div className="title__semi">
                <span style={{ backgroundColor: "#4BAE80" }}></span>
                Services
              </div>
              <h2>Build. Design.</h2>
              <h2>Optimize.</h2>
            </div>
            <div className={styles["services__inner-text"]}>
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
            </div>
          </div>
          <div className={styles["services__inner-row"]}>
            {servicesList.map((item, index) => {
              return <ServiceItem key={index} itemData={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export { Services };
