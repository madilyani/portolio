import type { Metadata } from "next";
import "@/assets/css/main.scss";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import heroImage from "@/assets/images/hero.webp";

export const metadata: Metadata = {
  title: {
    default: "Madilyani | Frontend Developer & UI Designer",
    template: "%s | Madilyani",
  },
  description:
    "Professional portfolio showcasing frontend development and Figma design work...",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-96x96.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Madilyani | Frontend Developer & Designer",
    description: "Portfolio showcasing web development and UI design projects",
    type: "website",
    url: "https://portolio-bay-six.vercel.app/",
    images: "/magic-links/image-jpg.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madilyani - Frontend Developer",
    description: "Building beautiful, functional websites and designs",
    images: "/magic-links/image-jpg.jpg",
  },
  metadataBase: new URL("https://portolio-bay-six.vercel.app/"),
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href={heroImage.src}
          as="image"
          type="image/webp"
          fetchPriority="high"
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
