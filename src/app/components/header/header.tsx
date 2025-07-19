"use client";
import classNames from "classnames";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";
import arrowIcon from "@/assets/images/icons/arrow-right.svg";
import Image from "next/image";
import photo from "@/assets/images/photos/1.webp";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const header = useRef(null);
  useEffect(() => {
    const scrollFunc = () => {
      if (window.scrollY >= 60) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", scrollFunc);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenu(false);
    document.body.classList.remove("active");
  }, []);
  const closeFunc = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    if (e.currentTarget === e.target) setMenu(false);
  };
  return (
    <header
      className={classNames(styles["header"], {
        [styles.sticky]: sticky,
      })}
      ref={header}
    >
      <div className="auto__container">
        <div className={styles["header__inner"]}>
          <a
            href="#"
            className={styles["header__inner-logo"]}
            aria-label="go to section"
          >
            <span>
              <Image src={photo} alt="photo" />
            </span>
            <b>D.Madilyani</b>
          </a>
          <nav
            className={classNames(styles["nav"], {
              [styles.active]: menu,
            })}
            onClick={closeFunc}
          >
            <div className={styles["nav__inner"]}>
              <ul className={styles["nav__inner-links"]}>
                <li>
                  <a aria-label="go to section" href="#about">
                    About Me
                  </a>
                </li>
                <li>
                  <a aria-label="go to section" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a aria-label="go to section" href="#experience">
                    Experience
                  </a>
                </li>{" "}
                <li>
                  <a aria-label="go to section" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a aria-label="go to section" href="#testimonials">
                    Testimonials
                  </a>
                </li>
              </ul>
              <a
                aria-label="go to section"
                href="#contact"
                className={styles["nav__inner-button"]}
              >
                <b>Book a call</b>
                <span>
                  <Image src={arrowIcon} alt="arrow right" />
                </span>
              </a>
            </div>
          </nav>
          <div
            className={classNames(styles["burger"], {
              [styles.active]: menu,
            })}
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};
export { Header };
