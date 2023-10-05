import "./globals.css";
import { Manrope } from "next/font/google";
import Hero from "@/components/Hero";
import Navigation from "@/components/Nav";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ilham Maulana Pratama",
  description: "Fullstack Developer and UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} scroll-smooth`}>
        <Navigation />
        <Hero />
        <main>{children}</main>
      </body>
    </html>
  );
}
