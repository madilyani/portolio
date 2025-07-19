"use client";
import { useEffect, useState } from "react";
import { About } from "./components/about";
import { ContactForm } from "./components/contact-form";
import { Experience } from "./components/experience";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Reviews } from "./components/reviews";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Lenis from "lenis";
import { Services } from "./components/services";
const Landing = () => {
  const [active, setActive] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const addListener = (ref: HTMLElement | null) => {
    if (!ref) return;
    ref.addEventListener("mouseover", () => {
      setActive(true);
    });
    ref.addEventListener("mouseleave", () => {
      setActive(false);
    });
  };
  const removeListener = (ref: HTMLElement | null) => {
    if (!ref) return;
    ref.removeEventListener("mouseover", () => {
      setActive(true);
    });
    ref.removeEventListener("mouseleave", () => {
      setActive(false);
    });
  };

  useEffect(() => {
    const moveCursor = (e: { clientX: number; clientY: number }) => {
      cursorX.set(e.clientX - 5);
      cursorY.set(e.clientY - 5);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  useEffect(() => {
    const txt = document.getElementById("txt");
    const card = document.getElementById("card");
    addListener(txt);
    addListener(card);
    return () => {
      removeListener(txt);
      removeListener(card);
    };
  }, []);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    <>
      <div className="anchor" id="hero"></div>
      <Hero />
      <div className="anchor" id="about"></div>
      <About />
      <div className="anchor" id="portfolio"></div>
      <Projects />
      <div className="anchor" id="experience"></div>
      <Experience />
      <div className="anchor" id="services"></div>
      <Services />
      <div className="anchor" id="testimonials"></div>
      <Reviews />
      <div className="anchor" id="contact"></div>
      <ContactForm />
      <motion.div
        className={"cursor " + (active ? "active" : "")}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        <span></span>
      </motion.div>
    </>
  );
};
export { Landing };
