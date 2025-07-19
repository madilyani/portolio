import { ReactNode } from "react";
import project1 from "@/assets/images/projects/1.webp";
import project2 from "@/assets/images/projects/2.webp";
import project3 from "@/assets/images/projects/3.webp";
import project4 from "@/assets/images/projects/4.webp";
import project5 from "@/assets/images/projects/5.webp";
import project7 from "@/assets/images/projects/7.webp";
import project8 from "@/assets/images/projects/8.webp";
import project9 from "@/assets/images/projects/9.webp";
import avatar1 from "@/assets/images/avatars/1.webp";
import avatar2 from "@/assets/images/avatars/2.webp";
import avatar3 from "@/assets/images/avatars/3.webp";
import avatar4 from "@/assets/images/avatars/4.webp";
import avatar5 from "@/assets/images/avatars/5.webp";
import avatar6 from "@/assets/images/avatars/6.webp";
import { StaticImageData } from "next/image";
import { cssIcon, figmaIcon, htmlIcon, pythonIcon, reactIcon } from "./SVG";
interface IExpItemSkill {
  id: string;
  value: string;
}
interface IExpItemIcons {
  id: string;
  icon: ReactNode;
}
export interface IExpItem {
  id: string;
  time: string;
  title: string;
  skills: IExpItemSkill[];
  icons: IExpItemIcons[];
  description: ReactNode;
}
export const expList = [
  {
    id: "1",
    title: "Fiverr - freelance",
    time: "March 2020 - Present",
    skills: [
      {
        id: "1",
        value: "html",
      },
      {
        id: "2",
        value: "react",
      },
      {
        id: "3",
        value: "typescript",
      },
      {
        id: "4",
        value: "javascript",
      },
      {
        id: "5",
        value: "figma",
      },
    ],
    icons: [
      {
        id: "1",
        icon: htmlIcon,
      },
      {
        id: "2",
        icon: cssIcon,
      },
      {
        id: "3",
        icon: reactIcon,
      },
      {
        id: "3",
        icon: figmaIcon,
      },
    ],
    description: (
      <>
        <p>
          Top-Rated Frontend Developer & UI/UX Specialist | Fiverr Pro Seller
        </p>
        <ul>
          <li>
            Ranked among the top-performing sellers on Fiverr, delivering 800+
            successful projects in frontend development, UI/UX design, and
            cross-browser compatibility.
          </li>
          <li>
            Built fully responsive, high-performance web applications from
            Figma, Photoshop, and Adobe XD designs using React.
          </li>
          <li>
            Maintained 99% client satisfaction, with 31% of projects serving
            global clients and 77% of orders receiving top ratings.
          </li>
          <li>
            Achieved 99% repeat business rate, demonstrating consistent quality
            and client trust.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "2",
    title: "TPS Advertising Agency",
    time: "April 2019 - April 2020",
    skills: [
      {
        id: "1",
        value: "react",
      },
      {
        id: "2",
        value: "html",
      },
      {
        id: "3",
        value: "css",
      },
      {
        id: "4",
        value: "js",
      },
    ],
    icons: [
      {
        id: "1",
        icon: htmlIcon,
      },
      {
        id: "2",
        icon: cssIcon,
      },
      {
        id: "3",
        icon: reactIcon,
      },
      {
        id: "3",
        icon: figmaIcon,
      },
    ],
    description: (
      <>
        <p>Frontend Development Lead</p>
        <ul>
          <li>Developed and maintained over 10 high-traffic local websites.</li>
          <li>
            Mentored and trained 2 Junior Frontend Developers, enhancing team
            productivity.
          </li>
          <li>
            Led frontend development, overseeing architecture and
            implementation.
          </li>
          <li>
            Provided UI/UX expertise to optimize existing websites for better
            usability and design.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "3",
    title: "Wisdom Technologies",
    time: "September 2017 - April 2019",
    skills: [
      {
        id: "1",
        value: "html",
      },
      {
        id: "2",
        value: "jinja(2)",
      },
      {
        id: "3",
        value: "css",
      },
      {
        id: "4",
        value: "js",
      },
      {
        id: "5",
        value: "docker",
      },
    ],
    icons: [
      {
        id: "1",
        icon: pythonIcon,
      },

      {
        id: "2",
        icon: htmlIcon,
      },
      {
        id: "3",
        icon: cssIcon,
      },
      {
        id: "3",
        icon: figmaIcon,
      },
    ],
    description: (
      <>
        <p>Python (Jinja2) Frontend Developer</p>
        <ul>
          <li>
            Developed and maintained custom Python-based CMS solutions using
            Django.
          </li>
          <li>
            Successfully migrated and transformed over 10 fully functional
            e-commerce websites.
          </li>
          <li>
            Converted Figma designs into responsive web interfaces using Python
            (Jinja2).
          </li>
          <li>
            Collaborated with version control (Git, GitLab) and containerized
            deployments (Docker).
          </li>
        </ul>
      </>
    ),
  },
];

// projects
export interface IProjectItem {
  id: string;
  image: StaticImageData;
  title: string;
  text: string;
  link: string;
}
export const projectsList = [
  {
    id: "1",
    image: project1,
    title: "Egards website",
    text: "React Typescript development and website animations",
    link: "https://egards.vercel.app/",
  },
  {
    id: "2",
    image: project2,
    title: "Website tourism",
    text: "HTML CSS development and custom map integration",
    link: "https://map-virid-eight.vercel.app/",
  },
  {
    id: "3",
    image: project3,
    title: "Mental Pilot",
    text: "Lnading page and app development",
    link: "https://mental-pilot.vercel.app/",
  },
  {
    id: "4",
    image: project4,
    title: "Affonso",
    text: "React typescript tailwind front end development",
    link: "https://afffonso.vercel.app/",
  },
  {
    id: "5",
    image: project5,
    title: "Branda website",
    text: "Front end development and website animations",
    link: "#",
  },
  {
    id: "6",
    image: project7,
    title: "Kyrotopia",
    text: "Design figma and Html css js development",
    link: "https://www.kyrotopia.com/",
  },
  {
    id: "7",
    image: project8,
    title: "Matzke photography",
    text: "React typescript development and website optimization",
    link: "https://matzke.vercel.app/",
  },
  {
    id: "8",
    image: project9,
    title: "Cabali Ai",
    text: "Lnading page and app development",
    link: "https://cabali-ai.vercel.app/",
  },
];
// testimonials
export interface ITestimonialItem {
  id: string;
  avatar: StaticImageData;
  profession: string;
  name: string;
  text: string;
}
export const testimonialsList = [
  {
    id: "01",
    avatar: avatar1,
    name: "@chasingprofit",
    profession: "United Kingdom",
    text: "Always very good. Dovran is a very talented developer and I trust him to develop websites for me. You should too!",
  },
  {
    id: "02",
    avatar: avatar2,
    name: "@lukasdrbohlav",
    profession: "Czech Republic",
    text: "Working with you has been an absolute pleasure. Clear communication, quick turnaround, and high-quality work throughout the entire process. Thank you for the excellent collaboration! I’m looking forward to working together again.",
  },
  {
    id: "03",
    avatar: avatar3,
    name: "@madlands",
    profession: "Paraguay",
    text: "Professional and efficient. Will definitely work with again.",
  },
  {
    id: "04",
    avatar: avatar4,
    name: "@meireag",
    profession: "Brazil",
    text: "It turned out really well, your work is really quality, I hope we can work together soon.",
  },
  {
    id: "05",
    avatar: avatar5,
    name: "@thelink77",
    profession: "United States",
    text: "Amazing rly. Goes out of his way to problem solve anything we need. He does precision work.",
  },
  {
    id: "06",
    avatar: avatar6,
    name: "@ricvezza",
    profession: "Spain",
    text: "Dovran has been amazing at turning around our required changes and communicates well. His understanding on UI/UX has been invaluable and we’ve been impressed with the suggestions and optimisations of our front end. Highly recommend ",
  },
];
// services
export interface IServiceItem {
  id: string;
  title: string;
  description: string;
  iconColor: string;
  features: string[];
}
export const servicesList = [
  {
    id: "1",
    title: "Custom Website Development",
    description:
      "I craft bespoke websites that embody your brand identity. Using modern technologies (HTML, CSS, JavaScript, and leading frameworks), I deliver responsive, high-performance sites optimized for all devices.",
    iconColor: "#C65FCF",
    features: [
      "Responsive Design: Websites that adapt beautifully on mobile, tablet, and desktop.",
      "Converting Figma, Photoshop, Adobe XD designs to responsive websites.",
      "SEO Optimization: Ensuring your website ranks well in search engines.",
    ],
  },
  {
    id: "2",
    title: "UI/UX Design & Prototyping",
    description:
      "I merge visual appeal with intuitive functionality to create engaging digital experiences. My human-focused approach prioritizes seamless navigation and thoughtful user flows.",
    iconColor: "#4BAE80",
    features: [
      "Wireframes & Mockups: Creating blueprints for your website’s structure and design.",
      "Interactive Prototypes: Building clickable prototypes to visualize user journeys.",
      "User Testing & Feedback: Iterating designs based on real user feedback.",
    ],
  },
  {
    id: "3",
    title: "Front-End Development",
    description:
      "I bring designs to life using the latest front-end technologies. My code is clean, maintainable, and optimized for performance.",
    iconColor: "#934FF0",
    features: [
      "HTML, CSS, JavaScript, React, Typescript, Vite, Next: Developing responsive and dynamic user interfaces.",
      "Framework: Proficient in React and modern, scalable solutions.",
      " Performance Optimization: Enhancing load times and performance metrics.",
    ],
  },
];
