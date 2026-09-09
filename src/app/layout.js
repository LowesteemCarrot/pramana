import { Inter, Playfair_Display } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PRAMANA — Your Business Growth Partner",
  description:
    "Result-driven approach empowers you to confidently face challenges, embrace new opportunities, and achieve business growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
