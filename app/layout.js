import "./globals.css";
import { Manrope } from "next/font/google";
import Hero from "@/components/Hero";
import Navigation from "@/components/Nav";
import Elipse1 from "@/components/icon/Elipse1";
import Elipse2 from "@/components/icon/Elipse2";

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
      <body className={manrope.className}>
        <Navigation />
        <Hero />
        <main className={"container mx-auto"}>{children}</main>
        <div className="absolute top-0 right-0 -z-50 animate-pulse">
          <Elipse1 />
        </div>
        <div className="absolute top-80 left-0 -z-50">
          <Elipse2 />
        </div>
      </body>
    </html>
  );
}
