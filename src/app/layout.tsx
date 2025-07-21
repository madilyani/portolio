import type { Metadata } from "next";
import "@/assets/css/main.scss";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: {
    default: "Madilyani | Frontend Developer & UI Designer",
    template: "%s | Madilyani",
  },
  description:
    "D. Madilyani - Award-winning Frontend Developer & UI Designer. Specializing in React, Next.js, and Figma design for startups. 790+ projects delivered with 20+ successful fundraisers.",
  keywords: [
    "React developer",
    "Figma designer",
    "Next.js specialist",
    "TypeScript developer",
    "UI/UX designer",
    "freelance web developer",
    "responsive design expert",
    "frontend portfolio",
    "Fiverr Freelancer",
    "Fiverr Top Rated Seller",
  ],
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-96x96.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "D. Madilyani | React & UI Designer",
    description:
      "Looking for a React and Next.js developer? View 790+ projects by expert UI/UX designer D. Madilyani.",
    siteName: "Madilyani Portfolio",
    images: [
      {
        url: "https://www.madilyani.art/image-jpg.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Developer for Hire - D. Madilyani",
    description:
      "Frontend developer specializing in Next.js and Figma UI design",
    images: "https://www.madilyani.art/image-jpg.jpg",
  },
  metadataBase: new URL("https://www.madilyani.art/"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ position: "relative" }} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </head>
      <body>
        <div className="layout">
          <Header />
          <main className="main">
            {children}
            <Footer />
          </main>
          <div id="popups"></div>
        </div>
      </body>
    </html>
  );
}
