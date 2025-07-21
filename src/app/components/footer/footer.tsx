import { github, instagram, telegram, whatsapp } from "@/app/constants/SVG";
import React from "react";
import styles from "./footer.module.scss";
import about from "@/assets/images/photos/3.webp";
import fiverr from "@/assets/images/icons/fiverr.svg";
import Image from "next/image";
import photo from "@/assets/images/photos/1.webp";
const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className="auto__container">
        <div className={styles["footer__inner"]}>
          <div className={styles["footer__inner-row"]}>
            <div className={styles["footer__inner-main"]}>
              <div className={styles["footerImage"]}>
                <Image src={about} alt="about" />
                <a
                  href="https://www.fiverr.com/madilyani/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="contact fiverr"
                >
                  <Image src={fiverr} alt="fiverr" />
                </a>
              </div>
              <div className={styles["footerTitle"]}>
                <div className={styles["footerTitle__lets"]}>
                  Let’s Build Something Great Together!
                </div>
                <p className="sm">
                  Visit my Fiverr profile to get started on your next project
                  today.
                </p>
              </div>
            </div>
            <div className={styles["footer__inner-social"]}>
              <a
                href="https://www.instagram.com/dev_madilyani1"
                aria-label="contact"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {instagram}
                Instagram
              </a>
              <a
                href="https://t.me/madilyani"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="contact"
              >
                {telegram}
                Telegram
              </a>
              <a
                href="https://github.com/madilyani/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="contact"
              >
                {github}
                Github
              </a>
              <a
                href="https://wa.me/99365817018"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="contact"
              >
                {whatsapp}
                WhatsApp
              </a>
            </div>
            <div className={styles["footer__inner-links"]}>
              <div className={styles["footer__inner-col"]}>
                <a href="#about" aria-label="go to section">
                  About me
                </a>
                <a aria-label="go to section" href="#portfolio">
                  Portfolio
                </a>
                <a aria-label="go to section" href="#experience">
                  Experience
                </a>
              </div>
              <div className={styles["footer__inner-col"]}>
                <a aria-label="go to section" href="#testimonials">
                  Testimonials
                </a>
                <a aria-label="go to section" href="#contact">
                  Contact me
                </a>
              </div>
            </div>
          </div>
          <div className={styles["footer__inner-copy"]}>
            <div className={styles["footer__inner-side"]}>
              <a
                aria-label="go to section"
                href="#hero"
                className={styles["footer__inner-logo"]}
              >
                <span>
                  <Image src={photo} alt="photo" />
                </span>
                <b>D.Madilyani</b>
              </a>
              <p className="ex">© 2024</p>
            </div>
            <div className={styles["footer__inner-terms"]}>
              <a
                aria-label="Contact"
                href="https://www.instagram.com/dev_madilyani1"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                @dev_madilyani1
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export { Footer };
