import { Variants } from "framer-motion";

export const fadeInLeft = (delay: number = 0): Variants => ({
  initial: {
    opacity: 0,
    x: -30,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay,
    },
  },
});
export const fadeIn = (delay: number = 0): Variants => ({
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay,
    },
  },
});
export const fadeInUp = (delay: number = 0): Variants => ({
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delay,
    },
  },
});
