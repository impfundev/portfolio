import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ilham Maulana Pratama",
  description: "Full-Stack Developer and UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} scroll-smooth dark bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
