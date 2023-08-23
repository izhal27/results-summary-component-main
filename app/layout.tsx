import "./globals.css";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

const inter = Hanken_Grotesk({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Results summary component",
  description: "Challenge by Frontend Mentor Coded by Risal Walangadi",
  icons: {
    icon: "favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
